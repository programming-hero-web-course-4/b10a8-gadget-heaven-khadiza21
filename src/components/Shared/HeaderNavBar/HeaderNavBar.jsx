
import { NavLink } from 'react-router-dom';
import { useCart } from '../../../contextS/CartWishListContext';

const HeaderNavBar = () => {
  const { cart, wishlist } = useCart(0);
    const style = (isActive ) => ({
        fontWeight: isActive ? "bold" : "normal",
      });
    return (
        <div>
          
           <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home"   style={style}>Home</NavLink>
        <NavLink to="/dashboard"   style={style}>Dashboard</NavLink>
        <NavLink to="/statistics"   style={style}>Statistics</NavLink>
        <NavLink to="/about"  style={style} >About</NavLink>
        <span>Cart: {cart.length}</span> | <span>Wishlist: {wishlist.length}</span>
      </nav> 
        </div>
    );
};

export default HeaderNavBar;