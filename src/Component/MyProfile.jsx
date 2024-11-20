import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col bg-cool-blue p-8 shadow-xl mt-20 mb-10">
        <figure className="w-[300px] h-[300px] mx-auto">
          <img
          className="w-full h-full rounded-full"
            src={user?.photoURL}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-3xl font-semibold">Name: {user.displayName}</h2>
          <p className="text-xl">Email: {user?.email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
