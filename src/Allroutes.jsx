import React from "react";
import Homepage from "./pages/Homepage";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import Notespage from "./pages/Notespage";
import DescriptionPage from "./pages/DescriptionPage";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/sign-in" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/notes" element={<Notespage />}></Route>
      <Route path="/description/:id" element={<DescriptionPage />}></Route>
      <Route path="*" element={<h1>This Route is Not Available....</h1>}>
      </Route>
    </Routes>
  );
};

export default Allroutes;
