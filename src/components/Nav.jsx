import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-container">
      <h1>Michael Horton</h1>
      <ul className="flex space-x-4 list-none list-container">
        <li>
          <Link className="link" to="/home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link text-white hover:text-gray-300" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link text-white hover:text-gray-300" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link text-white hover:text-gray-300" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
