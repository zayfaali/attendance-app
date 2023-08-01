import { Routes, Route } from "react-router-dom";

import ButtonAppBar from "./components/AppBar/AppBar";
import Home from "./components/Home/Home";
import Userlogin from "./components/userlogin/userlogin";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import UserPanel from "./components/UserPanel/UserPanel";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import UserSignUp from "./components/UserSignUp/UserSignUp";
import LeavesModule from "./components/LeavesModule/LeavesModule";

const App = () => {
  return (
    <>
      <ButtonAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="userlogin" element={<Userlogin />} />
        <Route path="usersignup" element={<UserSignUp />} />
        <Route path="adminlogin" element={<AdminLogin />} />
        <Route path="adminpanel" element={<AdminPanel />} />
        <Route path="leavesmodule" element={<LeavesModule />} />
        <Route path="userpanel" element={<UserPanel />} />
      </Routes>
    </>
  );
};

export default App;
