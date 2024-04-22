import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";

function App() {
    return ( 
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App