import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';
import Parts from './Pages/Parts/Parts';
import SignUp from './Pages/Login/SignUp';
import Purchase from './Pages/Home/Purchase';
import RequireAuth from './Pages/Login/RequireAuth';

function App() {
  return (
    <div >
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Parts" element={<Parts />} />
        <Route path="/purchase" element={<RequireAuth><Purchase /></RequireAuth>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
