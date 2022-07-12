// eslint-disable
import axios from "axios";
import { toast } from "./toast.plugin";
import { loadings } from "./loadings.plugin";

const onRequest = (request) => {
  let url = request.url;
  loadings.show({ key: url });
  return request;
};

const onRequestError = (error) => {
  return Promise.reject(error);
};

const onResponse = (response) => {
  let url = response.config.url;
  loadings.hide({ key: url });

  if (response.data?.data?.message)
    toast.showMessage({
      message: response?.data?.data?.message?.fa,
      color: "success",
    });
  return response.data;
};

const onResponseError = (error) => {
  let url = error?.response?.config?.url;
  loadings.hide({ key: url });

  toast.showMessage({
    message: error?.response?.data?.data?.message?.fa,
    color: "error",
  });
  return Promise.reject(error.response);
};

export default function () {
  // global axios defaults
  axios.defaults.timeout = 2 * 60 * 1000;
  axios.interceptors.request.use(onRequest, onRequestError);
  axios.interceptors.response.use(onResponse, onResponseError);
}
