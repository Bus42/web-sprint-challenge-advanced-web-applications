import React, { useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const Logout = () => {
  const { push } = useHistory();
  useEffect(() => {
    // axiosWithAuth({
    //   method: "post",
    //   endpoint: "/logout",
    // })
    axiosWithAuth()
      .post("/logout")
      .then(({ data }) => {
        window.localStorage.removeItem("username");
        window.localStorage.removeItem("role");
        window.localStorage.removeItem("token");
        console.log(`User ${data.username} successfully logged out`);
        push("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div></div>;
};

export default Logout;

// Task List
// 1. On mount, execute a http request to the logout endpoint.
// 2. On a successful request, remove the token from localStorage and redirect to the login page.
