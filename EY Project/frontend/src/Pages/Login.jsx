import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!email || !password) {
      setErrorMessage("Both fields are required!");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setSuccessMessage("Login successful!");
      sessionStorage.setItem("loggedInUser", JSON.stringify(user));

      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setErrorMessage("Invalid email or password!");
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
              {successMessage && <p className="text-success text-center">{successMessage}</p>}
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <p className="mt-3 text-center">
              Don't have an account? <a href="/register">Register here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
