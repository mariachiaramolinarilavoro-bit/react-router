import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutus">Chi siamo</Link>
        <Link to="/products">Prodotti</Link>
      </nav>
    </header>
  )
}