import { Link } from "react-router-dom"

export default function HomePage() {

    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/AboutUs">About us</Link>
                    <Link to="/products">Products</Link>
                </nav>
            </header>
            <main></main>
            <footer></footer>
        </>
    )
}