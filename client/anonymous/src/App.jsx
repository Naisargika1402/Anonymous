import HomePage from "./pages/HomePage";
import Container from "./styles/Container";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import EmployeePage from "./pages/EmployeePage";
import SignUpRedirect from "./pages/SignUpRedirect";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Testimonials from "./pages/Testimonials";
import "./index.css";
import UserPage from "./pages/UserPage";
import UserProfile from "./pages/UserProfile";

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
          <Route path="/register" element={<SignUp />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/employeepage" element={<EmployeePage />} />
          <Route path="/getUserDetails" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
