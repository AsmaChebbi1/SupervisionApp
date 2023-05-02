import React from "react";
import Classnames from 'classnames'
function Inputs({name,label,type,placeholder,onChangeHandler,errors}) {
return(
<div>
    <input type={type} name={name} class={Classnames("form-control",{"is-invalid": errors} )} placeholder={placeholder} label={label} onChange={onChangeHandler}></input>
{
    errors && (<div class="invalid-Feedback" >
        
        {errors}
      </div>)}
 </div>)}
    

export default Inputs