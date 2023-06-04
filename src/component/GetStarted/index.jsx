import React, { useEffect, useState } from "react";
import "../../css/GetStarted/getStarted.css";
import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import Google from "../../images/assets/google.png";
import Facebook from "../../images/assets/facebook.png";
import Username from "../../images/assets/username.png";
import Email from "../../images/assets/email.png";
import { useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn";
import FacebookSignIn from "../FacebookSignIn";
import { toast } from "react-hot-toast";
import UserServices from "../../service/UserService";
import { useDispatch } from "react-redux";
import { userEmailAction } from "../../Redux/actions/auth";
import { userLoginAction } from "../../Redux/actions/auth";
import { FormikProvider, useFormik } from "formik";
import GetStartedValSchema from "../../Validations/GetStartedValSchema";

export default function GetStartedSection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const isEmail = (email) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const notify = (data) => {
    toast.error(data, {
      position: "top-right",
      style: {
        borderRadius: "3px",
        background: "red",
        color: "#fff",
      },
    });
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      social_login: false,
      user_type: "INVESTOR",
    },

    validationSchema: GetStartedValSchema,

    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (userData) => {
    setIsLoading(true);
    try {
      UserServices.CreateUser(userData).then((response) => {
        console.log(response);
        if (response.status === 201) {
          dispatch(userEmailAction(response.data.email));
          localStorage.setItem("loginType", "new");
          navigate("/otp-verification");
          setIsLoading(false);
        }
        setIsLoading(false);
      });
    } catch {
      notify("Try after few minutes");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="get-started-container">
      <div className="get-started-section">
        <span className="get-started-heading">Get Started</span>
        <span className="get-started-subheading">
          Please enter your details
        </span>
        <form onSubmit={formik.handleSubmit}>
          <Card className="card-get-started">
            <CardContent>
              <div className="button-container-getStarted">
                <GoogleSignIn />
                <FacebookSignIn />
              </div>
              <div className="button-below-heading">
                <span>Or Continue with</span>
              </div>
              <div className="input-container">
                <div>
                  <div className="name-input-get-started">
                    <img
                      src={Username}
                      width={16}
                      height={16}
                      style={{ marginLeft: "10px" }}
                    ></img>
                    <input
                      name="first_name"
                      value={formik.values.first_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="in-input-name"
                      placeholder="First Name"
                    />
                  </div>
                  <Typography
                    style={{
                      color: "#FF9494",
                      textAlign: "left",
                      fontSize: "14px",
                      paddingTop: "5px",
                    }}
                  >
                    {formik.touched.first_name && formik.errors.first_name}
                  </Typography>
                </div>
                <div>
                  <div className="name-input-get-started">
                    <input
                      name="last_name"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="in-input-name"
                      placeholder="Last Name"
                    />
                  </div>
                  <Typography
                    style={{
                      color: "#FF9494",
                      textAlign: "left",
                      fontSize: "14px",
                      paddingTop: "5px",
                    }}
                  >
                    {formik.touched.last_name && formik.errors.last_name}
                  </Typography>
                </div>
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
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="in-input-email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <Typography
                style={{
                  color: "#FF9494",
                  textAlign: "left",
                  fontSize: "14px",
                  paddingTop: "5px",
                }}
              >
                {formik.touched.email && formik.errors.email}
              </Typography>
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
                  "Sign Up"
                )}
              </button>
            </CardContent>
          </Card>
        </form>
        <div className="bottom-most-txt-get-started">
          <div className="footer-get-started-txt-head">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              style={{ cursor: "pointer" }}
              className="colored-text-get-started"
            >
              Log in instead
            </span>
          </div>
          <div className="footer-get-started-txt-head">
            Are you a founder looking to raise funds?{" "}
            <span
              onClick={() => navigate("/founder")}
              style={{ cursor: "pointer" }}
              className="colored-text-get-started"
            >
              Apply Here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
