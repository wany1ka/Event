import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ContactForm from "./components/ContactForm";
import Conference from "./components/Confrence";
import SpeakerScreenContainer from "./components/screens/speakerScreen/SpeakerScreenContainer";
import ViewerScreenContainer from "./components/screens/ViewerScreenContainer";
import WelcomeScreenContainer from "./components/screens/WelcomeScreenContainer";
import ChatBox from "./components/ChatBox";
import LiveWithContext from "./components/Live";
import Footer from "./components/Footer"

const App = () => {
    const [appData, setAppData] = useState({ meetingId: null, mode: null });
    return  ( 
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/contact' element={<ContactForm />} />
                    <Route path='/contact' element={<footer />} />
                    <Route path='/conference' element={<Conference />} />
                    <Route path='/chat' element={<ChatBox />} />
                    <Route path='/live' element={<LiveWithContext />} />
                    <Route path='/SpeakerScreenContainer' element={<SpeakerScreenContainer meetingId={appData.meetingId} />} />
                    <Route path='/ViewerScreenContainer' element={<ViewerScreenContainer meetingId={appData.meetingId} />} />
                    <Route path='/WelcomeScreenContainer' element={<WelcomeScreenContainer setAppData={setAppData} />} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App