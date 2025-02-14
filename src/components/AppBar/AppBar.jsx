import Navigation from "../Navigation/Navigation";
import AuthNav from "../AuthNav/AuthNav";

import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
    </header>
  );
};
export default AppBar;
