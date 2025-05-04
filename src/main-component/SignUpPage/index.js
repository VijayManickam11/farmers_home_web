import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../images/Login/child.jpg";
import logo from "../../images/Logo/FarmersHomeLogo.svg"



      

// import './style.scss';
import { Box } from '@mui/material';   

const SignUpPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: '',
        full_name: '',
        mobileNumber:"",
        address:"",
        password: '',
        confirm_password: '',
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));


    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                full_name: '',
                mobileNumber:"",
                address:"",
                password: '',
                confirm_password: '',
            });
            validator.hideMessages();
            toast.success('Registration Complete successfully!');
            push('/login');
        } else {
            validator.showMessages();
            toast.error('Empty field is not allowed!');
        }
    };
    return (
        <Grid container>

           <Grid xs={6}>
           <Box component="img" sx={{height:"100vh"}}  src={loginImage} alt='loginImage'/>


            </Grid>

            <Grid xs={6} >
                <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
                           
                        <Box component="img" src={logo} sx={{height:"15vh"}} mt={2} alt='loginImage'/>
                
                        </Box>
               <Box sx={{padding:3,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                <h2>Signup</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Full Name"
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="Name"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('full name', value.full_name, 'required|alpha')}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="E-mail"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="E-mail"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('email', value.email, 'required|email')}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Mobile Number"
                                value={value.mobileNumber}
                                variant="outlined"
                                name="mobileNumber"
                                label="Mobile Number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('mobileNumber', value.mobileNumber, 'required|email')}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Address"
                                value={value.address}
                                variant="outlined"
                                name="address"
                                label="Address"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('address', value.address, 'required|email')}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Confirm Password"
                                value={value.password}
                                variant="outlined"
                                name="confirm_password"
                                label="Confirm Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('confirm password', value.confirm_password, `in:${value.password}`)}
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Grid className="formFooter" sx={{display:"flex",justifyContent:"center"}}>
                                <Button  className="cBtn cBtnLarge cBtnTheme" type="submit" sx={{width:"53%"}}>Sign Up</Button>
                            </Grid>
                            <Grid className="loginWithSocial" sx={{textAlign:"center"}} mt={3} mb={2}>
                                <Button className="facebook" sx={{backgroundColor:"#3b5998"}}><i className="fa fa-facebook" style={{color:"white"}}></i></Button>
                                <Button className="twitter" sx={{backgroundColor:"#55acee",ml:2}}><i className="fa fa-twitter" style={{color:"white"}}></i></Button>
                                <Button className="linkedin" sx={{backgroundColor:"#0077B5",ml:2}}><i className="fa fa-linkedin" style={{color:"white"}}></i></Button>
                            </Grid>
                            <p className="noteHelp" style={{textAlign:"center"}}>Already have an account? <Link to="/">Return to Sign In</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
                </Box>
            </Grid>
        </Grid>
    )
};

export default SignUpPage;