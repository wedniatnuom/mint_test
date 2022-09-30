const mongoose = require('mongoose');

const { Schema } = mongoose;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
    },
    price: {
        type: Number,
        min: 0.99,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    }
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;