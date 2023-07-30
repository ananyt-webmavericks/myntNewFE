import React, { useState, useEffect } from "react";
import "../../css/MyProfile/myProfile.css";
import { Button, CircularProgress } from "@mui/material";
import BrownArrow from "../../images/assets/brownArrow.png";
import CompleteKycProfile from "./CompleteKycProfile";
import BankDetailsAfterKyc from "./BankDetailsAfterKyc";
import { useDispatch, useSelector } from "react-redux";
import services from "../../service/investor.kyc";
import userServices from "../../service/UserService";
import { useNavigate } from "react-router-dom";
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";
import { toast } from "react-hot-toast";
import { updateUserEmailAction } from "../../Redux/actions/auth";
import OtpServices from "../../service/OtpService";

export default function MyProfileMain() {
  const _ = require("lodash");
  const [activeBtn, setActiveBtn] = useState(1);
  const navigate = useNavigate();
  const [hideDivShow, setHideDivShow] = useState(true);
  const [isEmailEdit, setEmailEdit] = useState(false);
  const [isLinkedInEdit, setLinkedInEdit] = useState(false);
  const [email, setEmail] = useState();
  const [linkedIn, setLinkedIn] = useState("");
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isLinkedInLoading, setLinkedInLoading] = useState(false);
  const [newData, setNewData] = useState(null);

  const { userData } = useSelector((state) => state.loginData);
  const { userKycData } = useSelector((state) => state.kycData);
  const EditEmail = () => {
    setEmailEdit(true);
    setEmail(userData?.email);
  };
  const EditLinkedIn = () => {
    setLinkedInEdit(true);
    setLinkedIn(newData ? newData : data.linkedin_profile);
  };

  useEffect(() => {
    if (_.isEmpty(userData)) {
      console.log("data not found");
    } else {
      services.getInvestorKycData(userData?.id).then((response) => {
        dispatch(storeKycDetailsAction(response.data));
        setData(response.data);
        setLinkedIn(response.data.linkedin_profile);
      });
    }
  }, [userData]);
  console.log("userData.email", userData);


  const handleSubmit = () => {
    console.log("func called");
    setIsLoading(true);
    const val = {
      user_id: userData?.id,
      // profile_image: "",
      // social_login: false,
      secondary_email: email,
      //   bank_name: bankName,
      //   bank_account: bankAccount,
      //   ifsc_code: ifscCode,
    };
    try {
      userServices.UpdateUser(val).then((response) => {
        console.log("updateuser", response);
        if (response.status === 201 || response.status === 200) {
          dispatch(updateUserEmailAction(response.data.data.email));

          try {
            OtpServices.SecondarySendOtpMail(email).then((response) => {
              if (response.status === 201 || response.status === 200) {
                console.log(response?.data.message);
                toast.success("OTP sent Successfully!", {
                  position: "top-right",
                  style: {
                    borderRadius: "3px",
                    background: "green",
                    color: "#fff",
                  },
                })
                navigate("/otp-verification", { state: { otpEmail: email } });
              }
            });
          } catch {
            console.log("Try after few minutes");
          }


          // userServices.getUserById(userData?.id).then((response) => {
          //   if (response.status === 200) {
          //     // dispatch(storeKycDetailsAction(response.data));
          //     toast.success("Email updated successful!", {
          //       position: "top-right",
          //       style: {
          //         borderRadius: "3px",
          //         background: "green",
          //         color: "#fff",
          //       },
          //     });
          //     //   setNewData(val)
          //     setIsLoading(false);
          //     setEmailEdit(false);
          //   } else {
          //     toast.error("Please check entered email!", {
          //       position: "top-right",
          //       style: {
          //         borderRadius: "3px",
          //         background: "red",
          //         color: "#fff",
          //       },
          //     });
          //     setIsLoading(false);
          //   }
          // });
        } else {
          setIsLoading(false);
          console.log("error");
        }
      });
    } catch {
      console.log("Try after few minutes");
    }
  };

  const handleLinkedInSubmit = () => {
    setLinkedInLoading(true);
    const val = {
      user_id: data?.user_id,
      linkedin_profile: linkedIn,
      //   pan_card: "",
      //   pan_card_verified: '',
      //   birth_date: '',
      //   birth_month: '',
      //   birth_year: '',
      //   address_line_1: "",
      //   address_line_2: "",
      //   city: "",
      //   state: "",
      //   country: "",
      //   pincode: '',
      //   bank_name: "",
      //   bank_account: "",
      //   ifsc_code: "",
      //   bank_account_verified: '',
      //   mobile_number: '',
      //   mobile_number_otp: '',
      //   mobile_number_verified: '',
      //   aadhaar_card_number: '',
      //   aadhaar_card_verified: '',
    };
    try {
      services.UpdateInvestorKyc(val).then((response) => {
        console.log("update linkedIn profile", response);

        if (response.status === 201 || response.status === 200) {
          services.getInvestorKycData(userData?.id).then((response) => {
            if (response.status === 200) {
              console.log("linkedIn response", response);
              // dispatch(storeKycDetailsAction(response.data));
              toast.success("LinkedIn profile updated successful!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "green",
                  color: "#fff",
                },
              });
              setNewData(linkedIn);
              setLinkedInLoading(false);
              setLinkedInEdit(false);
            } else {
              toast.error("Please check entered details!", {
                position: "top-right",
                style: {
                  borderRadius: "3px",
                  background: "red",
                  color: "#fff",
                },
              });
              setLinkedInLoading(false);
            }
          });
        } else {
          setLinkedInLoading(false);
          console.log("error");
        }
      });
    } catch {
      console.log("Try after few minutes");
    }
  };

  const handleNavigateToKyc = () => {
    localStorage.setItem(
      "kycDonePath",
      "/my-profile"
    )
    if (!userKycData?.mobile_number) {
      navigate("/complete-your-profile")
    }
    if (!userKycData?.address_line_1 || !userKycData?.city || !userKycData?.state || !userKycData?.pincode) {
      navigate("/complete-your-profile/verify-address")
    }
    if (!userKycData?.pan_card) {
      navigate("/complete-your-profile/verify-kyc")
    }
    if (!userKycData?.ifsc_code || !userKycData?.bank_account || !userKycData?.bank_name) {
      navigate("/complete-your-profile/payment-details")
    } else {
      toast.success("Your KYC is already completed!", {
        position: "top-right",
        style: {
          borderRadius: "3px",
          background: "green",
          color: "#fff",
        },
      });
    }

  }

  // const handleNavigate = () => {
  //   localStorage.setItem(
  //     "kycDonePath",
  //     "/my-profile"
  //   )(
  //     !userKycData?.address_line_1 ||
  //     !userKycData?.city ||
  //     !userKycData?.state ||
  //     !userKycData?.pincode
  //   )
  //     ? navigate("/complete-your-profile/verify-address")
  //     : !userKycData?.mobile_number
  //       ? navigate("/complete-your-profile")
  //       : // !userKycData?.bank_account_verified ||
  //       !userKycData?.ifsc_code ||
  //         !userKycData?.bank_account ||
  //         !userKycData?.bank_name
  //         ? navigate("/complete-your-profile/payment-details")
  //         : !userKycData?.pan_card
  //           ? // || !userKycData?.pan_card_verified
  //           navigate("/complete-your-profile/verify-kyc")
  //           : toast.success("Your KYC is already completed!", {
  //             position: "top-right",
  //             style: {
  //               borderRadius: "3px",
  //               background: "green",
  //               color: "#fff",
  //             },
  //           });
  // };

  const handleMobileNavigation = () => {
    localStorage.setItem("navigateToVerifyMobile", true);
    navigate("/complete-your-profile");
  };

  const handleAddressNavigation = () => {
    localStorage.setItem("navigateToVerifyAddress", true);
    navigate("/complete-your-profile/verify-address");
  };
  console.log(userKycData?.address_line_1 || '1' + ',' + userKycData?.address_line_2 || '2' + ',' + userKycData?.city || '3' + ',' + userKycData?.state || '4' + ',' + userKycData?.country || '5' + ',' + userKycData?.pincode || '6');
  return (
    <div className="my-profile-container">
      <span className="get-started-heading">My Profile</span>
      <div className="btn-section-my-profile">
        <div
          className="active-btn-container"
          style={
            activeBtn === 1
              ? { background: "black", color: "white", width: "auto" }
              : { background: "#F4F4F4", color: "black", width: "auto" }
          }
          onClick={() => {
            setActiveBtn(1);
            setHideDivShow(true);
          }}
        >
          General Details
        </div>
        <div
          className="active-btn-container"
          style={
            activeBtn === 2
              ? { background: "black", color: "white", width: "auto" }
              : { background: "#F4F4F4", color: "black", width: "auto" }
          }
          onClick={() => {
            setActiveBtn(2);
            setHideDivShow(false);
          }}
        >
          Bank Details
        </div>
      </div>
      {hideDivShow ? (
        <>
          <div className="details-conatiner-myprofile">
            <span className="heading-personal-details">Personal Details</span>
            <div className="verifyAddress-input">
              <input
                type="text"
                disabled
                value={
                  !_.isEmpty(data)
                    ? userData?.first_name?.length > 0
                      ? (userData?.first_name).toUpperCase() +
                      " " +
                      (userData?.last_name).toUpperCase()
                      : ""
                    : data?.name
                      ? (data?.first_name).toUpperCase() +
                      " " +
                      (data?.last_name).toUpperCase()
                      : ""
                }
                placeholder="Full Name"
                className="verifyAddress-input-section"
              />
            </div>
            <div
              style={{ marginTop: "20px" }}
              className="input-number-box-section"
            >
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="verifyAddress-input"
              >
                {!isEmailEdit ? (
                  <input
                    type="text"
                    disabled
                    value={
                      !_.isEmpty(data)
                        ? userData?.email?.length > 0
                          ? userData?.email
                          : ""
                        : data?.email
                          ? data?.email
                          : ""
                    }
                    placeholder="Email Address"
                    className="verifyAddress-input-section"
                  />
                ) : (
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    className="verifyAddress-input-section"
                  />
                )}
                {!isEmailEdit ? (
                  <span
                    onClick={() => EditEmail()}
                    style={{
                      cursor: "pointer",
                      color: "gray",
                      marginRight: 28,
                    }}
                  >
                    Edit
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      handleSubmit();
                    }}
                    style={{
                      cursor: "pointer",
                      color: "gray",
                      marginRight: 28,
                    }}
                  >
                    {isLoading ? (
                      <CircularProgress
                        style={{
                          color: "black",
                          fontSize: 10,
                          width: 20,
                          height: 20,
                        }}
                      />
                    ) : (
                      "Save"
                    )}
                  </span>
                )}
              </div>
            </div>
            <div
              style={{ marginTop: "20px" }}
              className="input-number-box-section"
            >
              <div className="country-code-container">
                <input
                  value={_.isEmpty(data) ? "" : data?.mobile_number.slice(0, 2)}
                  disabled
                  placeholder="91"
                  type="number"
                  className="phoneNumberInput"
                  name="countryCode"
                />
              </div>
              <div
                className="number-verify-container"
                style={{ width: "100%", display: "flex", alignItems: "center" }}
              >
                <input
                  disabled
                  value={_.isEmpty(data) ? "" : data?.mobile_number.slice(2)}
                  type="text"
                  placeholder="contact number"
                  // style={{ width: "77%" }}
                  className="verifyAddress-input-section"
                />
                <span
                  style={{ cursor: "pointer", color: "gray", marginRight: "28px" }}
                  onClick={handleMobileNavigation}
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
          <div className="details-conatiner-myprofile second">
            <span className="heading-personal-details">KYC Details</span>
            <div
              style={{
                display: "flex",
                marginTop: "20px",
                alignItems: "center",
              }}
            >
              {_.isEmpty(data) ? (
                <>
                  <Button
                    variant="contained"
                    className="kyc-pending-btn-my-profile"
                  >
                    KYC Pending
                  </Button>
                  <div
                    // href="#"
                    onClick={handleNavigateToKyc}
                    style={{ cursor: "pointer" }}
                    className="link-for-complete-kyc"
                  >
                    Complete KYC{" "}
                    <img src={BrownArrow} width={10} height={10}></img>
                  </div>
                </>
              ) : !userKycData?.bank_account ||
                !userKycData?.pan_card ||
                // && !userKycData?.pan_card_verified
                !userKycData?.address_line_1 ||
                !userKycData?.city ||
                !userKycData?.state ||
                !userKycData?.country ||
                !userKycData?.pincode ||
                !userKycData?.bank_name ||
                !userKycData?.bank_account ||
                !userKycData?.ifsc_code ||
                // && !userKycData?.bank_account_verified
                !userKycData?.mobile_number ? (
                <>
                  <Button
                    variant="contained"
                    className="kyc-pending-btn-my-profile"
                  >
                    KYC Pending
                  </Button>
                  <div
                    // href="#"
                    onClick={handleNavigateToKyc}
                    style={{ cursor: "pointer" }}
                    className="link-for-complete-kyc"
                  >
                    Complete KYC{" "}
                    <img src={BrownArrow} width={10} height={10}></img>
                  </div>
                </>
              ) : (
                <>
                  <Button
                    variant="contained"
                    className="kyc-pending-btn-my-profile completed"
                  >
                    KYC Completed
                  </Button>
                </>
              )}
            </div>
          </div>
          <div className="details-conatiner-myprofile">
            <span className="heading-personal-details">Linkedin Profile</span>
            <div
              style={{ display: "flex", alignItems: "center" }}
              className="verifyAddress-input"
            >
              <input
                type="text"
                disabled={!isLinkedInEdit ? true : false}
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                placeholder="Linkedin Profile"
                className="verifyAddress-input-section"
              />
              {!isLinkedInEdit ? (
                <span
                  onClick={() => EditLinkedIn()}
                  style={{
                    cursor: "pointer",
                    color: "gray",
                    marginRight: 28,
                  }}
                >
                  Edit
                </span>
              ) : (
                <span
                  onClick={() => {
                    handleLinkedInSubmit();
                  }}
                  style={{
                    cursor: "pointer",
                    color: "gray",
                    marginRight: 28,
                  }}
                >
                  {isLinkedInLoading ? (
                    <CircularProgress
                      style={{
                        color: "black",
                        fontSize: 10,
                        width: 20,
                        height: 20,
                      }}
                    />
                  ) : (
                    "Save"
                  )}
                </span>
              )}
            </div>
          </div>
          <div className="details-conatiner-myprofile">
            <span className="heading-personal-details">Address Details</span>
            <div className="verifyAddress-input" style={{ width: "100%", display: "flex", alignItems: "center" }}>
              <div
                className="verifyAddress-input-section"
                style={{ fontSize: '13.5px', marginTop: '20px' }}
              >
                {
                  userKycData?.address_line_1 ? `${userKycData?.address_line_1} , ` : '' +
                    userKycData?.address_line_2 ? `${userKycData?.address_line_2} , ` : '' +
                      userKycData?.city ? `${userKycData?.city} , ` : '' +
                        userKycData?.state ? `${userKycData?.state} , ` : '' +
                          userKycData?.country ? `${userKycData?.country} , ` : '' +
                            userKycData?.pincode ? `${userKycData?.pincode} , ` : ''
                }
              </div>
              <span
                style={{ cursor: "pointer", color: "gray", marginRight: '28px' }}
                onClick={handleAddressNavigation}
              >
                Edit
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          {_.isEmpty(data) ? (
            <CompleteKycProfile data={data} />
          ) : (
            <BankDetailsAfterKyc data={data} />
          )}
        </>
      )}
    </div>
  );
}


