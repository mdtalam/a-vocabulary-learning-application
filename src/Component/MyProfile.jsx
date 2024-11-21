import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 animate__animated animate__rotateInDownLeft">
        Welcome, {user?.displayName || "User"}!
      </h1>
      <div className="card w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        {user?.photoURL && (
          <div className="flex justify-center mb-4 animate__animated animate__flipInX">
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full border-2 border-cool-blue"
            />
          </div>
        )}
        <div className="text-center">
          <p className="text-lg font-semibold mb-2 animate__animated animate__slideInLeft">
            <span className="font-bold">Name:</span> {user?.displayName || "N/A"}
          </p>
          <p className="text-lg font-semibold mb-2 animate__animated animate__slideInRight">
            <span className="font-bold">Email:</span> {user?.email || "N/A"}
          </p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/my-profile/update-profile")}
            className="px-6 py-3 bg-cool-blue text-white font-semibold text-lg rounded-lg shadow hover:bg-blue-700 animate__animated animate__jackInTheBox"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
