
const BaseUrl = "https://localhost:3100/";
const axios = require("axios");

// For Post Api Calls And Put
const HttpCall = async (method, type, body) => {
    return new Promise(async function (resolve, reject) {
        const url = BaseUrl + method;
        const token = localStorage.getItem('token');
        axios({
        method: type,
        url: url,
        data: body,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": token,
        },
        // auth: { username: '2bdb4838-fc3b-4a84-aa5c-2f38bc97e7dd', password: '' }
        })
        .then((response) => {
            if (response && response.status === 200) {
                return resolve(response);
            }
            return resolve(response);
        })
        .catch((err) => {
            return reject(err);
        });
    });
};

// For Get Api Calls
const HttpGet = async (method, type) => {
    return new Promise(async function (resolve, reject) {
        const url = BaseUrl + method;
        const token = localStorage.getItem('token');
        axios({
        method: type,
        url: url,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Authorization": token,
        },
        // auth: { username: '2bdb4838-fc3b-4a84-aa5c-2f38bc97e7dd', password: '' }
        })
        .then((response) => {
            if (response && response.status === 200) {
                return resolve(response);
            }
            return resolve(response);
        })
        .catch((err) => {
            return reject(err);
        });
    });
};

export default {
    HttpCall,
    HttpGet
}