import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from "axios";

const axiosParams = {
  //   baseURL: "https://shazam-core.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};
const axiosInstance = axios.create(axiosParams);

const withAsync = async (
  option: AxiosRequestConfig,
  controller: AbortController = new AbortController()
) => {
  try {
    const { data } = await axiosInstance.request({
      ...option,
      signal: controller.signal,
    });
    return Promise.resolve(data);
  } catch (error) {
    const errors = error as Error | AxiosError;
    if (axios.isCancel(error)) {
      return Promise.reject("Request Aborted");
    }
    if (!axios.isAxiosError(errors)) {
      return Promise.reject("error in api call");
    }
    return Promise.reject(errors.response?.data.message);
  }
};

export default withAsync;
