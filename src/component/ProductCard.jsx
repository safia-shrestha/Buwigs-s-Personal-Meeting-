import './ProductCard.css'

function ProductCard({ title, price, image, rating }) {
  return (
    <div className="product-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <div className="card-rating">
          <span>⭐</span> {rating} / 5
        </div>
        <div className="card-footer">
          <span className="card-price">NPR {price.toLocaleString()}</span>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard