const validationRegExp = {
    fullNameReg:new RegExp(/^(?! )[a-zA-Z ]{0,}$/),
    mobileNumberReg: new RegExp(/^[\d]{10}$/),
    emailPatternReg: new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
    passwordReg: new RegExp(/^.{5,12}$/),
    userNameReg: new RegExp(/^[a-zA-Z\d]{8,12}$/),
    // passwordReg: new RegExp(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,12}$/)
 }
  
 export default validationRegExp;