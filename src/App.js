// App.js
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs.jsx';
import LandingPage from './components/LandingPage.jsx';
import Learn from './components/learn.jsx';
import Learnmore from './components/learnmore.jsx';
import LoginPage from './components/LoginPage.jsx';
import NGORegistrationForm from './components/NGORegistrationForm.jsx';
import Ngos from './components/Ngos.jsx';
import SignupPage from './components/SignupPage.jsx';
import Website from './components/Website.jsx';
import InstagramRedirect from './InstagramRedirect.js';
import './styles/AboutUs.css';
import './styles/learn.css';
import './styles/learnmore.css';
import './styles/login.css';
import "./styles/Ngo.css";
import "./styles/NGORegistrationForm.css";
import './styles/signup.css';
import './styles/website.css';




function App() {
  return (
    <Router>
      <Routes>
        {/* 👇 Redirect root URL to login */}
        <Route path="/" element={<Navigate to="/Website" />} />
        <Route path="/Website" element={<Website />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/Ngos" element={<Ngos />} />
        <Route path="/ngoregistrationform" element={<NGORegistrationForm />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/blog" element={<InstagramRedirect />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learnmore" element={<Learnmore />} />

      </Routes>
    </Router>
  );
}

export default App;

