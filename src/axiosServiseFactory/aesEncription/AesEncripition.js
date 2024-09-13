
import axios from "axios";

// import {
//     errorHandlerMiddleWare,
//     requestMiddleWare,
//     responseMiddleWare,
// } from "../httpInterSeptur/HttpInterSeptur";
import CryptoJS from "crypto-js";
import { requestMiddleWare, responseMiddleWare } from "../../httpInterSeptur/HttpInterSeptur";
import { baseUrl } from "../../baseUrl";




// =====
const key = CryptoJS.enc.Hex.parse("b3885c485dc58d47687c99ff6a4de54846911fe87cd5bc76c2b02c33a5a67735");
const iv = CryptoJS.enc.Hex.parse("92df48d25386f2ec3a28eef0b908635c");

/**
 * Encrypts a given text using AES-256-CBC.
 * @param {string} text - The text to encrypt.
 * @returns {string} - The encrypted text in Base64 format.
 */
function encrypt(text) {
    const cipher = CryptoJS.AES.encrypt(text, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    });
    return cipher.toString();  // This will be in Base64 format by default
}

// Example usage:
const encryptedText = encrypt("Hello, World!");
console.log("Encrypted Text: ", encryptedText);

// =====







const axiosInstancee = axios.create({
    baseURL: baseUrl,
    timeout: 10000, // Set timeout to 10 seconds (adjust as needed)
});

// Add request interceptor
axiosInstancee.interceptors.request.use(
    (config) => {
        console.log(config.data);


        const checkSum = encrypt(
            JSON.stringify(config.data)
        );
        config.data = { encode: checkSum };

        const modifiedConfig = requestMiddleWare(config);

        return modifiedConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add response interceptor
axiosInstancee.interceptors.response.use(
    (response) => {
        // Apply response middleware logic
        const modifiedResponse = responseMiddleWare(response);
        return modifiedResponse;
    },
    (error) => {
        // Handle response errors
        return Promise.reject(error);
    }
);

export default axiosInstancee;
