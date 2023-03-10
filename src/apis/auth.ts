import axios from "axios";
import {
  FetchLoginRequest,
  FetchLoginResponse,
  FetchRefresh,
} from "./auth.type";

export const fetchLogin = (props: FetchLoginRequest) => {
  return instance.post<FetchLoginResponse>("login", props);
};

export const fetchLogout = () => {
  return instance.get("logout");
};

export const fetchRefreshAuth = () => {
  return instance.get<FetchRefresh>("refresh");
};

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/auth`,
  withCredentials: true,
});
