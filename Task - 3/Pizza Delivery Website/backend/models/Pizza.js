const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        category: { type: String, required: true },
        toppings: [{ name: { type: String, required: true }, price: { type: Number, required: true } }],
    },
    { timestamps: true }
);

module.exports = mongoose.model('Pizza', pizzaSchema);
