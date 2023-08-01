import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import ProfileCard from "../profileCard/profileCard";

const UserPanel = () => {
  const { userDetails, getCurrentUserDetails, getAttendances, getLeaves } =
    useContext(UserContext);
  useEffect(() => {
    getCurrentUserDetails();
    getAttendances();
    getLeaves();
  }, []);

  return (
    <>
      <ProfileCard />
    </>
  );
};

export default UserPanel;
