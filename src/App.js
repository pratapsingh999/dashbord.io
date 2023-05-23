import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Detailes from "./pages/Details";
import Dashbord from "./pages/Dashbord";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Dashbord />} />
          <Route path="/details" exact element={<Detailes />} />
          <Route path="/signin" exact element={<Signin />} />
          <Route path="/signup" exact element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
