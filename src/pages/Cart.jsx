import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity, selectCartItems } from '../redux/cartSlice.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../assets/App.css';

function Cart() {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Din Kurv</h1>
            <ul className="grid grid-cols-3 gap-6">
                {cartItems.map(item => (
                    <li key={item.id} className="w-80 border-separate border-spacing-6 border border-yellow-500 shadow-lg p-4 rounded-lg">
                        <div className="flex items-center space-x-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                            <div>
                                <h3 className="text-lg font-semibold">{item.name}</h3>
                                <p className="text-sm">Antal: {item.quantity}</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 mt-4">
                            <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600" onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                            <button className="px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 flex items-center justify-center" onClick={() => dispatch(removeFromCart(item.id))}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2 className="text-xl font-bold mt-6">Checkout</h2>
            <p className="text-lg">Total produkter: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
        </div>
    );
}

export default Cart;