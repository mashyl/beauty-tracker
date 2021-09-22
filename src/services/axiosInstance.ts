import Axios from "axios";
import { ROUTES } from "constants/Routes";
import { getFromLocalStorage } from "utils/helpers";

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  responseType: "json",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getFromLocalStorage("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");
    const idToken = localStorage.getItem("idToken");

    if (!refreshToken && !accessToken) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      if (
        !(
          Object.values(ROUTES.BASE).find((route) =>
            route.includes(window.location.pathname.split("/")[1])
          ) || Object.values(ROUTES.AUTH).includes(window.location.pathname)
        )
      ) {
        window.location.replace(`${process.env.REACT_APP_BASE_URL}sign-in`);
      }
    }

    if (
      typeof error.response !== "undefined" &&
      error.response.status === 401
    ) {
      localStorage.removeItem("refreshToken");
    }

    if (
      accessToken &&
      refreshToken &&
      idToken &&
      typeof error.response !== "undefined" &&
      error.response.status === 401
    ) {
      return axiosInstance
        .post("/auth/refresh/", { refreshToken, idToken })
        .then((response) => {
          const { accessToken, refreshToken, idToken } = response.data;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("idToken", idToken);

          axiosInstance.defaults.headers["Authorization"] =
            "Bearer " + accessToken;
          originalRequest.headers["Authorization"] = "Bearer " + accessToken;

          return axiosInstance(originalRequest);
        })
        .catch(() => {
          localStorage.clear();
          window.location.replace(`${process.env.REACT_APP_BASE_URL}sign-in`);
        });
    }

    // specific error handling done elsewhere
    return Promise.reject({ ...error });
  }
);

export { axiosInstance };
