import axios from 'axios'
import { logger } from '@@Components/UI/utils/utils'

const spreadResponse = (response, key) => {
    if (response.hasOwnProperty(key)) {
        response = {
            ...response,
            ...response[key]
        };

        delete response[key]
    }

    return response;
};

const prepareResponseData = (data) => {
    try {
        data = JSON.parse(data)
    } catch (e) {
      logger('Request error', e)
    }

    data = ['data'].reduce(spreadResponse, data);

    return data
};

const Request = axios.create({
    baseURL: 'https://gateway.marvel.com/',
    params: {
        apikey: '0d2e045bdccd5826dcfcaf37d05f46be'
    },
    transformResponse: prepareResponseData
});

export default Request;
