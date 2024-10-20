import React from 'react';
import pizzaApi from "./pizzaApi";


const OrderPizza = () => {
  const handleOrder = async (orderData) => {
    try {
      const result = await pizzaApi.orderPizza(orderData);
      console.log('Order result:', result);
    } catch (error) {
      console.error('Error ordering pizza:', error);
    }
  };

  return (
    <div>
      
    </div>
  );
};

export default OrderPizza;