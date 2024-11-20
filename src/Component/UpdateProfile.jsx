import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UpdateProfile = () => {
  const { user, updateUserProfile, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      // Update user profile in Firebase
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      });

      // Update local state
      setUser({ ...user, displayName: name, photoURL: photoURL });

      setMessage("Profile updated successfully!");
      setError("");

      // Redirect back to profile after a short delay
      setTimeout(() => navigate("/my-profile"), 1500);
    } catch (error) {
      setError("Failed to update profile. Please try again.");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>
      <div className="card w-full max-w-md bg-white shadow-xl rounded-lg p-6">
        <form onSubmit={handleUpdate} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="Enter photo URL"
              className="input input-bordered"
            />
          </div>
          {message && <p className="text-green-500 text-center">{message}</p>}
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="form-control mt-4">
            <button
              type="submit"
              className="btn bg-cool-blue text-white text-lg font-semibold"
            >
              Save Changes
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          <button
            className="text-cool-blue underline"
            onClick={() => navigate("/my-profile")}
          >
            Cancel
          </button>
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
