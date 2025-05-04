import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import '../assets/css/custom-class.css'

const ToastService = {

    successmsg: function (messageval) {
        toast.success(messageval, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: 'toastMsg'
        });
    },

    warningmsg: function (messageval) {
        toast.warn(messageval, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: 'toastMsg'
        });
    },
    warningmsg1: function (messageval) {
        toast.warn(messageval, {
            position: "top-center",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: 'toastMsg'
        });
    },

    errormsg: function (messageval) {
        toast.error(messageval, {
            position: "top-center",
            autoClose: 2500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: 'toastMsg'
        });
    },

    sessionoutmsg: function (messageval) {
        toast.error(messageval, {
            position: "top-center",
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            className: 'toastMsg'
        });
    }
}
export default ToastService;



