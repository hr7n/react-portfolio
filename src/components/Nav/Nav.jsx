// import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-container">
      <h1>Michael Horton</h1>
      <ul className="flex space-x-4 list-none">
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
