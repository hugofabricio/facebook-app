import React from "react";
import Brand from "../../assets/images/brand.svg";
import "./style.css";

const Header = () => (
  <header className="header">
    <div className="header-brand">
      <Brand />
    </div>
    <div className="header-menu">
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#" className="menu-link" title="Meu perfil">
              Meu perfil
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
