import React, { useState } from "react";
import '../../css/GetStarted/getStarted.css'
import { Card, CardContent, Typography } from "@mui/material";
import Email from '../../images/assets/email.png';
import Loginlogo from '../../images/assets/loginlogo.png';
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn";
import FacebookSignIn from "../FacebookSignIn";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import UserServices from "../../service/UserService";
import { userEmailAction, userLoginAction } from "../../Redux/actions/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ConsentSerivce from "../../service/ConsentService";

export default function LoginMain() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const [errorMsg, setErrorMsg] = useState(false)
    const notify = (data) => {
        toast.error(data)
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isEmail(email)) setErrorMsg(true)
        else {
            try {
                UserServices.LoginUserByEmail({ email, login_type: "INVESTOR" }).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 200) {
                            if (response.data.id) {
                                dispatch(userLoginAction(response.data))
                                if (!response.data.nationality) {
                                    navigate('/about-you')
                                } else {
                                    ConsentSerivce.getUserConsent(response.data.id).then(({ data }) => {
                                        console.log(data)
                                        navigate(data ? '/dashboard' : '/become-investor')
                                    })
                                }
                            } else {
                                navigate('/otp-verification')
                            }
                            dispatch(userEmailAction(email))
                            localStorage.setItem('loginType', 'existed')
                        }

                    })
            }
            catch {
                notify("Try after few minutes")
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    // notifySuccess(response.data.message)


    return (
        <div className="get-started-container">
            <div className="get-started-section">
                <span className="get-started-heading">Log In as Investor</span>
                <span className="get-started-subheading">Please enter your details</span>
                <Card className="card-get-started">
                    <CardContent>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginBottom: '13px', marginLeft: '2em' }}>
                            <img src={Loginlogo} width={172} height={76} style={{ objectFit: 'contain' }}></img>
                        </div>
                        <div className="button-container-getStarted">
                            <GoogleSignIn />
                            <FacebookSignIn />
                        </div>
                        <div className="button-below-heading">
                            <span >Or Continue with</span>
                        </div>
                        {/* <div className="input-container">
                            <div className="name-input-get-started">
                                <img src={Username} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-name" placeholder="First Name" />
                            </div>
                            <div className="name-input-get-started">
                                <input className="in-input-name" placeholder="Last Name" />
                            </div>
                        </div> */}
                        <div className="input-container-second">
                            <div className="email-input-get-started" style={errorMsg ? { border: '1px solid #FF9494' } : {}}>
                                <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input value={email} onChange={handleChange} className="in-input-email" placeholder="Email Address" />
                            </div>
                            {
                                errorMsg && <Typography style={{ color: '#FF9494', textAlign: 'left', fontSize: '14px', paddingTop: '5px' }}>Please enter a valid email</Typography>
                            }
                        </div>
                        <button onClick={handleSubmit} className="sign-up-btn">Login</button>
                    </CardContent>
                </Card>
                <div className="bottom-most-txt-get-started">
                    <div className="footer-get-started-txt-head">
                        <span className="colored-text-get-started" onClick={() => navigate('/login-founder')} style={{ cursor: 'pointer' }}>Log in </span>as founder
                    </div>
                    <div className="footer-get-started-txt-head">Don’t have an account? <span className="colored-text-get-started" style={{ cursor: 'pointer' }} onClick={() => navigate('/get-started')}>Sign Up</span></div>
                </div>
            </div>
        </div>
    )
}