import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import services from "../../service/investor.kyc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { storeKycDetailsAction } from "../../Redux/actions/verifyKycAction";

const data = {
    bank_name: "",
    bank_account: "",
    ifsc_code: ""
}

export default function BankDetails() {
    const navigate = useNavigate()
    const [value, setValue] = useState(data)
    const { userData } = useSelector((state) => state.loginData)
    const { userKycData } = useSelector(state => state.kycData)
    const kycDonePath = localStorage.getItem('kycDonePath')
    const dispatch = useDispatch()
    console.log(userKycData)
    const handleChange = (e) => {
        if (e.target.name === 'ifsc_code') {
            setValue({ ...value, [e.target.name]: e.target.value.toUpperCase() })
        } else {
            setValue({ ...value, [e.target.name]: e.target.value })
        }

    }
    const notify = (data) => {
        toast.error(data, {
            position: "top-right",
            style: {
                borderRadius: "3px",
                background: "red",
                color: "#fff",
            },
        })
    }
    const handleSubmit = () => {
        const val = {
            user_id: userData.id,
            bank_name: value.bank_name,
            bank_account: value.bank_account,
            ifsc_code: value.ifsc_code.toUpperCase()
        }
        if (value.bank_name === '' && value.bank_account === "" && value.ifsc_code === "") {
            notify('Please enter bank details')
        } else if (value.bank_name === '') {
            notify('Please enter bank name')
        } else if (value.bank_account === '') {
            notify('Please enter  account number')
        } else if (value.ifsc_code === '') {
            notify('Please enter ifsc code')
        } else {
            try {
                services.VerifyKycBank(val).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 201 || response.status === 200) {
                            services.getInvestorKycData(userData.id).then(async (response) => {

                                if (response.status === 200 || response.data.bank_account_verified) {
                                    toast.success("Bank details verify successful", {
                                        position: "top-right",
                                        style: {
                                            borderRadius: "3px",
                                            background: "green",
                                            color: "#fff",
                                        },
                                    })
                                    toast.success("KYC COMPLETED!", {
                                        position: "top-right",
                                        style: {
                                            borderRadius: "3px",
                                            background: "green",
                                            color: "#fff",
                                        },
                                    })
                                    await dispatch(storeKycDetailsAction(response.data))
                                } else {
                                    toast.error("Invalid bank details!", {
                                        position: "top-right",
                                        style: {
                                            borderRadius: "3px",
                                            background: "red",
                                            color: "#fff",
                                        },
                                    })
                                }
                            })
                        }
                        else {
                            toast.error("Something went wrong!", {
                                position: "top-right",
                                style: {
                                    borderRadius: "3px",
                                    background: "red",
                                    color: "#fff",
                                },
                            })
                            console.log("error")
                        }
                    })
            }
            catch {
                notify("Try after few minutes")
            }
        }
    }

    const handleNavigate = () => {

        (!userKycData?.mobile_number_verified)
            ? navigate('/complete-your-profile')
            : (
                !userKycData?.pan_card_verified || !userKycData?.pan_card
            )
                ? navigate('/complete-your-profile/verify-kyc')
                : (!userKycData?.address_line_1 || !userKycData?.city || !userKycData?.state || !userKycData?.pincode)
                    ? navigate('/complete-your-profile/verify-address')
                    : (!userKycData?.aadhaar_card_verified || !userKycData?.aadhaar_card_number)
                        ? navigate('/complete-your-profile/verify-kyc/aadhar-uid')
                        : (
                            !userKycData?.bank_account_verified ||
                            !userKycData?.ifsc_code || !userKycData?.bank_account || !userKycData?.bank_name)
                            ? navigate('/complete-your-profile/payment-details')
                            : navigate(kycDonePath ? kycDonePath : '/dashboard')
    }

    useEffect(() => {
        handleNavigate()
    }, [userKycData])

    return (
        <div className="verify-number-container">
            {/* <Grid container spacing={1}>
                <Grid item xs={12}> */}
            <div className="verifyAddress-input">
                <input type="text" value={value.bank_name} name="bank_name" onChange={handleChange} placeholder="Bank name" className="verifyAddress-input-section" />
            </div>
            {/* </Grid>
                <Grid item xs={12}> */}
            <div className="verifyAddress-input">
                <input type="text" value={value.bank_account} name="bank_account" onChange={handleChange} placeholder="account number" className="verifyAddress-input-section" />
            </div>
            {/* </Grid>
                <Grid item xs={12}> */}
            <div className="verifyAddress-input">
                <input type="text" value={value.ifsc_code} name="ifsc_code" onChange={handleChange} placeholder="IFSC Code" className="verifyAddress-input-section" />
            </div>
            {/* </Grid>
            </Grid> */}
            <div className="verify-button-container">
                <Button onClick={handleSubmit} varient="contained" className="verify-button">Submit</Button>
            </div>
        </div>
    )
}