import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, googleLogin } = useContext(AuthContext);
  const [showError, setShowError] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword,setShowPassword] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    if (name.length < 6) {
      setShowError({ name: "name Should be 6 characters long" });
      return;
    }

    if (password.length < 6) {
      setShowError({ register: "Password Should be 6 characters" });
      return;
    }

    // password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(password)){
        setShowError("Include At least one uppercase letter and lowercase letter")
        return;
    }

    // reset error
    setShowError({});
    setShowSuccess(false);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({displayName:name, photoURL:photo})
        .then(()=>{
            navigate("/")
        })
        .catch(error=>{
            console.log(error)
        })
        setShowSuccess(true);
      })
      .catch((error) => {
        setShowError({ ...showError, register: error.code });
        setShowSuccess(false);
      });
  };

  // Handle Google login
  const handleGoogleLogin = () => [
    googleLogin()
    .then(result=>{
      const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
    })
      .catch((error) => {
        setShowError({ ...showError, login: error.code });
    })
  ]

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center pt-4">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
            {showError?.name && (
              <label className="label text-red-500 text-sm">
                {showError.name}
              </label>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <button onClick={()=>setShowPassword(!showPassword)} className="btn-sm absolute right-4 top-11">
                {
                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                }
            </button>
            {showError?.register && (
              <label className="label text-red-500 text-sm">
                {showError.register}
              </label>
            )}
            
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
            {showSuccess && <p className="text-green-500 text-center">Sign up Successful</p>}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cool-blue text-white text-lg font-semibold">
              Register
            </button>
          </div>
          <div className="form-control mt-6">
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn bg-red-500 hover:bg-red-500 text-white text-lg font-semibold flex items-center justify-center space-x-2"
            >
              <FaGoogle className="text-xl" /> {/* Google Icon */}
              <span>Register with Google</span>
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account ?{" "}
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
