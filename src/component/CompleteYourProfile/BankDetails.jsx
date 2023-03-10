import React, { useState, useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import services from "../../service/investor.kyc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
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

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    const notify = (data) => {
        toast.error(data)
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
                            services.getInvestorKycData(userData.id).then((response) => {
                                if (response.status === 200) {
                                    dispatch(storeKycDetailsAction(response.data))
                                    handleNavigate()
                                    console.log(response.data)
                                }
                            })
                        }
                        else {
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
        (!userKycData?.address_line_1 || !userKycData?.city || !userKycData?.state || !userKycData?.pincode)
            ? navigate('/complete-your-profile/verify-address')
            : (!userKycData?.mobile_number)
                ? navigate('/complete-your-profile')
                : (
                    // !userKycData?.bank_account_verified ||
                    !userKycData?.ifsc_code || !userKycData?.bank_account || !userKycData?.bank_name)
                    ? navigate('/complete-your-profile/payment-details')
                    : (!userKycData?.pan_card
                        // || !userKycData?.pan_card_verified
                    )
                        ? navigate('/complete-your-profile/verify-kyc')
                        : navigate(kycDonePath ? kycDonePath : '/dashboard')
    }

    return (
        <div className="verify-number-container">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" value={value.bank_name} name="bank_name" onChange={handleChange} placeholder="Bank name" className="verifyAddress-input-section" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" value={value.bank_account} name="bank_account" onChange={handleChange} placeholder="account number" className="verifyAddress-input-section" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" value={value.ifsc_code} name="ifsc_code" onChange={handleChange} placeholder="IFSC Code" className="verifyAddress-input-section" />
                    </div>
                </Grid>
            </Grid>
            <div className="verify-button-container">
                <Button onClick={handleSubmit} varient="contained" className="verify-button">Submit</Button>
            </div>
        </div>
    )
}