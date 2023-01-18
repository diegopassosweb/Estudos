import { BrowserRouter, Route,Routes } from "react-router-dom";


import React from "react";
import FormStep1 from "./pages/FormStep1";
import FormStep2 from "./pages/FormStep2";
import FormStep3 from "./pages/FormStep3";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<FormStep1 />} />
        <Route path="/step2" element={<FormStep2 />} />
        <Route path="/step3" element={<FormStep3 />} />
    </Routes>
    </BrowserRouter>
  )
};

export default Router;
