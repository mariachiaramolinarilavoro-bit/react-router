import { NavLink } from "react-router-dom"

const getActive = ({ isActive }) => isActive ? "nav-link active text-primary" : "nav-link text-white"

export default function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand bg-dark navbar-dark p-4">
        <NavLink to="/" className="navbar-brand fw-bold">MyShop</NavLink>
        <div className="navbar-nav ms-auto gap-3 text-white">
          <NavLink to="/" className={getActive}>Home</NavLink>
          <NavLink to="/aboutus" className={getActive}>About us</NavLink>
          <NavLink to="/products" className={getActive}>Products</NavLink>
        </div>
      </nav>
    </header>
  )
}