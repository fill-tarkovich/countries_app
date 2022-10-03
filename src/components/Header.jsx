import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
            <Link to="/countries">Countries</Link>
          </li>
          <li>
            <Link to="/favorites">
              Favorites(
              {useSelector((state) => state.favorites.favoritesList).length ??
                0}
              )
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
