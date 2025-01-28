import { useCart } from "../../contextS/CartWishListContext";


const Wishlist = () => {
    const { wishlist, removeFromWishlist,
        moveToCartFromWishlist } = useCart();
        
    return (
        <div>
        <h1>Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div>
            {wishlist.map((product) => (
              <div key={product.product_id}>
                <h3>{product.product_title}</h3>
            
                <button onClick={() => moveToCartFromWishlist(product)}>
                  Add to Cart
                </button>
                
                <button onClick={() => removeFromWishlist(product.product_id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
};

export default Wishlist;