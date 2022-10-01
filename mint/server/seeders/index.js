const db = require('../config/connection');
const { 
    Listing, 
    Category, 
    User, 
    Order, 
    Antique, 
    ComicBook } = require('../models');
const antiqueSeeds = require('./antiqueSeeds.json');
const categorySeeds = require('./categorySeeds.json');
const orderSeeds = require('./orderSeeds.json');
const userSeeds = require('./userSeeds.json');
const comicbookSeeds = require('./comicBooks.json')

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Category.deleteMany({});
        await Listing.deleteMany({});
        // await Antique.deleteMany({})
        // await ComicBook.deleteMany({})
        await Order.deleteMany({});

        const users = await User.insertMany(userSeeds);
        const categories = await Category.insertMany(categorySeeds);
        const antiques = await Listing.insertMany(antiqueSeeds);
        const comicbooks = await Listing.insertMany(comicbookSeeds)
        const orders = await Order.insertMany(orderSeeds);

        // for (newAntique of antiques) {
        //     const tempcategory = categories[Math.floor(Math.random() * categories.length)]
        //     newAntique.category = tempcategory._id;
        //     await newAntique.save();
        // }

        // for (newComicBook of comicbooks) {
        //     const tempcategory = categories[Math.floor(Math.random() * categories.length)]
        //     newComicBook.category = tempcategory._id;
        //     await newComicBook.save();
        // }

        for (newListing of antiques) {
            const tempcategory = categories[Math.floor(Math.random() * categories.length)]
            newListing.category = tempcategory._id;
            await newListing.save();
        }
        for (newListing of comicbooks) {
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
