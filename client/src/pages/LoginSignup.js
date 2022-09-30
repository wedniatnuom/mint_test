import React, {useState} from "react";
import Login from "../components/login"
import SignUp from "../components/sign_up"

function Register() {
    const [page, setPage] = useState('login')
    return (

            <div className="d-flex justify-content-center align-items-center vh-100" 
            style={{ backgroundImage: "linear-gradient(to bottom right, lightblue, rgb(200, 238, 200)" }}>
                {page === 'login' && <Login setPage={setPage}/>}
                {page === 'signUp' && <SignUp setPage={setPage}/>}
            </div>
    )
}

export default Register;