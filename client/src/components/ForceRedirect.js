import React from "react"
import {Navigate} from 'react-router-dom'

const ForceRedirect = ({user, children}) => {
 
    if(user.isConnected && user.role === "superviseur"){
        return <Navigate to="/superviseur" replace/>}
        
        else if(user.isConnected && user.role === "agent"){
            return <Navigate to="/agent" replace/>
        }return children 
}

export default ForceRedirect
