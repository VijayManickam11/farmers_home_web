const validateRegex =  {

    text: (value) => {
        try {
            return new RegExp(/^(?! )[a-zA-Z ]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },

    number: (value) => {
        try {
            return new RegExp(/^[\d]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },

    alphaNumeric: (value) => {
        try {
            return new RegExp(/^[\d]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },

    alphaNumericHifen: (value) => {
        try {
            return new RegExp(/^[a-zA-Z-_\d /,&@.()]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },

    noLeadingSpace: (value) => {
        try {
            return new RegExp(/^(?! ).{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },

    fullName: (value) => {
        try {
            return new RegExp(/^(?! )[a-zA-Z ]{0,}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    noEmptySpaceStart: (value) => {
        try {
            return new RegExp(/^(?! ).{0,}$/).test(value);
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
    mobileNumber: (value) => {
        try {
            return new RegExp(/^[\d]{0,9}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
    cpMobileNumber: (value) => {
        try {
            return new RegExp(/^[\d]{0,9}$/).test(value);
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
            return new RegExp(/^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{0,12}$/).test(value);
        } catch (error) {
            console.log(error.message);
            return false;
        }
    },
 }
  
 export default validateRegex;