import React from "react";
import { useDispatch } from "react-redux";
import {Link} from "react-router-dom"
import { Logout } from "../redux/actions/authActions";
import "../Style/nvspint.css";
function NavSup({user}) {
  const dispatch = useDispatch()
  const LogoutHandler = ()=>{
     dispatch(Logout)
  }
  return (
    <nav>
<ul className="liste">
  
    <Link to='/connection'><li className="items" onClick={LogoutHandler}>Déconnexion</li></Link>
    
</ul>
    </nav>
  );
};

export default NavSup;
