import React from 'react';
import { OrderProvider } from './context/OrderContext';
import Header from './components/Header';
import AddPizza from './components/AddPizza';
import OrderPizza from './components/OrderPizza';
import AdminPanel from './components/AdminPanel';
import OrderStatus from './components/OrderStatus';
import './styles.css';

const App = () => {
    return (
        <OrderProvider>
            <Header />
            <AddPizza />
            <OrderPizza />
            <AdminPanel />
            <OrderStatus />
        </OrderProvider>
    );
};

export default App;
