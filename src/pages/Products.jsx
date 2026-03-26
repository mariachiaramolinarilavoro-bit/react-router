import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Products() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <p>Loading products...</p>

  return (
    <>
      <div className="container mt-4 mb-2">
        <h1 className="mb-4">Products</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="card h-100 p-2 border-dark">
                <img src={product.image} alt={product.title} className="products p-4" />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title mt-auto">{product.title}</h3>
                  <p className="card-text">€ {product.price} </p>
                  <Link to={`/products/${product.id}`} className="btn btn-dark mt-2">
                    See detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}