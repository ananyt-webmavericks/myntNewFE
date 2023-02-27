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
import UserServices from "../service/UserService";
import { userEmailAction } from "../Redux/actions/auth";
export default function GoogleSignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const  {userData}  = useSelector((state)=> state.loginData)
    const location = window.location.pathname;

    const notify = (data) => toast.warn(data);

    const handleCallBackResponse = (response) => {
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        if(location.includes('/login')){
            try{
                UserServices.LoginUserByEmail(userObject.email).then(
                    (response) => {
                        console.log(response)
                        if(response.status === 200){
                            dispatch(userLoginAction(response.data))
                            localStorage.setItem('loginType','existed')
                            navigate('/dashboard')
                        }
                            
                    })
            }
            catch{
                notify("Try after few minutes")
            }
        }else{
            const value = {
                first_name:userObject.given_name,
                last_name:userObject.family_name,
                email:userObject.email,
                social_login:true,
                user_type:"INVESTOR"
            }
            try{
                UserServices.CreateUser(value).then(
                    (response) => {
                        console.log(response)
                        if(response.status === 201){
                            dispatch(userLoginAction(response.data))
                        
                            navigate('/about-you')
                        }
                          
                    })
            }
            catch{
                notify("Try after few minutes")
            }
        }
    }

    
    useEffect(() => {
        /* global google */
        window.google?.accounts?.id.initialize({
            client_id: ClientId,
            callback: data => handleCallBackResponse(data),
        });
        window.google?.accounts?.id.renderButton(
            document.getElementById('signInDiv'),
            {theme:"outline",size:'100%', width: '206px'}
        )
    }, [])

    return (
        <div id="signInDiv" >

        </div>
    )
}