import React from "react";

import { Link, useLocation } from "react-router-dom";

import { headerMenus, searchKeyword } from "../../data/header";

const Menu = () => {
  const location = useLocation();
  console.log(decodeURI(location.pathname));

  return (
    <nav className="header__menu">
      <ul className="menu">
        {headerMenus.map((menu, key) => (
          <li
            key={key}
            className={location.pathname === menu.src ? "active" : ""}
          >
            <Link to={menu.src}>
              {menu.icons}
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="keyword">
        {searchKeyword.map((keyword, key) => (
          <li
            key={key}
            className={
              decodeURI(location.pathname) === keyword.src ? "active" : ""
            }
          >
            <Link to={keyword.src}>{keyword.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;