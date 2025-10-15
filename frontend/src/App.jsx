import React from "react";
import { Route, Routes } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Home from "./pages/Home";
import UserLogin from "./pages/userLogin";
import UserSignUp from "./pages/UserSignUp";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
import Start from "./pages/Start";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainHome from "./pages/CaptainHome";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";
import CaptainLogout from "./pages/CaptainLogout";
import Riding from "./pages/Riding";
import CaptainRiding from "./pages/CaptainRiding";
import { CaptainContext } from "./context/CaptainContext";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignUp />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignUp />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/users/logout"
          element={
            <UserProtectWrapper>
              <UserLogout />
            </UserProtectWrapper>
          }
        />

        <Route
          path="/captain-home"
          element={
            <CaptainProtectWrapper>
              <CaptainContext>
                <CaptainHome />
              </CaptainContext>
            </CaptainProtectWrapper>
          }
        />

        <Route
          path="/captains/logout"
          element={
            <CaptainProtectWrapper>
              <CaptainContext>
                <CaptainLogout />
              </CaptainContext>
            </CaptainProtectWrapper>
          }
        />

        <Route path="/riding" element={<Riding />} />

        <Route 
          path="/captain-riding" 
          element={
            <CaptainContext>
              <CaptainRiding />
            </CaptainContext>
          } 
        />
      </Routes>
    </div>
  );
};

export default App;
