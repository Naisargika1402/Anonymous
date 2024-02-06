import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./styles/Container";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Login from "./pages/Login";
import SignUpRedirect from "./pages/SignUpRedirect";
import SignupUser from "./pages/SignupUser";
import SignupEmployee from "./pages/SignupEmployee";
import UserPage from "./pages/UserPage";
import EmployeePage from "./pages/EmployeePage";
import UserProfile from "./pages/UserProfile";
import Maintenance from "./services/Maintenance";
import Electrical from "./services/Electrical";
import Grooming from "./services/Grooming";
import Plumbing from "./services/Plumbing";
import Cleaning from "./services/Cleaning";
import FoodServices from "./services/FoodServices";
import EmployeeProfile from "./pages/EmployeeProfile";
import "./index.css";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup-role" element={<SignUpRedirect />} />
          <Route path="/signup-user" element={<SignupUser />} />
          <Route path="/signup-employee" element={<SignupEmployee />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/employeepage" element={<EmployeePage />} />
          <Route path="/getUserDetails" element={<UserProfile />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/electrical" element={<Electrical />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/plumbing" element={<Plumbing />} />
          <Route path="/cleaning" element={<Cleaning />} />
          <Route path="/food" element={<FoodServices />} />
          <Route path="/getEmployeeDetails" element={<EmployeeProfile />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
