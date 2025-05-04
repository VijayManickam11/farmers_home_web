import { apiConfig } from "../config/Config.js";
import { apiHdrDefValue, apiHttpStatus } from "../Constant/ApiConstant.js";
import axios from "axios";
import Cookies from "js-cookie";

export let ApiService = {
  jsonToQueryString(json) {
    return (
      "?" +
      Object.keys(json)
        .map(function (key) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        })
        .join("&")
    );
  },

  async callGET(apiVersion, apiResource, sessionType, reqParams) {
    var sessionId = "";
    var result = '{"status": "FAILED", "error" : "Request Process Failed", "data": []}';

    try {
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (apiResource === "undefined" || apiResource == "") {
        apiResource = "";
      }
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (reqParams === "undefined" || reqParams == "") {
        reqParams = {};
      }
      if (sessionType === "undefined" || sessionType == "" || sessionType == "0") {
        sessionId = apiConfig.STATIC_SESSION;
      }

      if (typeof reqParams !== "object") {
        reqParams = {};
      } else {
        reqParams = this.jsonToQueryString(reqParams);
      }
      var apiFullEndPoint = apiConfig.API_ROOT_URL + apiVersion + apiResource + reqParams;
      let resultAPI = await axios.get(apiFullEndPoint, {
        headers: {
          "content-type": apiHdrDefValue.FORM_URLENCODED,
          "authorization": Cookies.get("token"),
          "app_name": "Inspection-App",
          "mobile_number": "9876543210",

        },
      });

      if (resultAPI.status == apiHttpStatus.SC_200) {
        result = '{"status": "SUCCESS", "data": ' + JSON.stringify(resultAPI.data) + "}";
      } else {
        result = '{"status": "FAILED", "error" : "Invalid Credentials"}';
      }
    } catch (err) {
      if (err.response) {
        var eStatusCode = err.response.status;
        var ePayloadTemp = JSON.stringify(err.response.data);
        var ePayload = JSON.parse(ePayloadTemp);

        if (eStatusCode == apiHttpStatus.SC_498) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
          window.location.href = "/login?session_expired=true";
        } else if (eStatusCode == apiHttpStatus.SC_412) {
          // alert(ePayload.messages[0].message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
        } else if (eStatusCode == apiHttpStatus.SC_401) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_400) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_403) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_424) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        }
      } else if (err.request) {
        console.log("Dashboard Network Error:", err);
        result = '{"status": "FAILED", "error" : "Network Error"}';
      } else {
        console.log("Dashboard Client Error:", err);
        result = '{"status": "FAILED", "error" : "Request Error"}';
      }
      console.log("GET service: ", result);
    }
    return result;
  },
  async callPUT(apiVersion, apiResource, sessionType, reqPayload) {
    var sessionId = "";
    var result = '{"status": "FAILED", "error" : "Request Process Failed", "data": []}';

    try {
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (apiResource === "undefined" || apiResource == "") {
        apiResource = "";
      }
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (reqPayload === "undefined" || reqPayload == "") {
        reqPayload = {};
      }
      if (sessionType === "undefined" || sessionType == "" || sessionType == "0") {
        sessionId = apiConfig.STATIC_SESSION;
      }

      if (typeof reqPayload !== "object") {
        reqPayload = {};
      }


      var apiFullEndPoint = apiConfig.API_ROOT_URL + apiVersion + apiResource;
      let resultAPI = await axios.put(apiFullEndPoint, reqPayload, {
        headers: {
          "content-type": apiHdrDefValue.FORM_URLENCODED,
          "authorization": Cookies.get("token"),
          "app_name": "Inspection-App",
        },
      });

      if (resultAPI.status == apiHttpStatus.SC_200) {
        result = '{"status": "SUCCESS", "data": ' + JSON.stringify(resultAPI.data) + "}";
      } else {
        result = '{"status": "FAILED", "error" : "Invalid Credentials"}';
      }
    } catch (err) {
      if (err.response) {
        var eStatusCode = err.response.status;
        var ePayloadTemp = JSON.stringify(err.response.data);
        var ePayload = JSON.parse(ePayloadTemp);
        if (eStatusCode == apiHttpStatus.SC_498) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
          window.location.href = "/login?session_expired=true";
        } else if (eStatusCode == apiHttpStatus.SC_412) {
          // alert(ePayload.messages[0].message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
        } else if (eStatusCode == apiHttpStatus.SC_401) {
          if (ePayload.invalid_auth_token) {
            // const navigate = ServiceConstant.navigate();
            // if (navigate) window.location.href = navigate;
            // Cookies.remove("token");
            // localStorage.removeItem(SC_USER_ID);
          } else {
            result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
          }
        } else if (eStatusCode >= apiHttpStatus.SC_400) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_403) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_424) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        }
      } else if (err.request) {
        result = '{"status": "FAILED", "error" : "Network Error"}';
      } else {
        result = '{"status": "FAILED", "error" : "Request Error"}';
      }
      console.log("PUT service: ", result);
    }
    return result;
  },
  async callPATCH(apiVersion, apiResource, sessionType, reqPayload) {
    var sessionId = "";
    var result = '{"status": "FAILED", "error" : "Request Process Failed", "data": []}';

    try {
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (apiResource === "undefined" || apiResource == "") {
        apiResource = "";
      }
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (reqPayload === "undefined" || reqPayload == "") {
        reqPayload = {};
      }
      if (sessionType === "undefined" || sessionType == "" || sessionType == "0") {
        sessionId = apiConfig.STATIC_SESSION;
      }

      if (typeof reqPayload !== "object") {
        reqPayload = {};
      }
      var apiFullEndPoint = apiConfig.API_ROOT_URL + apiVersion + apiResource;
      let resultAPI = await axios.patch(apiFullEndPoint, {
        headers: {
          "content-type": apiHdrDefValue.FORM_URLENCODED,
          "authorization": Cookies.get("token"),
          "app_name": "Inspection-App",
        },
      });

      if (resultAPI.status == apiHttpStatus.SC_200) {
        result = '{"status": "SUCCESS", "data": ' + JSON.stringify(resultAPI.data) + "}";
      } else {
        result = '{"status": "FAILED", "error" : "Invalid Credentials"}';
      }
    } catch (err) {
      if (err.response) {
        var eStatusCode = err.response.status;
        var ePayloadTemp = JSON.stringify(err.response.data);
        var ePayload = JSON.parse(ePayloadTemp);
        if (eStatusCode == apiHttpStatus.SC_498) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
          window.location.href = "/login?session_expired=true";
        } else if (eStatusCode == apiHttpStatus.SC_412) {
          // alert(ePayload.messages[0].message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
        } else if (eStatusCode == apiHttpStatus.SC_401) {
          if (ePayload.invalid_auth_token) {
            // const navigate = ServiceConstant.navigate();
            // if (navigate) window.location.href = navigate;
            // Cookies.remove("token");
            // localStorage.removeItem(SC_USER_ID);
          } else {
            result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
          }
        } else if (eStatusCode >= apiHttpStatus.SC_400) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_403) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_424) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        }
      } else if (err.request) {
        result = '{"status": "FAILED", "error" : "Network Error"}';
      } else {
        result = '{"status": "FAILED", "error" : "Request Error"}';
      }
      console.log("PUT service: ", result);
    }
    return result;
  },

  async callPOST(apiVersion, apiResource, sessionType, reqPayload) {

    var sessionId = "";
    var result = '{"status": "FAILED", "error" : "Request Process Failed", "data": []}';

    try {
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (apiResource === "undefined" || apiResource == "") {
        apiResource = "";
      }
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (reqPayload === "undefined" || reqPayload == "") {
        reqPayload = {};
      }
      if (sessionType === "undefined" || sessionType == "" || sessionType == "0") {
        sessionId = apiConfig.STATIC_SESSION;
      }

      if (typeof reqPayload !== "object") {
        reqPayload = {};
      }



      var apiFullEndPoint = apiConfig.API_ROOT_URL + apiVersion + apiResource;
      let resultAPI = await axios.post(apiFullEndPoint, reqPayload, {
        headers: {
          "content-type": apiHdrDefValue.FORM_URLENCODED,
          "authorization": Cookies.get("token"),
          "app_name": "Inspection-App",
        },
      });

      if (resultAPI.status == apiHttpStatus.SC_200 || resultAPI.status == apiHttpStatus.SC_201) {
        result = '{"status": "SUCCESS", "data": ' + JSON.stringify(resultAPI.data) + "}";
      } else {
        result = '{"status": "FAILED", "error" : "Invalid Credentials"}';
      }
    } catch (err) {
      if (err.response) {
        var eStatusCode = err.response.status;
        var ePayloadTemp = JSON.stringify(err.response.data);
        var ePayload = JSON.parse(ePayloadTemp);

        if (eStatusCode == apiHttpStatus.SC_498) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
          window.location.href = "/login?session_expired=true";
        } else if (eStatusCode == apiHttpStatus.SC_412) {
          // alert(ePayload.messages[0].message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
        } else if (eStatusCode == apiHttpStatus.SC_401) {
          if (ePayload.invalid_auth_token) {
            // const navigate = ServiceConstant.navigate();
            // if (navigate) window.location.href = navigate;
            // Cookies.remove("token");
            // localStorage.removeItem(SC_USER_ID);
          } else {
            result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
          }
        } else if (eStatusCode >= apiHttpStatus.SC_400) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_403) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_424) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        }
      } else if (err.request) {

        result = '{"status": "FAILED", "error" : "Network Error"}';
      } else {
        result = '{"status": "FAILED", "error" : "Request Error"}';
      }
      console.log("POST service: ", result);
      console.log("errror", err.message)
    }
    return result;
  },

  async callPOSTToGetFile(apiVersion, apiResource, sessionType, reqPayload) {

    var sessionId = "";
    var result = '{"status": "FAILED", "error" : "Request Process Failed", "data": []}';

    try {
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (apiResource === "undefined" || apiResource == "") {
        apiResource = "";
      }
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (reqPayload === "undefined" || reqPayload == "") {
        reqPayload = {};
      }
      if (sessionType === "undefined" || sessionType == "" || sessionType == "0") {
        sessionId = apiConfig.STATIC_SESSION;
      }

      if (typeof reqPayload !== "object") {
        reqPayload = {};
      }



      var apiFullEndPoint = apiConfig.API_ROOT_URL + apiVersion + apiResource;
      let resultAPI = await axios.post(apiFullEndPoint, reqPayload, {
        headers: {
          "content-type": apiHdrDefValue.FORM_URLENCODED,
          "authorization": Cookies.get("token"),
          "app_name": "Inspection-App",
        },
        responseType: 'blob',
      });
      if (resultAPI.status == apiHttpStatus.SC_200 || resultAPI.status == apiHttpStatus.SC_201) {
        result = { status: "SUCCESS", data: resultAPI.data };
      } else {
        result = '{"status": "FAILED", "error" : "Invalid Credentials"}';
      }
    } catch (err) {
      if (err.response) {
        var eStatusCode = err.response.status;
        var ePayloadTemp = JSON.stringify(err.response.data);
        var ePayload = JSON.parse(ePayloadTemp);

        if (eStatusCode == apiHttpStatus.SC_498) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
          // window.location.href = "/login?session_expired=true";
        } else if (eStatusCode == apiHttpStatus.SC_412) {
          // alert(ePayload.messages[0].message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
        } else if (eStatusCode == apiHttpStatus.SC_401) {
          if (ePayload.invalid_auth_token) {
            // const navigate = ServiceConstant.navigate();
            // if (navigate) window.location.href = navigate;
            // Cookies.remove("token");
            // localStorage.removeItem(SC_USER_ID);
          } else {
            result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
          }
        } else if (eStatusCode >= apiHttpStatus.SC_400) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_403) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_424) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        }
      } else if (err.request) {

        result = '{"status": "FAILED", "error" : "Network Error"}';
      } else {
        result = '{"status": "FAILED", "error" : "Request Error"}';
      }
      console.log("POST service: ", result);
      console.log("errror", err.message)
    }
    return result;
  },

  async callDELETE(apiVersion, apiResource, sessionType, reqParams) {
    var sessionId = "";
    var result = '{"status": "FAILED", "error" : "Request Process Failed", "data": []}';

    try {
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (apiResource === "undefined" || apiResource == "") {
        apiResource = "";
      }
      if (apiVersion === "undefined" || apiVersion == "") {
        apiVersion = apiConfig.API_VERSION_1;
      }
      if (reqParams === "undefined" || reqParams == "") {
        reqParams = {};
      }
      if (sessionType === "undefined" || sessionType == "" || sessionType == "0") {
        sessionId = apiConfig.STATIC_SESSION;
      }

      if (typeof reqParams !== "object") {
        reqParams = {};
      }


      var queryParams = this.jsonToQueryString(reqParams);
      var apiFullEndPoint = apiConfig.API_ROOT_URL + apiVersion + apiResource + queryParams;
      let resultAPI = await axios.delete(apiFullEndPoint, {
        headers: {
          "content-type": apiHdrDefValue.FORM_URLENCODED,
          "authorization": Cookies.get("token"),
          "app_name": "Inspection-App",
        },
      });

      if (resultAPI.status == apiHttpStatus.SC_200) {
        result = '{"status": "SUCCESS", "data": ' + JSON.stringify(resultAPI.data) + "}";
      } else {
        result = '{"status": "FAILED", "error" : "Invalid Credentials"}';
      }
    } catch (err) {
      if (err.response) {
        var eStatusCode = err.response.status;
        var ePayloadTemp = JSON.stringify(err.response.data);
        var ePayload = JSON.parse(ePayloadTemp);

        if (eStatusCode == apiHttpStatus.SC_498) {
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
          window.location.href = "/login?session_expired=true";
        } else if (eStatusCode == apiHttpStatus.SC_412) {
          // alert(ePayload.messages[0].message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload.messages) + "}";
        } else if (eStatusCode == apiHttpStatus.SC_401) {
          if (ePayload.invalid_auth_token) {
            // const navigate = ServiceConstant.navigate();
            // if (navigate) window.location.href = navigate;
            // Cookies.remove("token");
            // localStorage.removeItem(SC_USER_ID);
          } else {
            result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
          }
        } else if (eStatusCode >= apiHttpStatus.SC_400) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_403) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        } else if (eStatusCode >= apiHttpStatus.SC_424) {
          // alert(ePayload.message);
          result = '{"status": "FAILED", "error" : ' + JSON.stringify(ePayload) + "}";
        }
      } else if (err.request) {
        console.log("Dashboard Network Error:", err);
        result = '{"status": "FAILED", "error" : "Network Error"}';
      } else {
        console.log("Dashboard Client Error:", err);
        result = '{"status": "FAILED", "error" : "Request Error"}';
      }
      console.log("DELETE service: ", result);
    }
    return result;
  },
};

export default ApiService;
