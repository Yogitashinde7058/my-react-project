function ProductCard({name, price, image, rating}) {
    return (
        <div className="product-card">
            <img src={image} alt={name} />
            
            <div className="product-details">
                <h2>{name}</h2>

                <p className="price">₹{price}</p>

                <p className="rating">⭐ {rating}</p>
            
            <button>Add to Cart</button>
        </div>
        </div>
    ) 
}

export default ProductCard;