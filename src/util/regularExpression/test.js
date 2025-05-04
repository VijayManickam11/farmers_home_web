const testRegex =  {

    fullName: (value) => {
        try {
            return new RegExp(/^(?! )[a-zA-Z ]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    username: (value) => {
        try {
            return new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+){8,12}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    mobileNumber: (value) => {
        try {
            return new RegExp(/^(?!([0-9])\1*$)\d{9}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    email: (value) => {
        try {
            return new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    emailId: (value) => {
        try {
            return new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    cpFullName: (value) => {
        try {
            return new RegExp(/^(?! )[a-zA-Z ]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    cpMobileNumber: (value) => {
        try {
            return new RegExp(/^[\d]{9}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    cpEmail: (value) => {
        try {
            return new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    password: (value) => {
        try {
            return new RegExp(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,12}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }, 
    regionName: (value) => {
        try {
            return new RegExp(/^(?! )/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }

    },
    employeeNumber: (value) => {
        try {
            return new RegExp(/^(?! )/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }

    },
    regionDeatils: (value) => {
        try {
            return new RegExp(/^(?! )/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }

    },    
    date: (value) => {
        try {
            return new RegExp(/^\d{4}-\d{2}-\d{2}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    
 }
  
 export default testRegex;