import React from "react";
import { useDispatch } from "react-redux";
import {NavLink} from "react-router-dom"
import { Logout } from "../redux/actions/authActions";
import "../Style/nvspint.css";
function NavInterv() {
  const dispatch = useDispatch()
  const LogoutHandler = () => {
    dispatch(Logout)
  }
  return (
    <nav>
      <ul className="liste">
        <NavLink to='/connection'><li className="items" onClick={LogoutHandler}>Déconnexion</li></NavLink>
      </ul>
    </nav>
  );
};

export default NavInterv;
