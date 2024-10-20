require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./config/db'); 

const app = express();


app.use(cors({
  origin: 'http://localhost:5173',
}));
app.use(express.json());


connectDB(); 


const Order = require('./models/Order'); 


app.get('/api/pizzas/orders', async (req, res) => {
  try {
    
    const orders = await Order.find({});
    res.status(200).json(orders); 
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



// Sample Data

// app.post('/api/pizzas/orders/sample', async (req, res) => {
//   const sampleOrders = [
//     {
//       customerName: 'Marsh',
//       pizzaType: 'Chicken',
//       toppings: ['Masala', 'Mushrooms'],
//       quantity: 2,
//       totalPrice: 20,
//     },
//     {
//       customerName: 'Smith',
//       pizzaType: 'Normal',
//       toppings: ['Extra Cheese'],
//       quantity: 1,
//       totalPrice: 15,
//     },
//   ];

//   try {
//     await Order.insertMany(sampleOrders);
//     res.status(201).json({ message: "Sample orders added!" });
//   } catch (error) {
//     console.error("Error adding sample orders:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });




const port = process.env.PORT || 5000; 
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});