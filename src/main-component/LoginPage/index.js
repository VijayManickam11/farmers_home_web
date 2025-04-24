import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../images/Login/child.jpg";

import './style.scss';
import { Box } from '@mui/material';



const LoginPage = (props) => {

    const push = useNavigate()

    const [value, setValue] = useState({
        email: 'user@gmail.com',
        password: '123456',
        remember: false,
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const rememberHandler = () => {
        setValue({ ...value, remember: !value.remember });
    };

    const [validator] = React.useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));



    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: '',
                password: '',
                remember: false
            });
            validator.hideMessages();

            const userRegex = /^user+.*/gm;
            const email = value.email;

            if (email.match(userRegex)) {
                toast.success('Successfully Login on istiqbal !');
                push('/dashboard');
            }
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
        <Grid xs={6}>

       
            <Box className="loginForm" sx={{display:"flex",flexDirection:"column",padding:17}}>
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
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
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="Password"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                type="password"
                                label="Password"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message('password', value.password, 'required')}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formAction" sx={{display:"flex",justifyContent:"space-between"}}>
                                <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                <FormControlLabel
                                    control={<Checkbox checked={value.remember} onChange={rememberHandler} />}
                                    label="Remember Me"
                                />
                                </Box>
                                <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                                <Link to="/forgot" style={{float:"right"}}>Forgot Password?</Link>
                                </Box>
                            </Grid>
                            <Grid className="formFooter" mt={2}>
                                <Button fullWidth className="cBtnTheme" type="submit">Login</Button>
                            </Grid>
                            <Grid className="loginWithSocial" sx={{textAlign:"center"}} mt={3} mb={2}>
                                <Button className="facebook" sx={{backgroundColor:"#3b5998"}}><i className="fa fa-facebook" style={{color:"white"}}></i></Button>
                                <Button className="twitter" sx={{backgroundColor:"#55acee",ml:2}}><i className="fa fa-twitter" style={{color:"white"}}></i></Button>
                                <Button className="linkedin" sx={{backgroundColor:"#0077B5",ml:2}}><i className="fa fa-linkedin" style={{color:"white"}}></i></Button>
                            </Grid>
                            <p className="noteHelp" style={{textAlign:"center"}}>Don't have an account? <Link to="/register">Create free account</Link>
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

export default LoginPage;