import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";
import { logout } from "../features/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(
            login({ name: "Justin", age: 29, email: "justin@gmail.com" })
          );
        }}
      >
        Log In
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Login;
