import React from "react";
import '../../css/GetStarted/getStarted.css'
import { Card, CardContent } from "@mui/material";
import Email from '../../images/assets/email.png';
import Loginlogo from '../../images/assets/loginlogo.png';
import { useNavigate } from "react-router-dom";
import FounderSignInValSchema from "../../Validations/FounderSignInValSchema";
import UserServices from "../../service/UserService";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";

export default function LoginFounder() {

    const navigate = useNavigate();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: "",
            login_type: "FOUNDER"
        },

        validationSchema: FounderSignInValSchema,

        onSubmit: (values) => {
            console.log(values)
            try {
                UserServices.LoginUserByEmail(values).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 200) {
                            navigate("/otp-verification-founder", { state: { email: values.email, isNewCreate: false } })
                        }

                    })
            }
            catch {
                toast.errors("Something went wrong! please try again later")
            }
        }
    });
    console.log(formik.errors)
    return (
        <div className="get-started-container">
            <div className="get-started-section">
                <span className="get-started-heading">Log In as Founder</span>
                <span className="get-started-subheading">Please enter your details</span>
                <Card className="card-get-started">
                    <CardContent>
                        <form onSubmit={formik.handleSubmit}>
                            <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginBottom: '13px', marginLeft: '2em' }}>
                                <img src={Loginlogo} width={172} height={76} style={{ objectFit: 'contain' }}></img>
                            </div>
                            <div className="input-container-second">
                                <div className="email-input-get-started">
                                    <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                    <input
                                        name="email"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        className="in-input-email"
                                        placeholder="Email Address" />
                                </div>
                                {formik.touched.email && <div className="raise-err-text" style={{ marginTop: '4px' }}>{formik.errors.email}</div>}
                                {/* <div className="email-input-get-started">
                                <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-email" placeholder="Password" />
                            </div> */}
                            </div>
                            <button type="submit" className="sign-up-btn">Login</button>
                        </form>
                    </CardContent>
                </Card>
                <div className="bottom-most-txt-get-started">
                    <div className="footer-get-started-txt-head">
                        <span onClick={() => navigate('/login')} style={{ cursor: 'pointer' }} className="colored-text-get-started">Log in </span>as Investor</div>
                </div>
            </div>
        </div>
    )
}