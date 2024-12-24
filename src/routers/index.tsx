import { Routes, Route } from "react-router";
import Home from "../views/home";

const RouterApp = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default RouterApp;
