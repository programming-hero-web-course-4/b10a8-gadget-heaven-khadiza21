import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    const style = (isActive ) => ({
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: isActive ? "underline" : "none",
        color: isActive ? "blue" : "black",
      });

    return (
        <div>
            <h1>This is Dashboard</h1>
            <div>
                   
           <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="cart"   style={style}>Cart</NavLink> {" | "}
        <NavLink to="wishlist"   style={style}>Wishlist</NavLink>
     
      </nav> 
      <Outlet />
            </div>
        </div>
    );
};

export default DashBoard;