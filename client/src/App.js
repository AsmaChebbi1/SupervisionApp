import React from "react";

import Inscription from "./pages/Inscription";
import Connection from "./pages/Connection";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Agent from "./pages/Agent";
import Superviseur from "./pages/Superviseur";
import Noeuds from "./pages/Noeuds";
import GestionAlarme from "./pages/GestionAlarme";
import NoAccess from "./pages/NoAccess";
import NotFound from "./pages/NotFound";
import PrivateRouter from "./components/PrivateRouter";
import ForceRedirect from "./components/ForceRedirect";
import AgentRouter from "./components/AgentRouter";
import store from './redux/store' ;
import { setUser } from "./redux/actions/authActions";
import { useSelector } from "react-redux";
import jwt_decode from 'jwt-decode';
if(localStorage.jwt){
  const decode = jwt_decode(localStorage.jwt)
  store.dispatch(setUser(decode))
}


function App() {
  const auth = useSelector(state => state.auth)
  const user={
    isConnected: auth.isConnected,//on l'envoi avec props
    role: auth.user.role
  }
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path="/superviseur"  element={<PrivateRouter user={user}><Superviseur /></PrivateRouter>} />
      <Route path="/" element={<ForceRedirect user={user}><Inscription /></ForceRedirect>} />
      <Route path="/connection" element={<ForceRedirect user={user}><Connection /></ForceRedirect>} />
      <Route path="/agent" element={<AgentRouter user={user}><Agent /></AgentRouter>} />
      <Route path="/noeuds" element={<PrivateRouter user={user}><Noeuds /></PrivateRouter>} />  
      <Route path="/gestionAlarme" element={<PrivateRouter user={user}><GestionAlarme /></PrivateRouter>} />
      <Route path="*" element={<NotFound/>} />
      <Route path="/noaccess" element={<NoAccess/>} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
