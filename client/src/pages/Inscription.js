import React from "react";
import '../Style/inscr.css';
import Navigation from "../components/Navigation";
import {useState} from 'react'
import Inputs from "../components/Inputs";
import { Registration } from "../redux/actions/authActions";
import { useDispatch, useSelector} from 'react-redux' ;
import { useNavigate } from "react-router-dom";
function Inscription() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()

const errors=useSelector(state=>state.errors)
const navigate = useNavigate()
const onChangeHandler = (e) =>{
setForm({
    ...form,
    [e.target.name]: e.target.value

})
}
const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(Registration(form, navigate));
}

return (
         <div>
     <Navigation/>
          <div className="inscr">
               
<form name="form" onSubmit={onSubmit}>
     
    <Inputs name="matricule" label="Matricule" type="text" placeholder="Matricule" required onChangeHandler={onChangeHandler} errors={errors.matricule}/><br/>
    <Inputs name="password" type="password" label="Motdepasse" placeholder="Mot de passe" required onChangeHandler={onChangeHandler} errors={errors.password}/><br/>
    <Inputs name="confirm"type="password" label="Confirm" placeholder="Confirmer mot de passe" required onChangeHandler={onChangeHandler} errors={errors.confirm}/><br/>
    <Inputs name="role" type="text" label="Role" placeholder="Role: Superviseur/Agent" required onChangeHandler={onChangeHandler} errors={errors.role}/><br/>


 
 <button type="submit">S'inscrire</button>
    </form>
    </div></div>
    );
  }
  export default Inscription;