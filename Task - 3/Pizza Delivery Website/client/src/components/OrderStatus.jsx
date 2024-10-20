import React, { useState } from 'react';
import pizzaApi from '../api/pizzaApi';

const OrderStatus = () => {
    const [orderId, setOrderId] = useState('');
    const [status, setStatus] = useState('');

    const checkStatus = async () => {
        const order = await pizzaApi.getOrderStatus(orderId);
        setStatus(order.status);
    };

    return (
        <div>
            <h2>Check Order Status</h2>
            <input 
                type="text" 
                placeholder="Order ID" 
                value={orderId} 
                onChange={(e) => setOrderId(e.target.value)} 
                required 
            />
            <button onClick={checkStatus}>Check Status</button>
            {status && <p>Status: {status}</p>}
        </div>
    );
};

export default OrderStatus;
