"use client";

import { useState } from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const ProfilePage = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUser({ ...formData });
//       alert("Profile updated successfully!");
//     } catch (err) {
//       console.error(err);
//       alert("Error updating profile.");
//     }
//   };

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log("submit handled")
    }

  return (
    <div className="profile-page">
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled // Usually, email isn't editable
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default ProfilePage;