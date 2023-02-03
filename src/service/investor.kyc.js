import axios from "axios";
import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_API_URL;
axios.defaults.baseURL = BASE_URL;

const notify = (data) => {
    toast.error(data)
}
const notifySuccess = (data)=>{
    toast.success(data)
}

const VerifyKycPan = async (pan_card) => {
    
    try{
        const response = await axios.post("http://13.126.226.242:8000/api/investorkyc/verifypan", { pan_card });
        notifySuccess(response.data.message)
        return response.data.message;
    }
    catch (error) {
        if(error.response.status !== 200){
            notify(error.response.data.data.error.message)
        }
        return error.response.data.data.error.message;
    }
   
}

const VerifyKycBank = async (account_number , ifsc_code , name) => {
    
    try{
        const response = await axios.post("http://13.126.226.242:8000/api/investorkyc/verifybankdetails", { account_number , ifsc_code , name });
        notifySuccess(response.data.message)
        return response.data.message;
    }
    catch (error) {
        if(error.response.status !== 200){
            notify(error.response.message)
        }
        return error.response.message;
    }
   
}
const services = {
    VerifyKycPan,
    VerifyKycBank
};

export default services