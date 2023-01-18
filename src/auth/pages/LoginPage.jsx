import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const lastPath = localStorage.getItem("lastPath") || "/";
    login("Williams Mata");

    navigate(lastPath, {
      replace: true,
    });
  };

  return (
    <>
      <div className="container-lg">
        <h1 className="mt-2">Login</h1>
        <hr />
        <button className="btn btn-primary" onClick={onLogin}>
          Login
        </button>
      </div>
    </>
  );
};
