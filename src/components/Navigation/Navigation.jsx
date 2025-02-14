import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
    </nav>
  );
};

export default Navigation;
