import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const Auth = JSON.parse(localStorage.getItem("loginUser"));

  return Auth ? children : <Navigate to={"/login"} />;
};
