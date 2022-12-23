import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          {/* <img src="https://e7.pngegg.com/pngimages/763/515/png-clipart-logo-tea-room-banner-brand-tea-text-rectangle.png" alt="logo" /> */}
          <h1 style={{color: "white"}}>T.P.</h1>
        </div>
        <ul className="navbar__ul">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
