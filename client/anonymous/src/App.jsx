import HomePage from "./pages/HomePage";
import Container from "./styles/Container";
import About from "./pages/About";
import Services from "./pages/Services";
import Login from "./pages/Login";
import WorkerPage from "./pages/WorkerPage";
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
          <Route path="/register" element={<SignUp />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/workerpage" element={<WorkerPage />} />
          <Route path="/getUserDetails" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
