import { Button, Grid ,Card , CardContent} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import '../../css/CompleteYourProfile/verifyAddress.css'
import services from "../../service/investor.kyc";
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';
const data = {
    address_line_1:"",
    address_line_2:"",
    city:"",
    state:"",
    pincode:null
}
export default function VerifyAddress() {
    const navigate = useNavigate();
    const [value, setValue] = useState(data)
    const  {userData}  = useSelector((state)=> state.loginData)
    const [gridxsMain, setGridxsMain] = useState(2)
    const [gridxsSmall, setGridxsSmall] = useState(6)
    const ratio = parseInt(window.innerWidth);
    const navigateToProfile = localStorage.getItem('navigateToVerifyAddress')
    const handleChange = (e)=>{
        setValue({...value , [e.target.name]: e.target.value})
     }
     const notify = (data) => {
         toast.error(data)
     }
     const handleSubmit = () =>{
         const val ={
             user_id:userData.id,
             address_line_1:value.address_line_1,
             address_line_2:value.address_line_2,
             city:value.city,
             state:value.state,
             pincode:value.pincode
         }
         if(value.address_line_1 === '' && value.address_line_2==="" && value.city==="" && value.state==='' && value.pincode===''){
             notify('Please enter pan details')
         }else if(value.address_line_1 === ''){
             notify('Please enter address')
         }else if(value.city === ''){
             notify('Please enter  city')
         }else if(value.state === ''){
             notify('Please enter  state')
         }else if(value.pincode === ''){
             notify('Please enter  pincode')
         }else{
             try {
                 services.VerifyAddress(val).then(
                     (response) => {
                         console.log(response)
                         if (response.status === 201 || response.status === 200) {
                            
                             navigateToProfile ? navigate('/my-profile') :  navigate('/complete-your-profile/payment-details')
                            localStorage.removeItem('navigateToVerifyAddress')
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

    useEffect(() => {

        if (ratio < 600) {

            setGridxsMain(1)
            setGridxsSmall(12)
        }
    }, [])
    return (
        <>
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
                    <div className="verify-number-container address">
                        <Grid container spacing={gridxsMain}>
                            <Grid item xs={12}>
                                <div className="verifyAddress-input">
                                    <input type="text" value={userData.name? userData.name :userData.first_name + userData.last_name} name="name" disabled placeholder="name" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" value={value.address_line_1} name='address_line_1' onChange={handleChange} placeholder="Address Line 01" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" value={value.address_line_2} name='address_line_2' onChange={handleChange}  placeholder="Address Line 02" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text"value={value.city} name='city' onChange={handleChange}   placeholder="City" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="text" value={value.state} name='state' onChange={handleChange}   placeholder="State" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            <Grid item xs={gridxsSmall}>
                                <div className="verifyAddress-input">
                                    <input type="number" value={value.pincode} name='pincode' onChange={handleChange}  placeholder="Pincode" className="verifyAddress-input-section" />
                                </div>
                            </Grid>
                            {gridxsSmall === 12 &&
                                <Grid item xs={12}>
                                    <div className="save-changes-mobile-view">
                                        <span>Cancel</span>
                                        <Button varient="contained" className="verify-address-btn" >Save Changes</Button>
                                    </div>
                                </Grid>
                            }
                            {/* <Grid item xs={12}>
                                <div className="verifyAddress-input">
                                    <input type="text" placeholder="Father’s Name" className="verifyAddress-input-section" />
                                </div>
                            </Grid> */}
                        </Grid>
                        <div className="verify-button-container">
                            <Button varient="contained" className="verify-button" onClick={handleSubmit}>Next</Button>
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
        {ratio < 768 ? null : <Footer />}
        </>
    )
}