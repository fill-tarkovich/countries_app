import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Countries App</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recipes">Countries</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
