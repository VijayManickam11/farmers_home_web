

const instance = "DEV";
let BASE_URL;

if(instance == "LOCAL") {
  BASE_URL = "http://localhost:8083"; 
} else if(instance == "DEV") {
  BASE_URL = "https://";    
} else if(instance == "UAT") {
  BASE_URL = "https://";
}

let WEB_URL;

if(instance == "LOCAL") {
  WEB_URL = "http://localhost:8083"; 
} else if(instance == "DEV") {
  WEB_URL = "https://";    
} else if(instance == "UAT") {
  WEB_URL = "https://";
}

export const apiConfig = {
  API_VERSION_1: "",
  API_ROOT_URL: "http://localhost:8081",
  STATIC_SESSION: "202320232023202320232023",
  WEB_URL: WEB_URL
};        