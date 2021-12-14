import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../AppContext";

const Nav = () => {
  const { currentUserIsInGroup } = useContext(AppContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Welcome</NavLink>
        </li>

        {currentUserIsInGroup("loggedOutUsers") && (
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
        )}

        {currentUserIsInGroup("loggedOutUsers") && (
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
        )}

        {currentUserIsInGroup("admins") && (
          <li>
            <NavLink to="admin">Admin</NavLink>
          </li>
        )}

        {currentUserIsInGroup("loggedINUser") && (
          <li>
            <NavLink to="logout">Logout</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
