import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { selectProfit } from '../redux/cartSlice.js';
import '../assets/App.css';

function NavBar() {
  const profit = useSelector(selectProfit);

  return (
    <nav className="p-6 bg-lime-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link to="/">Hjem</Link></li>
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>Profit: {profit} kr.</span>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;