import { createContext, useState } from "react";

export const AdminContext = createContext({
  setCurrentAdmin: () => null,
  currentAdmin: null,
  allUserDetails: [],
  setAllUserDetails: () => {},
  leaveDetails: [],
  setLeaveDetails: () => null,
});

export const AdminProvider = ({ children }) => {
  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [allUserDetails, setAllUserDetails] = useState([]);
  const [leaveDetails, setLeaveDetails] = useState([]);

  const getAllUserDetails = async () => {
    // API Call
    let apiURL = "http://localhost:5000/api/adminauth/userdetails";
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentAdmin,
      },
    });
    const json = await response.json();
    setAllUserDetails(json);
    console.log(json);
  };

  // delete attendance

  const deleteAttendance = async (id) => {
    // API Call
    const response = await fetch(
      `http://localhost:5000/api/attendance/deleteattendance/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": currentAdmin,
        },
      }
    );

    // Check if the delete API call was successful (status code 200)
    if (response.ok) {
      // If successful, update the state to remove the deleted attendance
      setAllUserDetails((prevUserDetails) => {
        // Map through the previous user details and find the user whose attendance was deleted
        return prevUserDetails.map((userDetail) => {
          // Check if the current user has an attendance with the given id
          const updatedAttendances = userDetail.attendances.filter(
            (attendance) => attendance._id !== id
          );

          // Return the user detail object with the updated attendances array
          return {
            ...userDetail,
            attendances: updatedAttendances,
          };
        });
      });
    } else {
      // Handle error if the delete API call was not successful
      console.error("Failed to delete attendance");
    }
  };

  // get all the leaves of the users with their names

  const getAllLeaveDetails = async () => {
    // API Call
    let apiURL = "http://localhost:5000/api/leaves/leavedetails";
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentAdmin,
      },
    });
    const json = await response.json();
    setLeaveDetails(json);
    console.log(json);
  };

  // APPROVE LEAVE
  const approveLeave = async (id) => {
    // API Call
    const response = await fetch(
      `http://localhost:5000/api/leaves/leave/${id}/approve`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": currentAdmin,
        },
      }
    );
    console.log(response.json());
  };

  const declineLeave = async (id) => {
    // API Call
    const response = await fetch(
      `http://localhost:5000/api/leaves/leave/${id}/decline`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": currentAdmin,
        },
      }
    );
    console.log(response.json());
  };

  const value = {
    currentAdmin,
    setCurrentAdmin,
    getAllUserDetails,
    allUserDetails,
    deleteAttendance,
    leaveDetails,
    setLeaveDetails,
    getAllLeaveDetails,
    approveLeave,
    declineLeave,
  };

  return (
    <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
  );
};
