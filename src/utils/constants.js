let BACKEND_SERVER = "http://localhost:8080";

if (process.env.REACT_APP_BACKEND_SERVER) {
  BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER;
}

export const API_SERVER = BACKEND_SERVER;
