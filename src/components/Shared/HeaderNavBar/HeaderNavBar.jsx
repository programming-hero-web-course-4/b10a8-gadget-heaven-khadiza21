
import { NavLink } from 'react-router-dom';

const HeaderNavBar = () => {
    const style = (isActive ) => ({
        fontWeight: isActive ? "bold" : "normal",
      });
    return (
        <div>
            <h1>nav</h1>
           <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home"   style={style}>Home</NavLink>
        <NavLink to="/about"  style={style} >About</NavLink>
      </nav> 
        </div>
    );
};

export default HeaderNavBar;