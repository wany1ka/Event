import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Conference from "./components/Confrence";
import Footer from "./components/Footer"
import ChatRoomList from "./components/ChatRoomList";
import ChatRoom from "./components/ChatRoom";
import Screens from "./components/Screens";
import ErrorPage from "./components/Error-page";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/contact' element={<ContactForm />} />
                    <Route path='/conference' element={<Conference />} />
                    <Route path='/screen' element={<Screens />} />
                    <Route path="/chat" element={<ChatRoomList />} />
                    <Route path="/chat/:roomId" element={<ChatRoom />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App