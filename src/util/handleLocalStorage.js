import AES_ENCRYPT_DECRYPT from '../util/encryptDecrypt';

const handleLocalStorage = {
  setItemAsEncrypted: (key, value) => {
    try {
      localStorage.setItem(key, AES_ENCRYPT_DECRYPT.encrypt(JSON.stringify(value)));
    } catch (e) {
      console.log('Encrpytion error');
    }
  },
  addValueInEncryptedObject: (key, value) => {
    try {
      let encryptData = localStorage.getItem(key);
      if(encryptData == "null" || encryptData == null || encryptData == undefined) {
        handleLocalStorage.setItemAsEncrypted(key, value)
      } else {
        encryptData = JSON.parse(AES_ENCRYPT_DECRYPT.decrypt(encryptData));
        encryptData = { ...encryptData, ...value };
        localStorage.setItem(key, AES_ENCRYPT_DECRYPT.encrypt(JSON.stringify(encryptData)));
      }
    } catch (e) {
      console.log('Encrpytion error');
    }
  },
  getItemInEncryptedObject: (key, objectKey) => {
    try {
      let encryptData = localStorage.getItem(key);
      encryptData = JSON.parse(AES_ENCRYPT_DECRYPT.decrypt(encryptData));
      return encryptData[objectKey] || "";
    } catch (e) {
      console.log('Decryption error');
      return "";
    }
  },
  getItemWithDecryptedObject: (key, value) => {
    try {
      let encryptData = localStorage.getItem(key);
      encryptData = JSON.parse(AES_ENCRYPT_DECRYPT.decrypt(encryptData));
      return encryptData || "";
    } catch (e) {
      console.log('Decryption error');
      return "";
    }
  },
  deleteValueInEncryptedObject: (key, objectKey) => {
    try {
      let encryptData = localStorage.getItem(key);
      encryptData = JSON.parse(AES_ENCRYPT_DECRYPT.decrypt(encryptData));
      delete encryptData[objectKey];
      localStorage.setItem(key, AES_ENCRYPT_DECRYPT.encrypt(JSON.stringify(encryptData)));
    } catch (e) {
      console.log('Encrpytion error');
    }
  }
};

export default handleLocalStorage;
