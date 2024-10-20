import axios from 'axios';

const pizzaApi = {
  getOrders: async () => {
    const response = await axios.get('http://localhost:5000/api/pizzas/orders'); 
    return response.data;
  },

  orderPizza: async (orderData) => {
    const response = await axios.post('http://localhost:5000/api/pizzas/orders', orderData); 
    return response.data;
  },

  getOrderStatus: async (orderId) => {
    const response = await axios.get(`http://localhost:5000/api/orders/status/${orderId}`); 
    return response.data;
  },

};

export default pizzaApi;