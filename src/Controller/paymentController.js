import { apiEndPoint } from "../Constant/ApiConstant.js";
import { ApiService } from "../Service/apiService.js";
import { apiConfig } from "../config/Config.js";

let PaymentController = {
  

  async postPaymentOrder(data) {
    return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.POST_PAYMENT_ORDER, "", data);
  },

  async postPaymentVerified(data) {
    return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.POST_PAYMENT_VERIFY, "", data);
  },
 
};
export default PaymentController;