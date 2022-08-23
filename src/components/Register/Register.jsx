import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { BASE_URL } from "../../api/Config";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Alert } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const registerUser = async () => {
    var user = await fetch(`${BASE_URL}Auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        email: email,
        password: password,
      }),
    }).then((respons) => respons.json());

    if (user.status == 200) {
      Swal.fire({
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then((c) => {
        navigate("/");
      });
    } else {
      setErrorMessage(user.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8 m-auto">
          {errorMessage && (
            <Alert variant="outlined" severity="error">
              {errorMessage}
            </Alert>
          )}
          <div className="my-3">
            <TextField
              fullWidth
              id="outlined-basic"
              onChange={(e) => setFullName(e.target.value)}
              label="Fullname"
              variant="outlined"
            />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="outlined-basic"
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
            />
          </div>
          <div className="my-3">
            <TextField
              fullWidth
              id="outlined-basic"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              variant="outlined"
            />
          </div>
          <div className="my-3">
            <button
              onClick={() => registerUser()}
              className="btn btn-outline-primary"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
