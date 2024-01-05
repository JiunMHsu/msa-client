export const getValidationError = (errorCode: string) => {
  const errorMessageByCode = {
    ERR_NETWORK: 'error de red',
  };
  return 'unkown error';
  // return errorMessageByCode[errorCode] ?? 'unkown error';
};
