import { Navigate, Outlet, useLocation } from "react-router-dom";
import Layout from "../components/Layout.component";
import useAuthStore from "../stores/auth.store";

function RequireAuth() {
  const location = useLocation();
  const { token } = useAuthStore();

  if (!token)
    return <Navigate to="/login" state={{ from: location }} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default RequireAuth;
