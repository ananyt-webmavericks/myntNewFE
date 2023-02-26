import axios from "axios";
import { toast } from 'react-toastify';
import { Base_Url } from "../Utils/Configurable";


const notify = (data) => {
    toast.error(data)
}
const notifySuccess = (data)=>{
    toast.success(data)
}

const VerifyKycPan = async (data) => {
    try{
        const response = await axios.post(`${Base_Url}/api/investor-kyc/pan/manage`,data);
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if(error){
            notify("investor kyc already exists!")
        }
        return error;
    }
   
}
const VerifyAddress = async (data) => {
    try{
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/address/manage`,data);
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if(error){
            notify('investor kyc already exists!')
        }
        return error;
    }
   
}

const VerifyKycBank = async (data) => {
   
    try{
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/bank-verification/manage`,data);
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if(error){
            notify("investor kyc already exists!")
        }
        return error;
    }
   
}
const getInvestorKycData = async (id) => {
   
    try{
        const response = await axios.get(`${Base_Url}/api/investor-kyc/${id}`);
        return response;
    }
    catch (error) {
        if(error){
            notify("data not found")
        }
        return error;
    }
   
}
const services = {
    VerifyKycPan,
    VerifyKycBank,
    VerifyAddress,
    getInvestorKycData
};

export default services