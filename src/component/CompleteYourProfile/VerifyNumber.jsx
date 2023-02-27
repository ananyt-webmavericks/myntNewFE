import React ,{useState} from "react";
import Checkbox from '@mui/material/Checkbox';
import WhatsAppLogo from '../../images/assets/whatsapp.png'
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OtpServices from "../../service/OtpService";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { userEmailAction } from "../../Redux/actions/auth";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function VerifyNumber() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const  {userData}  = useSelector((state)=> state.loginData)
    const { userInfo } = useSelector((state) => state.loginData)
    const [mobile, setMobile] = useState('')
    const handleChange = (e) => {
        setMobile(e.target.value)
    }
    console.log(mobile)
    const notify = (data) => {
        toast.error(data)
    }
    const handleSubmit = ()=>{

        const data ={
            user_id:userData.id,
            mobile_number:"+91"+mobile
        }
        if(mobile === ''){
            notify('Please enter your number')
        }else if(mobile.length !== 10){
            notify('Please enter valid number')
        }else{
            try {
                OtpServices.VerifyMobileOtp(data).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 201 || response.status === 200) {
                            navigate('/complete-your-profile/verify-otp')
                            dispatch(userEmailAction(data.mobile_number))
                        }
                        else{
                            console.log("error")
                        }
                    })
            }
            catch {
                notify("Try after few minutes")
            }
        }
        
    }
    return (
        <div className="complete-your-profile-container">
            <Card className="card-complete-profile">
                <CardContent style={{ padding: '16px 0' }}>
                    <div className="card-complete-heading-section">
                        <span className="heading-top-complete">Complete your profile</span>
                        <span className="heading-below-complete">Hey! Let’s get your KYC done quickly</span>
                        <div className="completion-profile-container">
                            <div className="outer-circle-dash">
                                <div className="inner-circle-dashed">
                                    <span className="font-inner-circle">1</span>
                                </div>
                            </div>
                            <hr className="dashed-line-profile" />
                            <div className="outer-circle-dash not-completed">
                                <div className="inner-circle-dashed not-completed">
                                    <span className="font-inner-circle">2</span>
                                </div>
                            </div>
                        </div>
                        <div className="completion-profile-container second">
                            <span className="dahed-completion-status first">KYC</span>
                            <span className="dahed-completion-status second">Payment Details</span>
                        </div>
                    </div>
                    <hr className="dashed-line-profile main" />
                    <div className="verify-number-container">

                        <span className="verify-number-head">Verify Mobile Number</span>
                        <div className="input-number-box-section">
                            <div className="country-code-container"> <input placeholder="+91" type="number" className="phoneNumberInput" name="countryCode" /></div>
                            <div className="number-verify-container"><input name="mobile_number" value={mobile} onChange={handleChange} type="number" className="phoneNumberInput" /></div>
                        </div>
                        <div className="checkbox-whatsapp-group-verify">
                            <Checkbox
                                {...label}
                                defaultChecked
                                sx={{
                                    color: '#F8DA36',
                                    padding: '0px',
                                    marginRight: '20px',
                                    '&.Mui-checked': {
                                        color: '#F8DA36',
                                    },
                                }}
                            />
                            <img src={WhatsAppLogo} width={17} height={17} style={{ marginRight: '8px' }}></img>
                            <span style={{ fontSize: '14px', color: '#666666' }}>Reach out to me over Whatsapp</span>
                        </div>

                    </div>
                    <div className="verify-button-container">
                        <Button varient="contained" onClick={handleSubmit} className="verify-button">Verify</Button>
                    </div>

                </CardContent>
            </Card>
        </div>


    )
}
