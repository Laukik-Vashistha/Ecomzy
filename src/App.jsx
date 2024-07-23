import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import Logout from "./components/Logout";
import First from "./components/First";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return(
    <div>
      <div className="bg-slate-900">
      <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<First />}/>
        <Route path="/protected" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
    </div>
  )
};

export default App;
