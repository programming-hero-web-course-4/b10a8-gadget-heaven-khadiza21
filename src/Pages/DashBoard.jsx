import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Cart from '../components/cart/Cart'
import Wishlist from '../components/wishlist/Wishlist'

const DashBoard = () => {


  const [activeTab, setActiveTab] = useState("cart");




  return (
    <div>

     
        <div className="text-center py-3 " style={{ backgroundColor: '#9538E2' }}>
          <Container className="py-5">
            <h2 className="fw-bold text-white bg-purple py-3 rounded">
            Dashboard
            </h2>
            <p className="text-white py-3">
            Explore the latest gadgets that will take your experience to the next level. <br />From smart devices to the coolest accessories, we have it all!
            </p>

            <div className="d-flex  justify-content-center   rounded">
              <Button  
                variant={activeTab === "cart" ? "light" : "#9538E2"}
                className="me-2 text-dark fw-bold btn btn-outline-light"
                style={{borderRadius:'24px', padding:'10px 20px', width:'150px'}}
                onClick={() => setActiveTab("cart")}
              >
                Cart
              </Button>
              <Button  
                variant={activeTab === "wishlist" ? "light" : "#9538E2"}
                className="text-dark fw-bold btn btn-outline-light"
                style={{borderRadius:'24px', padding:'10px 20px', width:'150px'}}
                onClick={() => setActiveTab("wishlist")}
              >
                Wishlist
              </Button>
            </div>

          </Container>
     
      </div>






      <Container className="my-5 py-5">{activeTab === "cart" ? <Cart /> : <Wishlist />} </Container>




    </div >
  );
};

export default DashBoard;
