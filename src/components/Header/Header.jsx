// import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="nav">
        {/* <h1>Michael Horton</h1> */}
        <h1>Michael Horton</h1>
        <ul className="list">
          <li className="list-none">
            <a href="#">Home</a>
          </li>
          <li className="list-none">
            <a href="#">About</a>
          </li>
          <li className="list-none">
            <a href="#">Projects</a>
          </li>
          <li className="list-none">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
