import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "./ConfigFirebase";
import { useNavigate } from "react-router-dom";

function HomePage() {

  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate('/')
    }).catch((err) => {
      console.log(err, 'err')
    })
  }

  return (
    <div className="m-5 flex flex-col lg:flex-row items-start lg:items-center justify-between">
      <div className="text-left lg:w-2/3 lg:pr-10">
        <h1 className="text-2xl mb-5 font-bold">Welcome to Link Up - Your Ultimate Connection Hub!</h1>
        <p className="text-lg mb-3">With crystal-clear audio and high-definition video,<br />
          Link Up ensures that every interaction feels like you're <br />
          in the same room. Our intuitive interface makes it easy  <br />
          to schedule meetings, share files, and collaborate in real-time.</p>
        <p className="text-base italic font-semibold">Experience the future of communication with Link Up!</p>
      </div>
      <div className="lg:w-1/3 lg:pl-10">
        <button onClick={handleLogout} className="py-2 px-4 rounded mb-4 mt-20 ml-5 lg:mt-0 text-red-400 hover:bg-red-600">Logout</button>
        <img src="src\assets\green.png" alt="Your Image" className="w-full h-auto opacity-75" />
      </div>

    </div>
  )
}

export default HomePage