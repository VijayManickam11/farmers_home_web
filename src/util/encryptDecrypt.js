import CryptoJS from 'crypto-js';
import { CRYPTO_SECURITY_KEY } from '../Constant/securityKey';

const AES_ENCRYPT_DECRYPT = {
  encrypt: (EncryptData) => {
    try {
      const data = CryptoJS.AES.encrypt(JSON.stringify(EncryptData), CRYPTO_SECURITY_KEY).toString();
      return data;
    } catch (e) {
      return '';
    }
  },

  decrypt: (decryptData) => {
    try {
      const bytes = CryptoJS.AES.decrypt(decryptData, CRYPTO_SECURITY_KEY);
      const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return data;
    } catch (e) {
      return '';
    }
  },
  URLencrypt: (EncryptData) => {
    try {
      const data = CryptoJS.AES.encrypt(EncryptData, CRYPTO_SECURITY_KEY).toString();
      return encodeURIComponent(data);
    } catch (e) {
      return '';
    }
  },
  URLdecrypt: (decryptData) => {
    try {
      const decodeData = decodeURIComponent(decryptData);
      const bytes = CryptoJS.AES.decrypt(decodeData, CRYPTO_SECURITY_KEY);
      const data = bytes.toString(CryptoJS.enc.Utf8);
      return data;
    } catch (e) {
      // return '';
      console.log("URLdecrypt error:",e);
    }
  }
};


export default AES_ENCRYPT_DECRYPT;
