import { BrowserRouter, Route, Routes } from "react-router-dom";

import CheckAuth from './CheckAuth';
import RequireAuth from './AuthRouter';

import Login from '../pages/login';
import Home from '../pages/home';

function AppRouter() {
 return <BrowserRouter>
    <Routes>
      <Route element={<CheckAuth />}>
        <Route path={"login"} element={<Login />} />
      </Route>
      <Route element={<RequireAuth />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
}

export default AppRouter;