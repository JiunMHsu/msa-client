import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

/**
 * Resuelve la la promesa
 *
 */
export const useAsync = <T>(
  asyncFunction: () => Promise<AxiosResponse<T>>,
  successFunction: (t: T) => void,
  returnFunction?: () => void,
) => {
  useEffect(() => {
    let isActive = true;
    asyncFunction().then((response: AxiosResponse<T>) => {
      if (isActive) {
        successFunction(response.data);
      }
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, []);
};
