import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider"; // Import AuthContext

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext); // Access resetPassword
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState(location?.state?.email || ""); // Pre-fill email if passed from Login
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email); // Use resetPassword from context
      setMessage("Password reset email sent! Check your inbox.");
      setError("");
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">Forgot Password</h2>
        <form onSubmit={handleResetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target?.value)}
              required
            />
          </div>
          {message && <p className="text-green-500 mt-2">{message}</p>}
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="form-control mt-6">
            <button className="btn bg-cool-blue text-white text-lg font-semibold">
              Reset Password
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          <button
            className="text-cool-blue underline"
            onClick={() => navigate("/auth/login")}
          >
            Back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
