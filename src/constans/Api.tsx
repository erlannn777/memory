import axios from "axios";

export const API = "https://memoriesmanager.site/AdminPanel/Libs";

const $api = axios.create({
  baseURL: API,
});

export const publicApi = axios.create({
  baseURL: API,
});

$api.interceptors.request.use((config: any) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

$api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (err) => {
    const originalRequest = err.config;
    if (err.response.status === 401 && !err.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.post(`${API}/api/v1/users/refresh/`, {
          refresh: localStorage.getItem("refresh"),
        });
        localStorage.setItem("token", response.data.access);
        return $api.request(originalRequest);
      } catch (e) {
        return Promise.reject(e);
      }
    } else {
      return Promise.reject(err);
    }
  }
);

export default $api;
