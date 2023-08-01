import { createContext, useState, useEffect } from "react";

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
  userDetails: {},
  setUserDetails: () => null,
  userAttendances: [],
  setUserAttendances: () => null,
  attendanceCount: 0,
  userLeaves: [],
  setUserLeaves: () => null,
  leaveCount: 0,
});

export const UserProvider = ({ children }) => {
  // Get all Notes

  const [currentUser, setCurrentUser] = useState(null);
  const [userDetails, setUserDetails] = useState({});

  const [userAttendances, setUserAttendances] = useState([]);
  const [attendanceCount, setAttendanceCount] = useState(0);
  const [userLeaves, setUserLeaves] = useState([]);
  const [leaveCount, setLeaveCount] = useState(0);

  //GET USER DETAILS
  const getCurrentUserDetails = async () => {
    // API Call
    let apiURL = "http://localhost:5000/api/userauth/getuser";
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentUser,
      },
    });
    const json = await response.json();
    setUserDetails(json);
    console.log(json);
  };

  const getAttendances = async () => {
    let apiURL = "http://localhost:5000/api/attendance/getuserattendance";
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentUser,
      },
    });
    const json = await response.json();
    setUserAttendances(json);
    console.log(userAttendances);
  };

  useEffect(() => {
    console.log("userAttendances updated:", userAttendances);
  }, [userAttendances]);

  useEffect(() => {
    console.log("userLeaves updated:", userLeaves);
  }, [userLeaves]);

  const addAttendance = async (attendanceDate, isPresent) => {
    // API Call
    let apiURL = "http://localhost:5000/api/attendance/createattendance";
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentUser,
      },
      body: JSON.stringify({ attendanceDate, isPresent }),
    });

    const attendance = await response.json();
    console.log(attendance);
  };

  // Calculate the attendance count using reduce
  useEffect(() => {
    const countAttendances = () => {
      if (userAttendances.length > 0) {
        const count = userAttendances.reduce(
          (total, attendance) => (attendance.isPresent ? total + 1 : total),
          0
        );
        setAttendanceCount(count);
      } else {
        setAttendanceCount(0);
      }
    };

    countAttendances();
  }, [userAttendances]);

  // ADD A LEAVE APPLICATION
  const addLeave = async (description) => {
    // API Call
    let apiURL = "http://localhost:5000/api/leaves/createleave/";
    const response = await fetch(apiURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentUser,
      },
      body: JSON.stringify({ description }),
    });

    const leave = await response.json();
    console.log(leave);
  };

  // GET USER LEAVES

  const getLeaves = async () => {
    let apiURL = "http://localhost:5000/api/leaves/getuserleaves";
    const response = await fetch(apiURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentUser,
      },
    });
    const json = await response.json();
    setUserLeaves(json);
    console.log(json);
  };

  // Calculate the leave count using reduce
  useEffect(() => {
    const countLeaves = () => {
      if (userLeaves.length > 0) {
        const count = userLeaves.reduce((total, leave) => total + 1, 0);
        setLeaveCount(count);
      } else {
        setLeaveCount(0);
      }
    };

    countLeaves();
  }, [userLeaves]);

  //UPDATE PROFILE PICTURE
  const updatePicture = async (profilePicture) => {
    // API Call
    let apiURL = "http://localhost:5000/api/userauth/updateprofilepicture";
    const response = await fetch(apiURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": currentUser,
      },
      body: JSON.stringify({ profilePicture }),
    });

    const json = await response.json();
    console.log(json);
  };

  const value = {
    currentUser,
    setCurrentUser,
    userDetails,
    setUserDetails,
    getCurrentUserDetails,
    getAttendances,
    userAttendances,
    addAttendance,
    attendanceCount,
    addLeave,
    getLeaves,
    leaveCount,
    updatePicture,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
