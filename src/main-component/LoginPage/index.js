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
import logo from "../../images/Logo/FarmersHomeLogo.svg"

import './style.scss';
import { Box, Dialog, DialogContent, useMediaQuery, useTheme } from '@mui/material';
import RegisterController from '../../Controller/RegisterController';
import { useUser } from '../../components/Context/UserContext';
import { USER_EMAIL, USER_NAME } from '../../LocalStorage/LocalStorageNames';




const LoginPage = ({open, onClose }) => {

    const { setIsLoggedIn } = useUser();

    const theme = useTheme();

    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

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



    // const submitForm = (e) => {
    //     e.preventDefault();
    //     if (validator.allValid()) {
    //         setValue({
    //             email: '',
    //             password: '',
    //             remember: false
    //         });
    //         validator.hideMessages();

    //         const userRegex = /^user+.*/gm;
    //         const email = value.email;

    //         if (email.match(userRegex)) {
    //             toast.success('Successfully Login on istiqbal !');
    //             push('/dashboard');
    //         }
    //     } else {
    //         validator.showMessages();
    //         toast.error('Empty field is not allowed!');
    //     }
    // };

    const submitForm = async(e) =>{
        e.preventDefault();
        try{

            const formSubmitedData = {
                email: value.email,
                password: value.password
            }

            const response = await RegisterController.postUserLogin(formSubmitedData);

            const parsedData = JSON.parse(response);
            console.log(parsedData,"parsedDataLogin")
            if(parsedData.status == "SUCCESS"){
                const loginData = parsedData?.data?.user;
                const userName = loginData?.full_name;
                 const userEmail = loginData?.email;
                toast.success('Successfully Login...');
                setIsLoggedIn(true);
                localStorage.setItem(USER_NAME,userName);
                localStorage.setItem(USER_EMAIL,userEmail)
                onClose();
                setValue({});
            }

        }catch(error){
            console.log(error);
            
        }
    }

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" fullScreen={fullScreen}>
              
              <DialogContent>
        <Grid container>
            {/* <Grid xs={6}>
            <Box component="img" sx={{height:"100vh"}}  src={loginImage} alt='loginImage'/>
            </Grid> */}
        <Grid xs={12}>
            <Box sx={{display:"flex",justifyContent:"center",flexDirection:"column"}}>
           
        <Box component="img" src={logo} sx={{height:"15vh"}} mt={0} alt='loginImage'/>

        </Box>
       
            <Box className="loginForm" sx={{display:"flex",flexDirection:"column",padding:1}}>
            
                <h2>Sign In</h2>
                <p>Sign in to your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                size="small"
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
                                size="small"
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
                        
                    </Grid>
                    <Grid item xs={12} mt={1}>
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
                            <Grid className="formFooter" mt={1} sx={{display:"flex",justifyContent:"center"}}>
                                <Button fullWidth className="cBtnTheme" type="submit" sx={{width:"53%"}}>Login</Button>
                            </Grid>
                            <Grid className="loginWithSocial" sx={{textAlign:"center"}} mt={2} mb={1}>
                                <Button className="facebook" sx={{backgroundColor:"#3b5998"}}><i className="fa fa-facebook" style={{color:"white"}}></i></Button>
                                <Button className="twitter" sx={{backgroundColor:"#55acee",ml:2}}><i className="fa fa-twitter" style={{color:"white"}}></i></Button>
                                <Button className="linkedin" sx={{backgroundColor:"#0077B5",ml:2}}><i className="fa fa-linkedin" style={{color:"white"}}></i></Button>
                            </Grid>
                            <p className="noteHelp" style={{textAlign:"center"}}>Don't have an account? <Link to="" onClick={() => {
                                onClose();
                            }}>Create free account</Link>
                            </p>
                        </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Box>
           
            
        </Grid>
        </Grid>
        </DialogContent>
        </Dialog>
    )
};

export default LoginPage;