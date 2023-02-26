import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { toast } from 'react-toastify';

const notify = (data) => {
    toast.error(data)
}
const notifySuccess = (data) => {
    toast.success(data)
}

const VerifyEmailOtp = async (data) => {
    if(data.otp === ""){
        notify("otp can not be empty!")
    }else{
        try {
            const response = await axios.post(`${Base_Url}/api/users/verify-email-otp`, {email: data.email , otp:data.otp});
            if(response.data.status === true){
                notifySuccess(response.data.message)
            }else{
                notify("Invalid OTP!")
            }
           
            return response;
        }
        catch (error) {
            if (error) {
                notify("Invalid OTP!")
            }
            return error;
        }
    }
}

const ResendOtpMail = async (data) =>{
    try {
        const response = await axios.post(`${Base_Url}/api/users/send-otp`,{email:data} );
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if (error) {
            notify("Try again")
        }
        return error;
    }
}

const VerifyMobileOtp = async (data) =>{
    try {
        const response = await axios.post(`${Base_Url}/api/investor-kyc/mobile/send-otp`, data );
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if (error) {
            notify("Try again")
        }
        return error;
    }
}
const MobileOtp = async (data) => {
    if(data.otp === ""){
        notify("otp can not be empty!")
    }else{
        try {
            const response = await axios.post(`${Base_Url}/api/users/verify-email-otp`, data);
            if(response.data.status === true){
                notifySuccess(response.data.message)
            }else{
                notify("Invalid OTP!")
            }
           
            return response;
        }
        catch (error) {
            if (error) {
                notify("Invalid OTP!")
            }
            return error;
        }
    }
}

const OtpServices = {
    VerifyEmailOtp,
    ResendOtpMail,
    VerifyMobileOtp,
    MobileOtp
};

export default OtpServices