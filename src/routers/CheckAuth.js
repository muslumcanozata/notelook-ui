import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../stores/auth.store";

function CheckAuth() {
  const location = useLocation();
  const { token } = useAuthStore();

  if (token) return <Navigate to="/" state={{ from: location }} replace />;

  return <Outlet />;
}

export default CheckAuth;
