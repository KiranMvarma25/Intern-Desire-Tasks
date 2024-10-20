import React, { useState } from 'react';
import pizzaApi from '../api/pizzaApi';

const AddPizza = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [toppings, setToppings] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPizza = { name, price, toppings: toppings.split(',') };
        await pizzaApi.addPizza(newPizza);
        setName('');
        setPrice('');
        setToppings('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Pizza</h2>
            <input 
                type="text" 
                placeholder="Pizza Name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required 
            />
            <input 
                type="number" 
                placeholder="Price" 
                value={price} 
                onChange={(e) => setPrice(e.target.value)} 
                required 
            />
            <input 
                type="text" 
                placeholder="Toppings (comma separated)" 
                value={toppings} 
                onChange={(e) => setToppings(e.target.value)} 
                required 
            />
            <button type="submit">Add Pizza</button>
        </form>
    );
};

export default AddPizza;
