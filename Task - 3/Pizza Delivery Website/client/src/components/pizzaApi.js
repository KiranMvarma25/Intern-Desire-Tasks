import axios from 'axios';

const pizzaApi = {
  getOrders: async () => {
    const response = await axios.get('http://localhost:5000/api/pizzas/orders'); // Ensure this matches your backend endpoint
    return response.data;
  },

  orderPizza: async (orderData) => {
    const response = await axios.post('http://localhost:5000/api/pizzas/orders', orderData); // Ensure this matches your backend endpoint
    return response.data;
  },

  getOrderStatus: async (orderId) => {
    const response = await axios.get(`http://localhost:5000/api/orders/status/${orderId}`); // Ensure this matches your backend endpoint
    return response.data;
  },

  // Add more API methods as needed
};

export default pizzaApi;



























// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api'; // Base URL for your API

// const pizzaApi = {
//     getPizzas: async () => {
//         const response = await axios.get(`${API_URL}/pizzas`);
//         return response.data;
//     },
//     addPizza: async (pizza) => {
//         const response = await axios.post(`${API_URL}/pizzas/add`, pizza);
//         return response.data;
//     },
//     // Add other API methods as needed
// };

// export default pizzaApi;
