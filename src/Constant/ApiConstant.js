export const apiHdrDefValue = {
    APPLICATION_JSON: "application/json",
    REFERRED_BY: "WEB",
    FORM_URLENCODED: "application/x-www-form-urlencoded",
    // FORM_URLENCODED: "multipart/form-data",
};

export const apiHttpStatus = {
    SC_200: 200,
    SC_201: 201,
    SC_202: 202,
    SC_400: 400,
    SC_401: 401,
    SC_403: 403,
    SC_404: 404,
    SC_412: 412,
    SC_424: 424,
    SC_440: 440,
    SC_498: 498
};

export const apiDefaultValue = {
    OFFSET: 0,
    LIMIT: 100
};

export const apiAction = {
    YES: "YES",
    NO: "NO"
};

export const apiStatus = {
    REGISTERED: "REGISTERED"
};

export const apiEndPoint = {
    GET_PRODUCT_LIST: "/products",
    POST_PRODUCT:"/product",
    GET_THE_SINGLE_PRODUCT:"/product/:product_uid",
    PUT_PRODUCT_DATA:"/product/:product_uid",
    DELETE_PRODUCT_DATA:"/product/:product_uid",
    
    GET_CART_LIST: "/carts/:user_uid",
    POST_CART:"/cart",
    GET_THE_SINGLE_CART:"/cart/:cart_uid",
    PUT_CART_DATA:"/cart/:cart_uid",
    DELETE_CART_DATA:"/cart/:cart_uid",

    GET_WHISH_LIST: "/wishlist/:user_uid",
    GET_SELECTED_WHISH_LIST: "/selecetdwishlist/:user_uid",
    POST_WHISH_LIST:"/wishlist",   
    DELETE_WHISH_LIST_DATA:"/wishlist",

    USER_REGISTER: "/registerNew",
    USER_LOGIN: "/userLogin",

    POST_PAYMENT_ORDER: "/create-order",
    POST_PAYMENT_VERIFY: "/verify"
    
};

export const apiType = {
    USER: "USER",
    USER_SESSION: "USER_SESSION",
    FEEDBACK: "FEEDBACK",
    REPORT_PROBLEM:"REPORT_PROBLEM"
};

export const apiCategory = {
    USER_PASSWORD: "USER_PASSWORD"
};
