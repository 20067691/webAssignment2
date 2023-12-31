import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Added state for error message
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
    else {
      setErrorMessage("Invalid password. Password must be at least 8 characters long and contains at least one characters, digit, and special character.");
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center',  minHeight: '100vh', marginBottom: '20px' }}>
            <div>
      <h2>SignUp page</h2>
      {errorMessage && (
          <p style={{ color: 'red' }}>{errorMessage}</p>
        )}
      <p>You must register a username and password to log in </p>
      <input value={userName} placeholder="user name" onChange={e => {
        setUserName(e.target.value);
      }}></input><br />
      <input value={password} type="password" placeholder="password" onChange={e => {
        setPassword(e.target.value);
      }}></input><br />
      <input value={passwordAgain} type="password" placeholder="password again" onChange={e => {
        setPasswordAgain(e.target.value);
      }}></input><br />
      {/* Login web form  */}
      <button onClick={register}>Register</button>
    </div>
    </div>
  );
};

export default SignUpPage;