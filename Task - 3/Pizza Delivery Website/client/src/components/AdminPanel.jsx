import React, { useEffect, useState } from 'react';
import pizzaApi from "./pizzaApi";


const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const fetchedOrders = await pizzaApi.getOrders();
      setOrders(fetchedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
};

export default AdminPanel;
