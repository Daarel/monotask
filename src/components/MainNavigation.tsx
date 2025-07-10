import { NavLink } from "react-router-dom";

import { navLink } from "../../constants/index";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {navLink.map(({ id, title, path }) => (
            <li key={id}>
              <NavLink to={path}>{title}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
