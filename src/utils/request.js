import axios from 'axios'
import {
  logger
} from '../components'


const spreadResponse = (response, key) => {
  if (response[key]) {
    // eslint-disable-next-line no-param-reassign
    response = {
      ...response,
      ...response[key],
    }

    delete response[key]
  }

  return response
}

const prepareResponseData = (data) => {
  try {
    // eslint-disable-next-line no-param-reassign
    data = JSON.parse(data)
  } catch (e) {
    logger('error', 'Request error', e)
  }

  // eslint-disable-next-line no-param-reassign
  data = ['data'].reduce(spreadResponse, data)

  return data
}

export const Request = axios.create({
  baseURL: 'https://gateway.marvel.com/',
  params: {
    apikey: '0d2e045bdccd5826dcfcaf37d05f46be',
  },
  transformResponse: prepareResponseData,
})
