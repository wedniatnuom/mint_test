import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function SignUp(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const submit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
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
            <div className="d-flex m-5 flex-column align-items-center border border-dark rounded" style={{height: "300px", width: "250px", backgroundColor: "rgb(248, 247, 245)"}}>
                <div className="w-100 text-center p-3 font-weight-bold" style={{backgroundColor: "lightgreen"}}>Sign Up</div>
                <div className="w-75">
                    <div className="m-3">
                        <input className="w-100" id="email" type="email" name="email" placeholder="Email" onChange={handleChange}></input>
                    </div>
                    <div className="m-3">
                        <input className="w-100" id="username" type="string" name="username" placeholder="Username" onChange={handleChange}></input>
                    </div>
                    <div className="m-3">
                        <input className="w-100" id="password" type="password" name="password" placeholder="Password" onChange={handleChange}></input>
                    </div>
                    <div className="m-3">
                        <button className="w-100" onClick={submit}>Sign Up</button>
                        <button className="w-100" onClick={() => props.setPage('/')}>Back to Login</button>
                    </div>
                </div>
                <div>
                    <div className="text-center">Welcome to Mint!</div>
                </div>
            </div>
    </React.Fragment>
  );
}

export default SignUp;