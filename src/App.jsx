import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import ChatApp from "./components/Chat"

function App() {
    return ( 
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/contact' element={<ContactForm />} />
                    <Route path='/chat' element={<ChatApp />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App