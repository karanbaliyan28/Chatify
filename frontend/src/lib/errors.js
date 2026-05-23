export const getErrorMessage = (error, fallback = "Something went wrong") => {
  if (error?.response?.data?.message) return error.response.data.message;
  if (error?.message === "Network Error") {
    return "Network error. Please check the server connection.";
  }

  return error?.message || fallback;
};
