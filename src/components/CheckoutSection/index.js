import React, { Fragment, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import FontAwesome from "../../components/UiStyle/FontAwesome";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Link, useLocation } from 'react-router-dom'
import { totalPrice } from "../../utils";

// images
import visa from '../../images/checkout/img-1.png';
import mastercard from '../../images/checkout/img-2.png';
import skrill from '../../images/checkout/img-3.png';
import paypal from '../../images/checkout/img-1.png';

  
import CheckWrap from '../CheckWrap'

import './style.scss';
import { useSelector } from 'react-redux';

const cardType = [
    {
        title: 'visa',
        img: visa
    },
    {
        title: 'mastercard',
        img: mastercard
    },
    {
        title: 'skrill',
        img: skrill
    },
    {
        title: 'paypal',
        img: paypal
    },
];


const CheckoutSection = ({ cartList }) => {
    const location = useLocation();
    const { cartItem, amount } = location.state || {};
    // states
    const [tabs, setExpanded] = React.useState({
        cupon: false,
        billing_adress: false,
        payment: true
    });
    const [forms, setForms] = React.useState({
        cupon_key: '',
        fname: '',
        lname: '',
        country: '',
        dristrict: '',
        address: '',
        post_code: '',
        email: '',
        phone: '',
        note: '',

        payment_method: 'card',
        card_type: '',

        fname2: '',
        lname2: '',
        country2: '',
        dristrict2: '',
        address2: '',
        post_code2: '',
        email2: '',
        phone2: '',

        card_holder: '',
        card_number: '',
        cvv: '',
        expire_date: '',
    });

    const [dif_ship, setDif_ship] = React.useState(false);

    const { isLoggedIn, user } = useSelector((state) => state.auth)

    console.log(user, "shdfjhsgdfjhdgfj");
   
    

    // tabs handler
    function faqHandler(name) {
        setExpanded({
            cupon: false,
            billing_adress: false,
            payment: true, [name]: !tabs[name]
        });
        setForms({
            ...forms,
            fname:user.full_name,
            email:user.email,
            address:user.address,
            phone:user.mobileNumber,
        })
    }

    // forms handler
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value })
    };

    // const loadRazorpay = async() =>{
    //     try{

    //         const res = await PaymentController.postPaymentOrder({
    //             amount: amount.totalBillAmount,
    //             currency: amount.currency,
    //             receipt:`receipt_${Date.now()}`,
    //         });
            
    //         const parsRes = JSON.parse(res)
    //         const options = {
    //             key: process.env.REACT_APP_RAZORPAY_KEY_ID,
    //             amount: parsRes.data.data.amount,
    //             currency: parsRes.data.data.currency,
    //             name: "The Farmer's Home",
    //             description: "Test Transaction",
    //             order_id: parsRes.data.dataid, // <- REQUIRED!
    //             handler: async (res) => {                    
    //                 const verifyRes = await PaymentController.postPaymentVerified(res);
    //                 ToastService.successmsg(verifyRes.data.message);
    //             },
    //             theme: { color: "#3399cc" }
    //         };

    //         const razor = new window.Razorpay(options);
    //         razor.open();

    //     }catch(error){
    //         console.log(error);
            
    //     }
    // }


    return (
        <Fragment>
            <Grid className="checkoutWrapper section-padding">
                <Grid className="container" container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <div className="check-form-area">
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler('cupon')}>
                                    Have a coupon ? Click here to enter your code.
                                    <FontAwesome name={tabs.cupon ? 'minus' : 'plus'} />
                                </Button>
                                <Collapse in={tabs.cupon} timeout="auto"
                                    unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>If you have coupon code,please apply it</p>
                                        <form className="cuponForm">
                                            <TextField
                                                fullWidth
                                                type="text"
                                                className="formInput radiusNone"
                                                value={forms.cupon_key}
                                                name="cupon_key"
                                                onChange={(e) => changeHandler(e)}
                                            />
                                            <Button className="cBtn cBtnBlack">Apply</Button>
                                        </form>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler('billing_adress')}>
                                    Billing Address
                                    <FontAwesome name={tabs.billing_adress ? 'minus' : 'plus'} />
                                </Button>
                                <Collapse in={tabs.billing_adress} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <form className="cuponForm">
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="First Name"
                                                        name="fname"
                                                        value={forms.fname}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Last Name"
                                                        name="lname"
                                                        value={forms.lname}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                                                    <FormControl className="formSelect" fullWidth variant="filled">
                                                        <Select
                                                            labelId="demo-simple-select-filled-label"
                                                            id="demo-simple-select-filled"
                                                            value={forms.country}
                                                            name="country"
                                                            onChange={(e) => changeHandler(e)}
                                                        >
                                                            <MenuItem value="">
                                                                <em>None</em>
                                                            </MenuItem>
                                                            <MenuItem value={10}>Ten</MenuItem>
                                                            <MenuItem value={20}>Twenty</MenuItem>
                                                            <MenuItem value={30}>Thirty</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Dristrict"
                                                        name="dristrict"
                                                        value={forms.dristrict}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        rows="3"
                                                        label="Address"
                                                        name="address"
                                                        value={forms.address}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Post Code"
                                                        name="post_code"
                                                        value={forms.post_code}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Email Adress"
                                                        name="email"
                                                        value={forms.email}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="email"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Phone No"
                                                        name="phone"
                                                        value={forms.phone}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <FormControlLabel
                                                        className="checkBox"
                                                        control={
                                                            <Checkbox
                                                                checked={dif_ship}
                                                                onChange={() => setDif_ship(!dif_ship)}
                                                                value={dif_ship}
                                                                color="primary"
                                                            />
                                                        }
                                                        label="Ship to a different address?"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Collapse in={dif_ship} timeout="auto" unmountOnExit>
                                                        <Grid container spacing={3}>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="First Name"
                                                                    name="fname2"
                                                                    value={forms.fname2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Last Name"
                                                                    name="lname2"
                                                                    value={forms.lname2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <InputLabel
                                                                    id="demo-simple-select-filled-label">Age</InputLabel>
                                                                <FormControl className="formSelect" fullWidth
                                                                    variant="filled">
                                                                    <Select
                                                                        labelId="demo-simple-select-filled-label"
                                                                        id="demo-simple-select-filled"
                                                                        value={forms.country2}
                                                                        name="country2"
                                                                        onChange={(e) => changeHandler(e)}
                                                                    >
                                                                        <MenuItem value="">
                                                                            <em>None</em>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Ten</MenuItem>
                                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Dristrict"
                                                                    name="dristrict2"
                                                                    value={forms.dristrict2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    multiline
                                                                    rows="3"
                                                                    label="Address"
                                                                    name="address2"
                                                                    value={forms.address2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Post Code"
                                                                    name="post_code2"
                                                                    value={forms.post_code2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item sm={6} xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Email Adress"
                                                                    name="email2"
                                                                    value={forms.email2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="email"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                            <Grid item xs={12}>
                                                                <TextField
                                                                    fullWidth
                                                                    label="Phone No"
                                                                    name="phone2"
                                                                    value={forms.phone2}
                                                                    onChange={(e) => changeHandler(e)}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                />
                                                            </Grid>
                                                        </Grid>
                                                    </Collapse>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        label="Order Notes"
                                                        placeholder="Note about your order"
                                                        name="note"
                                                        value={forms.note}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone note"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler('payment')}>
                                    Payment Method
                                    <FontAwesome name={tabs.payment ? 'minus' : 'plus'} />
                                </Button>
                                <Grid className="chCardBody">
                                    <Collapse in={tabs.payment} timeout="auto">
                                        <RadioGroup className="paymentMethod" aria-label="Payment Method"
                                            name="payment_method"
                                            value={forms.payment_method}
                                            onChange={(e) => changeHandler(e)}>
                                            <FormControlLabel value="card" control={<Radio color="primary" />}
                                                label="Payment By Card " />
                                            <FormControlLabel value="cash" control={<Radio color="primary" />}
                                                label="Cash On delivery" />

                                        </RadioGroup>
                                        <Collapse in={forms.payment_method === 'card'} timeout="auto">
                                            <Grid className="cardType">
                                                {cardType.map((item, i) => (
                                                    <Grid
                                                        key={i}
                                                        className={`cardItem ${forms.card_type === item.title ? 'active' : null}`}
                                                        onClick={() => setForms({ ...forms, card_type: item.title })}>
                                                        <img src={item.img} alt={item.title} />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                            <Grid>
                                                <CheckWrap amount={amount}/>
                                            </Grid>
                                        </Collapse>
                                        <Collapse in={forms.payment_method === 'cash'} timeout="auto">
                                            <Grid className="cardType">
                                                <Button 
                                                to='/order_received' 
                                                className="cBtn cBtnLarge cBtnTheme mt-20" 
                                                type="submit"
                                                >Proceed to Checkout</Button>
                                            </Grid>
                                        </Collapse>
                                    </Collapse>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Grid className="cartStatus">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <Grid className="cartTotals">
                                        <h2>Cart Total</h2>
                                        <Table>
                                            <TableBody>
                                                {cartList.map(item => (
                                                    <TableRow key={item.id}>
                                                        <TableCell>{item.title} ${item.price} x {item.quantity}</TableCell>
                                                        <TableCell
                                                            align="right">${item.quantity * item.price}</TableCell>
                                                    </TableRow>
                                                ))}
                                                <TableRow className="totalProduct">
                                                    <TableCell>Total product</TableCell>
                                                    <TableCell align="right">{amount?.productCount}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Sub Price</TableCell>
                                                    <TableCell align="right">₹{amount?.subTotal}</TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>Total Price</TableCell>
                                                    <TableCell
                                                        align="right">₹{amount?.totalBillAmount}</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
};


export default CheckoutSection;