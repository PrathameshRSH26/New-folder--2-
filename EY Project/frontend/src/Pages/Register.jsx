import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password || !user.confirmPassword) {
      setErrorMessage("All fields are required!");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(user.email)) {
      setErrorMessage("Invalid email format!");
      return;
    }

    if (user.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long!");
      return;
    }

    if (user.password !== user.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setErrorMessage("");

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ name: user.name, email: user.email, password: user.password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful!");
    navigate("/login");
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row w-100 justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-8">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center">User Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className="form-control"
                  value={user.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={user.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={user.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="form-control"
                  value={user.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {errorMessage && <p className="text-danger text-center">{errorMessage}</p>}
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
            <p className="mt-3 text-center">
              Already have an account? <a href="/login">Login here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
