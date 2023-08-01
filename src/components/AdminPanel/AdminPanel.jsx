import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../contexts/admin.context";
import AdminDashboard from "../AdminDashboard/AdminDashboard";

const AdminPanel = () => {
  const { getAllUserDetails, getAllLeaveDetails } = useContext(AdminContext);
  useEffect(() => {
    getAllUserDetails();
  }, []);

  useEffect(() => {
    getAllLeaveDetails();
  }, []);
  return (
    <>
      <AdminDashboard />
    </>
  );
};

export default AdminPanel;
