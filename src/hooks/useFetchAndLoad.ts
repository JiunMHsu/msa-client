import { useEffect, useState } from 'react';

import { AxiosCall } from '../models';
import { AxiosResponse } from 'axios';

export const useFetchAndLoad = <T>() => {
  const [loading, setLoading] = useState(false);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<T>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    let response = {} as AxiosResponse<T>;
    setLoading(true);

    try {
      response = await axiosCall.call;
    } catch (err) {
      // No es necesario tirar el error
      // throw new Error(`${err}`);
    }

    setLoading(false);
    return response;
  };

  const abortCall = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      abortCall();
    };
  }, []);

  return { loading, callEndpoint };
};
