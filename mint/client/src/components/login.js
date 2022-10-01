import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from "../utils/auth";


function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const submit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <React.Fragment>
      <div className="d-flex m-5 flex-column align-items-center border border-dark rounded"
        style={{ height: "275px", width: "250px", backgroundColor: "rgb(248, 247, 245)" }}>
        <div className="w-100 text-center p-3 font-weight-bold"
          style={{ backgroundColor: "lightgreen" }}>
          Login
        </div>
        <div className="w-75">
          <div className="m-3">
            <input className="w-100" id="email" type="email" name="email" placeholder="Email" onChange={handleChange}></input>
          </div>
          <div className="m-3">
            <input className="w-100" id="password" type="password" name="password" placeholder="Password" onChange={handleChange}></input>
          </div>
          <div className="m-3">
            <button className="w-100" onClick={submit}>Sign In</button>
          </div>
          {error ? (
            <div>
              <p className="error-text">The provided credentials are incorrect</p>
            </div>
          ) : null}
        </div>
        <div>
          <div className="text-center font-weight-light">Don't have an account?</div>
          <p className="text-center" onClick={() => props.setPage("signUp")}>Sign Up</p>
        </div>
      </div>

    </React.Fragment>
  );

}

export default Login;