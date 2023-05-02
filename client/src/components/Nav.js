import React from "react";
import {NavLink} from "react-router-dom";
import "../Style/superv.css";

function Nav() {
  
  return (
    <nav className="nav2">
    <ul className="supna">
        <NavLink to='/superviseur' ><li className="item" >Noeuds</li></NavLink>
        <NavLink to='/gestionAlarme' ><li className="item" >Gestion d'alarmes</li></NavLink>
    </ul></nav>
  );
};

export default Nav;
