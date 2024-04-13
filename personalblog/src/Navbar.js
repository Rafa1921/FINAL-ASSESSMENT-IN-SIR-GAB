import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css"; // CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">
          <Link to="/">PersonalBlogs</Link>
        </h1>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
