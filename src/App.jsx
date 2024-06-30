import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Resume from "./Pages/Resume/Resume";
import CoverLetter from "./Pages/CoverLetter/CoverLetter";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
// 1. import `NextUIProvider` component

// import axios from "axios";

// axios.defaults.baseURL = "https://devograph.onrender.com";
// axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <div className="App font-nunito-eb">
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Resume" element={<Resume />}></Route>
            <Route path="/CoverLetter" element={<CoverLetter />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
