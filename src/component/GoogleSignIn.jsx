import React from "react";
import { useEffect,useState } from "react";
import Google from '../images/assets/google.png'
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import { ClientId } from "../Utils/Configurable";

export default function GoogleSignIn() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const handleCallBackResponse = (response) => {
        var userObject = jwt_decode(response.credential)
        console.log("encoded jwt id token", userObject)
        setUser(userObject)
        navigate('/dashboard');
    }
    const handleSignOut = (event)=>{
        setUser({})
        
    }

    useEffect(() => {
        /* global google */

        google.accounts.id.initialize({
            client_id: ClientId,
            callback: data => handleCallBackResponse(data),
        });
        google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            {theme:"outline",size:'100%', width: '206px'}
        )
    }, [])

    console.log("as",ClientId)
    return (
        <div id="signInDiv" >

        </div>
    )
}