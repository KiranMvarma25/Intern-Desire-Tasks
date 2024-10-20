const Order = require('../models/Order');

const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(201).json(newOrder);
};

const getOrders = async (req, res) => {
    const orders = await Order.find().populate('user', 'name email');
    res.json(orders);
};

module.exports = { createOrder, getOrders };
