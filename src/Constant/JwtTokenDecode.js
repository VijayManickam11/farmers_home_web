import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const JwtTokenDecode = () => {
  try{
    const token = Cookies.get("token");

    if (token == "undefined" || !token) {

      return {sessionExpired : true,user:"none"};
    }
    let decodedToken = jwtDecode(token);
    let currentDate = new Date();
    // JWT exp is in seconds
    let expired = false;
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      expired = true;
    }
    return {sessionExpired : expired, user:decodedToken.user.user_type};
  } catch(e) {
    console.log("Error in JWT: ", e.message)
  }
};

export default JwtTokenDecode;
