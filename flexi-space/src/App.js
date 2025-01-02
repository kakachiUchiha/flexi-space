import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Contact from "./pages/contact_us/contact_us";
import LoginPage from "./pages/login/login";
import SignUp from "./pages/signup/signup"; 
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import AddWorkspace from "./pages/add_page/add"
import SupportUs from "./pages/FAQ/FAQ";
import UserProfile from "./pages/profile/profile";
import BlogResources from "./pages/blog_ressource/blog"
import Workspace from "./pages/workspace/Workspace"
import OwnerDashboard from "./pages/profile/owner"

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPage />}/>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/reservation" element={<ReservationPage />}/>
        <Route path="/add_workspace" element={<AddWorkspace />}/>
       <Route path="/FAQ" element={<SupportUs />}/>
       <Route path="/profile" element={<UserProfile />}/>
       <Route path="/blog_et_ressource" element={<BlogResources />}/>
       <Route path="/workspace" element={<Workspace />}/>
       <Route path="/owner" element={<OwnerDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
