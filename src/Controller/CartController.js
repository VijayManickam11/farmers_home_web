import { apiEndPoint } from "../Constant/ApiConstant.js";
import { ApiService } from "../Service/apiService.js";
import { apiConfig } from "../config/Config.js";

let CartController = {
  

  async postAddCart(data) {
    return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.POST_CART, "", data);
  },

  async getCartListData(data) {
    return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.GET_CART_LIST, "", data || "");
  },

  async getViewAndEditCart(id, data) {
    return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.GET_THE_SINGLE_CART.replace(":cart_uid",id), "", data || "");
  },

  async editCartData(id,data) {
    return await ApiService.callPUT(apiConfig.API_VERSION_1, apiEndPoint.PUT_CART_DATA.replace(":cart_uid",id), "", data || "");
  },

  async deleteCartList(id,data) { 
    return await ApiService.callDELETE(apiConfig.API_VERSION_1, apiEndPoint.DELETE_CART_DATA.replace(":cart_uid",id), "", data || "");
  },
 
};
export default CartController;