import { /* Link */ NavLink } from "react-router-dom"

const getActive = ({ isActive }) => isActive ? "active" : ""

export default function Navbar() {
  return (
    <header>
      <nav>
        <NavLink to="/" className={ getActive }>Home</NavLink>
        <NavLink to="/aboutus" className={ getActive }>Chi siamo</NavLink>
        <NavLink to="/products" className={ getActive }>Prodotti</NavLink>
      </nav>
    </header>
  )
}