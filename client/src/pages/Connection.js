import React from "react";
import Navigation from "../components/Navigation";
import '../Style/conn.css';
import { useState } from "react";
import Inputs from "../components/Inputs";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { LoginAction } from "../redux/actions/authActions";

function Connection() {
  const [form, setForm] = useState({})
  const dispatch = useDispatch()

  const errors = useSelector(state => state.errors)
  const navigate = useNavigate()
  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value

    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(LoginAction(form, navigate));}
    
  return (
    <div>
      <Navigation />
      <div className="conn">

        <form name="fo" onSubmit={onSubmit}>
          <Inputs type="text" name="matricule" placeholder="Matricule" required onChangeHandler={onChangeHandler} errors={errors.matricule} /><br />
          <br />
          <Inputs type="password" name="password" placeholder="Mot de passe" required onChangeHandler={onChangeHandler} errors={errors.password} /><br />
          <a href="/" className="abc" color="weightt">S'inscrire</a>
          <button type="submit">Se connecter</button></form></div></div>
  );
}
export default Connection;