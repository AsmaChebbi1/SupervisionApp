import React  from "react";
import {NavLink} from "react-router-dom";
import "../Style/nv.css";
function Navigation() {
  
  return (
    <nav>
<ul className="liste">
    <NavLink to="/"><li className="items" >Inscription</li></NavLink>
    <NavLink to="/connection" ><li className="items" >Connexion</li></NavLink>
</ul>
    </nav>
  );
};

export default Navigation;
