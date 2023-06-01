import React, { useState } from "react";
import "../../css/OptVerification/otpVerification.css";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import MobilePng from "../../images/assets/otpMobile.png";
import OTPInput, { ResendOTP } from "otp-input-react";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import OtpServices from "../../service/OtpService";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../Redux/actions/auth";
import ConsentSerivce from "../../service/ConsentService";
import UserServices from "../../service/UserService";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  menuItem: {
    marginTop: "11px",
    //  display:'flex-root',

    display: "flex",
    justifyContent: "space-between",
  },
}));

export default function OtpVerificationMain() {
  const [OTP, setOTP] = useState("");
  const [WarnMsg, setWarnMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  let loginType = localStorage.getItem("loginType");
  const { userMail } = useSelector((state) => state.userInfo);
  const { userData } = useSelector((state) => state.loginData);
  const [newData, setNewData] = useState();
  const { state } = useLocation();

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
  const notifySuccess = (data) => {
    toast.success(data, {
      position: "top-right",
      style: {
        borderRadius: "3px",
        background: "green",
        color: "#fff",
      },
    });
  };
  const handleResendOtp = () => {
    const usernames = userMail ? userMail : userData.email;
    const loginValue = {
        email : usernames
    }
    const editValue = {
        email: state?.otpEmail
    }
    try {
      if (state?.otpEmail) {
        OtpServices.ResendOtpMail(editValue).then((response) => {
          console.log(response?.data.message);
        });
      } else {
        OtpServices.ResendOtpMail(loginValue).then((response) => {
          console.log(response?.data.message);
        });
      }
    } catch {
      notify("Try after few minutes");
    }
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const usernames = userMail ? userMail : userData.email;
    let data = { email: usernames, otp: OTP };
    const updatedUser = state?.otpEmail;
    const secondaryData = { email: updatedUser, otp: OTP };
    try {
      if (userData.secondary_email) {
        OtpServices.SecondaryEmailVerification(secondaryData).then(
          (response) => {
            if (response.data.status !== "false") {
              localStorage.setItem("access_token", response.data.access_token);
              dispatch(userLoginAction(response.data.data));
              toast.success("Email Verified Successfully!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "green",
                  color: "#fff",
                },
              });
              setIsLoading(false);
              navigate("/my-profile");
            } else {
              toast.error("Something went wrong!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "red",
                  color: "#fff",
                },
              });
              setIsLoading(false);
            }
          }
        );
      } else {
        OtpServices.VerifyEmailOtp(data).then((response) => {
          if (response.data.status !== "false") {
            localStorage.setItem("access_token", response.data.access_token);
            dispatch(userLoginAction(response.data.data));
            if (loginType === "new") {
              navigate("/about-you");
            } else {
              UserServices.getUserById(response.data.data.id).then(
                ({ data }) => {
                  if (!data.nationality) {
                    navigate("/about-you");
                  } else {
                    ConsentSerivce.getUserConsent(response.data.data.id).then(
                      ({ data }) => {
                        navigate(data ? "/dashboard" : "/become-investor");
                      }
                    );
                  }
                }
              );
            }
            setIsLoading(false);
          } else {
            setOTP("");
            setWarnMsg(true);
            setIsLoading(false);
          }
        });
      }
    } catch {
      notify("Try after few minutes");
      setIsLoading(false);
    }
  };
  useEffect(() => {
    // console.log("userData?.id",userData?.id);
    // UserServices.getUserById(userData?.id).then(({ data }) => {
    //     setNewData(data)
    //     console.log("verify-data",data);
    // })
  }, []);

  const renderButton = (buttonProps) => {
    return (
      <button
        style={{
          background: "none",
          border: "none",
          float: "right",
          marginRight: "20px",
          cursor: "pointer",
        }}
        {...buttonProps}
      >
        Resend
      </button>
    );
  };
  const renderTime = (remainingTime) => {
    return (
      <span style={{ color: "#777777", fontSize: "14px" }}>
        Resend after {remainingTime} s
      </span>
    );
  };
  return (
    <div className="verification-container ">
      <div className="get-started-section">
        <span className="get-started-heading">OTP Verification</span>
        <Card className="card-get-started">
          <CardContent>
            <div className="otp-verify-container">
              <img src={MobilePng} className="otp-verification-image"></img>
            </div>
            <span className="get-started-subheading">
              We’ve sent an OTP to your registered email ID. Enter it here to
              verify your email and continue!
            </span>
            <div className="otp-verification-section">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                // secure
                inputStyles={{
                  width: "35px",
                  outline: "none",
                  height: "35px",
                  background: "#F4F4F4 0% 0% no-repeat padding-box",
                  border: "none",
                  fontWeight: "600",
                  fontSize: "20px",
                }}
              />
              {WarnMsg && (
                <Typography
                  style={{
                    fontSize: "14px",
                    textAlign: "left",
                    color: "#FF9494",
                    paddingTop: "10px",
                  }}
                >
                  Invalid OTP! please enter correct OTP.
                </Typography>
              )}
              <ResendOTP
                maxTime={90}
                onResendClick={() => handleResendOtp()}
                className={classes.menuItem}
                renderTime={renderTime}
                renderButton={renderButton}
                disable={false}
              />
            </div>

            <button
              disabled={isLoading || OTP === "" ? true : false}
              className={isLoading ? "sign-up-btn disabled" : "sign-up-btn"}
              onClick={handleSubmit}
            >
              {" "}
              {isLoading ? (
                <CircularProgress style={{color: 'white',width: 20, height:20}} className="loader" />
              ) : loginType === "new" ? (
                "Sign Up"
              ) : (
                "Sign In"
              )}
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
