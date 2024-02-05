import HomePage from "./pages/HomePage";
import Container from "./styles/Container";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import EmployeePage from "./pages/EmployeePage";
import SignUpRedirect from "./pages/SignUpRedirect";
import SignupUser from "./pages/SignupUser";
import SignupEmployee from "./pages/SignupEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./pages/Testimonials";
import "./index.css";
import UserPage from "./pages/UserPage";
import UserProfile from "./pages/UserProfile";
import Maintenance from "./services/Maintenance";
import Electrical from "./services/Electrical";
import Grooming from "./services/Grooming";
import Plumbing from "./services/Plumbing";
import Cleaning from "./services/Cleaning";
import FoodServices from "./services/FoodServices";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
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
          <Route path="/food" element={<FoodServices />} />
          <Route path="/cleaning" element={<Cleaning />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
