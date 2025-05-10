import { apiEndPoint } from "../Constant/ApiConstant.js";
import { ApiService } from "../Service/apiService.js";
import { apiConfig } from "../config/Config.js";

let RegisterController = {
  

  async postUserRegister(data) {
    return await ApiService.callPOST(apiConfig.API_VERSION_1, apiEndPoint.USER_REGISTER, "", data);
  },
 
};
export default RegisterController;