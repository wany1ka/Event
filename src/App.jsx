import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Conference from "./components/Confrence";
import SendMessage from "./components/SendMessage";
import Live from "./components/Live";
import SpeakerScreenContainer from "./components/screens/speakerScreen/SpeakerScreenContainer";
import ViewerScreenContainer from "./components/screens/ViewerScreenContainer";
import WelcomeScreenContainer from "./components/screens/WelcomeScreenContainer";


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
                    <Route path='/conference' element={<Conference />} />
                    <Route path='/chat' element={<SendMessage />} />
                    <Route path='/live' element={<Live />} />
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