import { apiEndPoint } from "../Constant/ApiConstant.js";
import { ApiService } from "../Service/apiService.js";
import { apiConfig } from "../config/Config.js";

let AddProductController = {
  

  async postAddProduct(data) {
    return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.POST_PRODUCT, "", data);
  },

  async getProductListData(data) {
    return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.GET_PRODUCT_LIST, "", data || "");
  },

  async getViewAndEditProduct(id, data) {
    return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.GET_THE_SINGLE_PRODUCT.replace(":product_uid",id), "", data || "");
  },

  async editProductData(id,data) {
    return await ApiService.callPUT(apiConfig.API_VERSION_1, apiEndPoint.PUT_PRODUCT_DATA.replace(":product_uid",id), "", data || "");
  },

  async deleteProductList(id,data) { 
    return await ApiService.callDELETE(apiConfig.API_VERSION_1, apiEndPoint.DELETE_PRODUCT_DATA.replace(":product_uid",id), "", data || "");
  },

//   async getAdminNameData() {
//     return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.ADMIN_NAME, "", "");
//   },

//   async postUserProfile(id, data) {
//     return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.UPLOAD_SIGNATURE.replace(":user_uid", id), "", data || "");
//   },

//   async getVerifyNameAndMobilea(data) {
//     return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.VERIFY_NAME_MOBILE, "", data || "");
//   },

 
 
};
export default AddProductController;