import { useState, useEffect } from "react"

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

  if (loading) return <p>Caricamento in corso prodotti...</p>

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>€ {product.price}</p>
          </div>
        ))}
      </div>
    </>
  )
}