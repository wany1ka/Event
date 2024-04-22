import { signInWithPopup } from "firebase/auth";
import React, { useEffect } from "react";
import { auth, provider } from "./ConfigFirebase";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate()

    const handleClick = () =>{
        signInWithPopup(auth, provider).then((res)=>{
            console.log(res,"userData")
            navigate('/home')
        }).catch((err)=>{
            console.log(err,"error")
        })
    }

    useEffect(() => {
        auth.onAuthStateChanged((userData)=>{
            console.log(userData)
            if(userData?.email){
                navigate('/home')
            }
        })
    })
    return (
        <div>
            <h1 className="text">Step into a world of modern conferencing</h1>
            <button onClick={handleClick}>Google Sign up</button>
        </div>
    )
}

export default Login