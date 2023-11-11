import React from "react";
import { Route, Redirect, Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// will remove later
import { useUserContext } from "../context/user_context";

const PrivateRoute = () => {
  const { myUser } = useUserContext();
  const navigate = useNavigate();
  return <div>{myUser ? navigate("/checkout") : navigate("/")}</div>;
};
export default PrivateRoute;
