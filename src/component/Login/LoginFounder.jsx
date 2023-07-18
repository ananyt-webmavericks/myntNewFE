import React from "react";
import "../../css/GetStarted/getStarted.css";
import { Card, CardContent, CircularProgress } from "@mui/material";
import Email from "../../images/assets/email.png";
import Loginlogo from "../../images/assets/loginlogo.png";
import { useNavigate } from "react-router-dom";
import FounderSignInValSchema from "../../Validations/FounderSignInValSchema";
import UserServices from "../../service/UserService";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { useState } from "react";

export default function LoginFounder() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      login_type: "FOUNDER",
    },

    validationSchema: FounderSignInValSchema,

    onSubmit: (values) => {
      setIsLoading(true)
      try {
        UserServices.LoginUserByEmail(values).then((response) => {
          if (response.status === 200) {
            toast.success("OTP sent succesfully", {
              position: "top-right",
              style: {
                borderRadius: "3px",
                background: "green",
                color: "#fff",
              },
            });

            navigate("/otp-verification-founder", {
              state: { email: values.email, isNewCreate: false },
            });
          }
          setIsLoading(false)
        });
      } catch {
        setIsLoading(false)
        toast.error("Something went wrong! please try again later", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "red",
            color: "#fff",
          },
        });
        
      }
    },
  });
  return (
    <div className="get-started-container">
      <div className="get-started-section">
        <span className="get-started-heading">Log In as Founder</span>
        <span className="get-started-subheading">
          Please enter your details
        </span>
        <Card className="card-get-started">
          <CardContent>
            <form onSubmit={formik.handleSubmit}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "auto",
                  marginBottom: "13px",
                  marginLeft: "2em",
                }}
              >
                <img
                  src={Loginlogo}
                  width={172}
                  height={76}
                  style={{ objectFit: "contain" }}
                ></img>
              </div>
              <div className="input-container-second">
                <div className="email-input-get-started">
                  <img
                    src={Email}
                    width={16}
                    height={16}
                    style={{ marginLeft: "10px" }}
                  ></img>
                  <input
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="in-input-email"
                    placeholder="Email Address"
                  />
                </div>
                {formik.touched.email && (
                  <div className="raise-err-text" style={{ marginTop: "4px" }}>
                    {formik.errors.email}
                  </div>
                )}
                {/* <div className="email-input-get-started">
                                <img src={Email} width={16} height={16} style={{ marginLeft: '10px' }}></img>
                                <input className="in-input-email" placeholder="Password" />
                            </div> */}
              </div>
              <button
                disabled={
                  isLoading || formik.values.email === "" ? true : false
                }
                type="submit"
                className={isLoading ? "sign-up-btn disabled" : "sign-up-btn"}
              >
                {isLoading ? (
                  <CircularProgress
                    style={{ color: "white", width: 20, height: 20 }}
                    className="loader"
                  />
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </CardContent>
        </Card>
        <div className="bottom-most-txt-get-started">
          <div className="footer-get-started-txt-head">
            <span
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
              className="colored-text-get-started"
            >
              Log in{" "}
            </span>
            as Enroller
          </div>
        </div>
      </div>
    </div>
  );
}
