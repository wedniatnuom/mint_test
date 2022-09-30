const db = require('../config/connection');
const { Listing, Category, User, Order } = require('../models');
const antiqueSeeds = require('./antiqueSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const orderSeeds = require('./orderSeeds.json');
const userSeeds = require('./userSeeds.json');

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Category.deleteMany({});
        await Listing.deleteMany({});
        await Order.deleteMany({});

        const users = await User.insertMany(userSeeds);
        const categories = await Category.insertMany(categorySeeds);
        const listings = await Listing.insertMany(antiqueSeeds);
        const orders = await Order.insertMany(orderSeeds);

        for (newListing of listings) {
            const tempcategory = categories[Math.floor(Math.random() * categories.length)]
            newListing.category = tempcategory._id;
            await newListing.save();
        }

        for (newOrders of orders) {
            const tempOrder = orders[Math.floor(Math.random() * orders.length)]
            newOrders.listing.push(tempOrder._id)
            await newOrders.save();
        }


        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
