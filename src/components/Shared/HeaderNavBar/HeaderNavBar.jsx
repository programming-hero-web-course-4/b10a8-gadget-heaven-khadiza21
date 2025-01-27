
import { NavLink } from 'react-router-dom';

const HeaderNavBar = () => {
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
      </nav> 
        </div>
    );
};

export default HeaderNavBar;