import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {userLogin,setUser} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log({email,password})

        userLogin(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user);
        })
        .catch(error=>{
            alert(error.message)
        })
    }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center pt-4">Login Your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-cool-blue text-white text-lg font-semibold">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">Dont’t Have An Account ? <Link to="/auth/register" className="text-red-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
