const isEmpty = require('./isEmpty');
const validator = require('validator')
module.exports = function ValidateRegister(data){
let errors = {};
    data.matricule = !isEmpty(data.matricule) ? data.matricule :""
    data.password = !isEmpty(data.password) ? data.password:""
    data.confirm = !isEmpty(data.confirm) ? data.confirm:""

if (validator.isEmpty(data.matricule)){
    errors.matricule = "Required matricule";
}
if (validator.isEmpty(data.password)){
    errors.password = "Required password";
}
if (!validator.equals(data.password, data.confirm)){
    errors.confirm ="Passwords not matches"; 
 }
if (validator.isEmpty(data.confirm)){
    errors.confirm = "Required confirm";
}


return{
    errors,
    isValid: isEmpty(errors)
}};