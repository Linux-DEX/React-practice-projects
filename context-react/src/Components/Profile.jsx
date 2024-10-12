import React, { useContext } from "react";
import UserContext from "../Context/useContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not loggin</h1>;
  return (
    <>
      <h1>Profile : {user.username}</h1>
    </>
  );
};
export default Profile;
