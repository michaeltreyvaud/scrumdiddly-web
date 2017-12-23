const handleFetchErrors = (res) => {
  if (!res.ok) {
    const error = new Error(res.statusText);
    error.code = res.status;
    throw error;
  }
  return res;
};

export default handleFetchErrors;
