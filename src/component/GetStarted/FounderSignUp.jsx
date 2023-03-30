import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import React, { useState } from "react";
import '../../css/GetStarted/getStarted.css'
import { Card, CardContent } from "@mui/material";
import Google from '../../images/assets/google.png';
import Facebook from '../../images/assets/facebook.png';
import Username from '../../images/assets/username.png';
import Email from '../../images/assets/email.png';
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "..//GoogleSignIn";
import FacebookSignIn from "../FacebookSignIn";
import { toast } from 'react-toastify';
import UserServices from "../../service/UserService";
import { useDispatch } from "react-redux";
import { userEmailAction } from "../../Redux/actions/auth";
import { userLoginAction } from "../../Redux/actions/auth";
import { useEffect } from 'react';


const data = {
    first_name: '',
    last_name: '',
    email: '',
    social_login: false,
    user_type: "FOUNDER"
}

const FounderSignUp = () => {
    const [value, setValue] = useState(data)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

    const notify = (data) => {
        toast.error(data)
    }

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.first_name === '' && value.last_name === '' && value.email === '') {
            notify("Please enter all field")
        } else if (value.first_name === '') {
            notify("Please enter first name")
        } else if (value.last_name === '') {
            notify("Please enter last name")
        } else if (value.email === '') {
            notify("Please enter email")
        }
        if (value.email !== '' && !isEmail(value.email)) {
            notify("Please enter a valid email")
        }
        else {
            try {
                UserServices.CreateUser(value).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 201) {
                            dispatch(userLoginAction(response.data))
                            localStorage.setItem('loginType', 'new')
                            navigate('/otp-verification-founder')
                        }

                    })
            }
            catch {
                notify("Try after few minutes")
            }
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="md">

                <div className="get-started-container">
                    <div className="get-started-section">
                        <span className="get-started-heading">Get Started</span>
                        <span className="get-started-subheading">Please enter your details</span>
                        <Card className="card-get-started">
                            <CardContent>
                                <div className="button-container-getStarted">
                                    <GoogleSignIn />
                                    <FacebookSignIn />
                                </div>
                                <div className="button-below-heading">
                                    <span >Or Continue with</span>
                                </div>
                                <div className="input-container">
                                    <div className="name-input-get-started">
                                        <img src={Username} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                        <input name="first_name" value={value.first_name} onChange={handleChange} className="in-input-name" placeholder="First Name" />
                                    </div>
                                    <div className="name-input-get-started">
                                        <input name="last_name" value={value.last_name} onChange={handleChange} className="in-input-name" placeholder="Last Name" />
                                    </div>
                                </div>
                                <div className="input-container-second">
                                    <div className="email-input-get-started">
                                        <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                        <input name="email" value={value.email} onChange={handleChange} className="in-input-email" placeholder="Email Address" />
                                    </div>
                                </div>
                                <button onClick={handleSubmit} className="sign-up-btn">Sign Up</button>
                            </CardContent>
                        </Card>
                        <div className="bottom-most-txt-get-started">
                            <div className="footer-get-started-txt-head">Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer' }} className="colored-text-get-started">Log in instead</span></div>
                            <div className="footer-get-started-txt-head">Are you a founder looking to raise funds?  <span onClick={() => navigate('/founder')} style={{ cursor: 'pointer' }} className="colored-text-get-started">Apply Here</span></div>
                        </div>
                    </div>
                </div>
            </Container>

        </React.Fragment>
    )
}
export default FounderSignUp;