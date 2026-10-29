import { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart]= useState(0);

  return (
    <div>
      <nav>
      <h2>ShopSphere</h2>

      <div>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="about">About</a>
      </div>

      <button>Cart ({cart})</button>
      </nav>

      <section className="hero" id="home">
        <div className="hero=content">
          <p className="tagline">NEW COLLECTION 2026</p>
          
          <h1>Style that Speaks <br/> For You. </h1>
            
          <p className="hero-text">Discover your style with latest fashion collection.</p>
          
          <button className="shop-btn">Shop Now</button>
          
          <div classname="hero-image">👕</div>
        </div>
      </section>

      <section className="products" id="products">
        <h2>Featured Products</h2>
        
        <input type="text" 
               placeholder="Search products"
               className="search-input" />
               
        <p className="products-subtitle">Discover our latest collection</p>

        <div className="product-list"> 
          <div className="product-card">
            <div className="product-image">👕</div>
            <h3>Casual T-shirt</h3>
            <p className="price">₹499</p>
            <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
        </div>

        <div className="product-card">
            <div className="product-image">👟</div>
            <h3>Running Shoes</h3>
            <p className="price">₹1,299</p>
            <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
        </div>

        <div className="product-card">
            <div className="product-image">👜</div>
            <h3>Fashion Bag</h3>
            <p className="price">₹899</p>
            <button onClick={() => setCart(cart + 1)}>Add to Cart</button>
        </div>
        </div> </section>

    </div>
  )
}

export default App;