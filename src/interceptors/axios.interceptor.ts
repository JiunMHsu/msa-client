import axios from 'axios';
import { getValidationError } from '../utilities';

export const axiosInterceptor = () => {
  axios.interceptors.request.use(request => {
    console.log('Starting Request', request);
    return request;
  });

  axios.interceptors.response.use(
    response => {
      console.log('Successful Response', response);
      return response;
    },
    httpError => {
      const errMessage = getValidationError(httpError.code);
      console.log(errMessage);
      return Promise.reject(httpError);
    },
  );
};
