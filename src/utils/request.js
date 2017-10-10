import axios from 'axios';

const Request = axios.create({
    baseURL: 'https://gateway.marvel.com/',
    params: {
        apikey: '0d2e045bdccd5826dcfcaf37d05f46be',
        ts: new Date().getTime()
    }
});

export default Request;