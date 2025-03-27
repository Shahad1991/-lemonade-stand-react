import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/cartSlice.js';
import '../assets/App.css';  

function Shop() {
    const [drinks, setDrinks] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
            .then(res => res.json())
            .then(data => setDrinks(data.drinks || []));
    }, []);

    const handleAddToCart = (drink) => {
        dispatch(addToCart({ id: drink.idDrink, name: drink.strDrink, image: drink.strDrinkThumb }));
    };
    const handleRemoveFromCart = (drink) => {
        dispatch(removeFromCart({ id: drink.idDrink, name: drink.strDrink, image: drink.strDrinkThumb }));
    };

    return (
        <div className='container mx-auto p-4 place-items-center'>
            <h1 className='py-4 font-serif text-xl'>Shop</h1>
            <ul className="grid grid-cols-3 gap-6 ">
                {drinks.map(drink => (
                    <li className='w-80 border-separate border-spacing-6 border border-yellow-500 shadow-lg' key={drink.idDrink}>
                        <img  className="grid grid-cols-3 gap-4 "src={drink.strDrinkThumb} alt={drink.strDrink} />
                        <h3 className='p-2  font-serif text-lg'>{drink.strDrink}</h3>
                        <div className='flex justify-between p-2'>
                        <button className='px-2 py-1 border rounded-xl bg-yellow-500 hover:bg-green-600 text-white text-sm cursor-pointer' onClick={() => handleAddToCart(drink)}>Tilføj til kurv</button>
                        <button className='px-2 py-1 border rounded-xl border-yellow-500 hover:bg-red-600 cursor-pointer text-sm' onClick={() => handleRemoveFromCart(drink)}>Fjern fra kurv</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Shop;