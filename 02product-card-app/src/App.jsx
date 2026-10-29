import ProductCard from './components/ProductCard'
import './App.css'

function App() {
  return (

      <div className="app">
        <h1>Product Card App</h1>

        <div className="product-list">
          <ProductCard 
            name="Laptop" 
            price={70000}
            rating={4.5}
            image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ7CwU4FsmXLQabPGZO6zhYDrWUWHPRuMTvbXYnY6edIcCXKohtkSCVf_ESwlUrDBY-JA-2rQ-1DaEOaL98go2t74FKkKBSj-_H-wTntdUy8zaM44wPCFUB" />
          
          <ProductCard 
            name="Smartphone" 
            price={50000}
            rating={4.2}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj8NYyOtv4jky5OrrNZK-fpwdIIfWKGPTIq--klrFgA&s" />
          
          <ProductCard 
            name="Headphones" 
            price={3500}
            rating={4.5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWzSPCDLlmwcb0Q_hnOpZsyc4oU0P2YPYQ58zMTIW-w&s=10s" />  
            </div>
    </div>
  );
}

export default App;
