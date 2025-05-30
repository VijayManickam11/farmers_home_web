import { apiEndPoint } from "../Constant/ApiConstant.js";
import { ApiService } from "../Service/apiService.js";
import { apiConfig } from "../config/Config.js";

let WhishListController = {
  

  async postAddWhishList(data) {
    return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.POST_WHISH_LIST, "", data);
  },
  
  async getViewWhishList(id, data) {
    return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.GET_WHISH_LIST.replace(":user_uid",id), "", data || "");
  },

   async getSelectedWhishList(id, data) {
    return await ApiService.callGET(apiConfig.API_VERSION_1, apiEndPoint.GET_SELECTED_WHISH_LIST.replace(":user_uid",id), "", data || "");
  },
  
  async deleteWhishListList(query,data) { 
    return await ApiService.callDELETE(apiConfig.API_VERSION_1, apiEndPoint.DELETE_WHISH_LIST_DATA,query, data || "");
  },
 
};
export default WhishListController;