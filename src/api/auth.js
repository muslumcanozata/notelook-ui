import axios from "./";
import { useUserStore } from "../stores/user.store";

class AuthApi {
  static base = "/auth";
  static tokenPrefix = "Bearer ";
  static token = sessionStorage.getItem("token");
  static tokenKey = "token";

  static Login = (data) => {
    const setLoading = useUserStore((state) => state.setLoading);
    setLoading(true);
    const setName = useUserStore((state) => state.setName);
    const setId = useUserStore((state) => state.setId());

    let res = axios.post(`${this.base}/login`, data).then((res) => res.data);
    setName(res.name);
    setId(res.id);
    this.setToken(res.token);
    setLoading(false);
  };

  static Register = (data) => {
    const setLoading = useUserStore((state) => state.setLoading);
    setLoading(true);
    const setName = useUserStore((state) => state.setName);

    let res = axios.post(`${this.base}/register`, data).then((res) => res.data);
    setName(res.name);
    this.setToken(res.token);
    setLoading(false);
  };

  static Logout = (data) => {
    const setLoading = useUserStore((state) => state.setLoading);
    setLoading(true);
    const setName = useUserStore((state) => state.setName);

    let res = axios
      .post(`${this.base}/logout`, data, {
        headers: { Authorization: `${this.tokenPrefix} ${this.token}` },
      })
      .then((res) => res.data);
    setName(res.name);
    this.setToken(res.token);
    setLoading(false);
  };

  static setToken = (token) => {
    sessionStorage.setItem(this.tokenKey, token);
  };

  static removeToken = () => {
    sessionStorage.removeItem(this.tokenKey);
  };
}

export default AuthApi;
