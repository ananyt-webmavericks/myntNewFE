import React from "react";
import { useEffect, useState } from "react";
import Google from '../images/assets/google.png'
import { useGoogleLogin } from '@react-oauth/google';
import GoogleLogo from '../images/assets/googleLogo.png'
import jwt_decode from 'jwt-decode'
import './socialLogin.css'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ClientId } from "../Utils/Configurable";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../Redux/actions/auth";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import UserServices from "../service/UserService";
import { userEmailAction } from "../Redux/actions/auth";
import ConsentSerivce from "../service/ConsentService";
export default function GoogleSignIn() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.loginData)
    const location = window.location.pathname;

    const notify = (data) => toast.warn(data, {
        position: "top-right",
        style: {
            borderRadius: "3px",
            background: "red",
            color: "#fff",
        },
    });

    // const handleCallBackResponse = (response) => {
    //     var userObject = jwt_decode(response.credential)
    //     // console.log(userObject)
    //     if (location.includes('/login')) {
    //         try {
    //             UserServices.LoginUserByEmail({ email: userObject.email, login_type: 'INVESTOR', social_login: true }).then(
    //                 (response) => {
    //                     console.log(response)
    //                     if (response.status === 200) {
    //                         dispatch(userLoginAction({ ...response.data?.data, avatar: userObject?.picture }))
    //                         localStorage.setItem('loginType', 'existed')
    //                         if (!response.data?.data?.nationality) {
    //                             navigate('/about-you')
    //                         } else {
    //                             ConsentSerivce.getUserConsent(response.data?.data?.id).then(({ data }) => {
    //                                 navigate(data ? '/dashboard' : '/become-investor')
    //                             })
    //                         }
    //                     }
    //                 })
    //         }
    //         catch {
    //             notify("Try after few minutes")
    //         }
    //     } else {
    //         const value = {
    //             first_name: userObject.given_name,
    //             last_name: userObject.family_name,
    //             email: userObject.email,
    //             profile_image: userObject?.picture,
    //             social_login: true,
    //             user_type: "INVESTOR"
    //         }
    //         try {
    //             UserServices.CreateUser(value).then(
    //                 (response) => {
    //                     if (response.status === 201 || response.status === 200) {
    //                         dispatch(userLoginAction({ ...response.data.data, avatar: userObject?.picture }))
    //                         console.log(response)
    //                         localStorage.setItem("access_token", response.data?.access_token)
    //                         if (!response.data.data.nationality) {
    //                             navigate('/about-you')
    //                         } else {
    //                             ConsentSerivce.getUserConsent(response.data.id).then(({ data }) => {
    //                                 navigate(data ? '/dashboard' : '/become-investor')
    //                             })
    //                         }
    //                     }
    //                 })
    //         }
    //         catch {
    //             notify("Try after few minutes")
    //         }
    //     }
    // }

    const loginWithGoogle = useGoogleLogin({

        onSuccess: async (tokenResponse) => {
            const userObject = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo',
                { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } },
            );
            console.log("userObject", userObject)
            if (location.includes('/login')) {
                try {
                    UserServices.LoginUserByEmail({ email: userObject.data.email, login_type: 'INVESTOR', social_login: true }).then(
                        (response) => {
                            console.log(response)
                            if (response.status === 200) {
                                dispatch(userLoginAction({ ...response.data?.data, avatar: userObject?.data.picture }))
                                localStorage.setItem('loginType', 'existed')
                                if (!response.data?.data?.nationality) {
                                    navigate('/about-you')
                                } else {
                                    ConsentSerivce.getUserConsent(response.data?.data?.id).then(({ data }) => {
                                        navigate('/dashboard')
                                    })
                                }
                            }
                        })
                }
                catch {
                    notify("Try after few minutes")
                }
            } else {
                const value = {
                    first_name: userObject.data.given_name,
                    last_name: userObject.data.family_name,
                    email: userObject.data.email,
                    profile_image: userObject?.data.picture,
                    social_login: true,
                    user_type: "INVESTOR"
                }
                try {
                    UserServices.CreateUser(value).then(
                        (response) => {
                            if (response.status === 201 || response.status === 200) {
                                dispatch(userLoginAction({ ...response.data.data, avatar: userObject?.data.picture }))
                                console.log(response)
                                localStorage.setItem("access_token", response.data?.access_token)
                                if (!response.data.data.nationality) {
                                    navigate('/about-you')
                                } else {
                                    ConsentSerivce.getUserConsent(response.data.id).then(({ data }) => {
                                        navigate('/dashboard')
                                    })
                                }
                            }
                        })
                }
                catch {
                    notify("Try after few minutes")
                }
            }

        },
        onError: errorResponse => console.log(errorResponse),
    });


    // useEffect(() => {
    //     /* global google */
    //     window.google?.accounts?.id.initialize({
    //         client_id: ClientId,
    //         callback: data => handleCallBackResponse(data),
    //     });
    //     window.google?.accounts?.id.renderButton(
    //         document.getElementById('signInDiv'),
    //         { theme: "outline", size: '100%', width: '206px' }
    //     )
    // }, [])

    return (
        <a href="javascript: void(0)" style={{ width: '208px', background: 'white', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', border: '1px solid #D1D1D1', borderRadius: '5px', height: '42px' }} className="socailLogin" onClick={() => loginWithGoogle()}>
            <img src={GoogleLogo} className="img-google" /> Continue with Google</a>
    )
}