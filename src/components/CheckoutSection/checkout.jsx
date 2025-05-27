import React from "react";
import PaymentController from "../../Controller/paymentController";
import ToastService from "../../util/validationAlerts/toastService";
import { useLocation } from "react-router-dom";   

const CheckoutButton = () =>{
    const location = useLocation();
    const { cartItem, amount } = location.state || {};

    
//    console.log(process.env.REACT_APP_RAZORPAY_KEY_ID,"VITE_RAZORPAY_KEY_ID"); 

    const loadRazorpay = async() =>{
        try{

            const res = await PaymentController.postPaymentOrder({
                amount: amount.totalBillAmount,
                currency: amount.currency,
                receipt:`receipt_${Date.now()}`,
            });
            
            const parsRes = JSON.parse(res)
            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: parsRes.data.data.amount,
                currency: parsRes.data.data.currency,
                name: "The Farmer's Home",
                description: "Test Transaction",
                order_id: parsRes.data.dataid, // <- REQUIRED!
                handler: async (res) => {                    
                    const verifyRes = await PaymentController.postPaymentVerified(res);
                    ToastService.successmsg(verifyRes.data.message);
                },
                theme: { color: "#3399cc" }
            };

            const razor = new window.Razorpay(options);
            razor.open();

        }catch(error){
            console.log(error);
            
        }
    }

    return <button onClick={loadRazorpay}>Pay ₹{amount.totalBillAmount}</button>;
}

export default CheckoutButton;