import React from "react";
import Login from "../components/Login";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src="/images/header.jpg" alt="computer" />
        <div className="card-body">
          <h5 className="card-title">Welcome {user.name}</h5>
          <p className="card-text">Age:{user.age}</p>
          <p className="card-text">Email:{user.email}</p>
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Profile;
