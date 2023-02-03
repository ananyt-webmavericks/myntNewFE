import React from "react";
import { useEffect,useState } from "react";
import Google from '../images/assets/google.png'
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";
import { ClientId } from "../Utils/Configurable";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../Redux/actions/auth";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
export default function GoogleSignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  {userData}  = useSelector((state)=> state.loginData)
    const [user, setUser] = useState({})

    const notify = () => toast.success("Successfully Logged In.");

    const handleCallBackResponse = (response) => {
        var userObject = jwt_decode(response.credential)
        setUser(userObject)
        console.log(userObject)
        navigate('/dashboard');
        dispatch(userLoginAction(userObject))
        localStorage.setItem("user"  ,JSON.stringify(userObject))
        notify()
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

    return (
        <div id="signInDiv" >

        </div>
    )
}