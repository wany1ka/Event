import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./ConfigFirebase";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate()

    const handleLogout = ()=>{
        signOut(auth).then(()=>{
            navigate('/')
        }).catch((err)=>{
            console.log(err,'err')
        })
    }

    return (
        <div className="m-5">
            <button onClick={handleLogout}>Logout</button><br /><br />
            <h1 className="text-2xl mb-5 font-bold">Welcome to Link Up - Your Ultimate Connection Hub!</h1>
            <p className="text-lg mb-3">With crystal-clear audio and high-definition video,<br />
                Link Up ensures that every interaction feels like you're <br />
                in the same room. Our intuitive interface makes it easy  <br />
                to schedule meetings, share files, and collaborate in real-time.</p>
            <p className="text-base italic font-semibold"> Experience the future of communication with Link Up!</p>
            <img src="src\assets\video mation.webp" className="w-96 h-96 flex" alt="" />
        </div>
    )
}

export default HomePage