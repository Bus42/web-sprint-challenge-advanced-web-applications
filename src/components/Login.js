import React, {useState} from "react";
import styled from "styled-components";
import useForm from "../hooks/useForm.jsx";
import axiosWithAuth from "../utils/axiosWithAuth"
import {useHistory} from 'react-router-dom';

const Login = () => {
  const { formValues, handleChange, clearForm } = useForm();
  const [error, setError] = useState(null);
  const {push} = useHistory();

  const handleSubmit = (e) => {
      // clear errors on new submission
      setError(null)
    e.preventDefault();
    axiosWithAuth({
        method: "post",
        endpoint: "/login",
        body: formValues
    })
    .then(({data}) => {
        window.localStorage.setItem("token", data)
        clearForm();
        push("/view")
    })
    .catch(error => {
        console.table(error.response.data)
        setError(error.response.data.error)
    })
};

  return (
    <ComponentContainer>
      <ModalContainer>
        <h1>Welcome to Blogger Pro</h1>
        <h2>Please enter your account information.</h2>
        <form id="submit" action="submit" onSubmit={handleSubmit}>
          <input
            id="username"
            type="text"
            value={formValues.username}
            placeholder="username"
            name="username"
            onChange={handleChange}
          />
          <input
            id="password"
            type="password"
            value={formValues.password}
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
          {error && <p id="error">{error}</p>}
          <button id="submit" type="submit">Log In</button>
        </form>
      </ModalContainer>
    </ComponentContainer>
  );
};

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.

const ComponentContainer = styled.div`
  height: 70%;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ModalContainer = styled.div`
  width: 500px;
  background: white;
  padding: 2rem;
  text-align: center;
`;

const Label = styled.label`
  display: block;
  text-align: left;
  font-size: 1.5rem;
`;

const FormGroup = styled.form`
  padding: 1rem;
`;

const Input = styled.input`
  font-size: 1rem;
  padding: 1rem 0;
  width: 100%;
`;

const Button = styled.button`
  padding: 1rem;
  width: 100%;
`;
