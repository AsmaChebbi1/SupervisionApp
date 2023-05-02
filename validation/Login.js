const isEmpty = require('./isEmpty');
const validator = require('validator');
module.exports = function ValidateLogin(data){
let errors = {};
    data.matricule = !isEmpty(data.matricule) ? data.matricule:""
    data.password = !isEmpty(data.password) ? data.password:""

if (validator.isEmpty(data.matricule)){
    errors.matricule = "Required matricule";
}
if (validator.isEmpty(data.password)){
    errors.password = "Required password";
}




return{
    errors,
    isValid: isEmpty(errors)
}};