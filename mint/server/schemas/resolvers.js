const { 
  Listing, 
  User, 
  Order, 
  // Antique, 
  // ComicBook 
} = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.listings',
          populate: 'category'
        });

        user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: 'orders.listings',
          populate: 'category'
        });

        return user.orders.id(_id);
    }

    throw new AuthenticationError('Not logged in');
    },
    listing: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return Listing.find(params);
    },
    listings: async (parent, { category, name }) => {
      const params = {};

      if (category) {
        params.category = category;
      }

      if (name) {
        params.name = {
          $regex: name
        };
      }

      return await Listing.find().populate('category');
    },
    // antiques: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return Antique.find(params);
    // },
    // antiques: async (parent, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }

    //   return await Antique.find().populate('category');
    // },
    // comicbooks: async (parent, { _id }) => {
    //   const params = _id ? { _id } : {};
    //   return ComicBook.find(params);
    // },
    // comicbooks: async (parent, { category, name }) => {
    //   const params = {};

    //   if (category) {
    //     params.category = category;
    //   }

    //   if (name) {
    //     params.name = {
    //       $regex: name
    //     };
    //   }

    //   return await ComicBook.find().populate('category');
    // }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { listings }, context) => {
      if (context.user) {
        const order = new Order({ listings });

        await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

        return order;
      }

      throw new AuthenticationError('Not logged in');
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect Email and/or Password');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect Email and/or Password');
      }

      const token = signToken(user);

      return { token, user }; 
    }
  }
};
module.exports = resolvers;
