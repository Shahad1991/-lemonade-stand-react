// filepath: /Users/shahadnazar/Documents/GitHub/-Lemonade-Stand/src/pages/Home.jsx
import '../assets/App.css';
import { useSelector } from 'react-redux';
import { selectProfit } from '../redux/cartSlice.js';

function Home() {
    const profit = useSelector(selectProfit);

    return (
        <div className='container mx-auto p-50 place-items-center'>
            <h1 className='text-2xl p-3'>Profit Oversigt</h1>
            <p>Total profit: {profit} kr.</p>
        </div>
    );
}

export default Home;