import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

export default function ProductDetail() {

  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return <p>Loading product...</p>

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <img src={product.image} alt={product.title} className="img-fluid p-4" />
        </div>
        <div className="col-md-8">
          <h1>{product.title}</h1>
          <p className="text-secondary">{product.category}</p>
          <p>{product.description}</p>
          <p className="fw-bold fs-4">€ {product.price}</p>
          <button className="btn btn-outline-dark  mb-4">Add to cart</button>
        </div>
      </div>
    </div>
  )
}