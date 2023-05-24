import axios from "axios";
import { toast } from "react-hot-toast";
import { Base_Url } from "../Utils/Configurable";
import { authAxios } from "./Auth-header";


const notify = (data) => {
    toast.error(data,{
        position: "top-right",
        style: {
          borderRadius: "3px",
          background: "red",
          color: "#fff",
        },
      })
}
const notifySuccess = (data) => {
    toast.success(data,{
        position: "top-right",
        style: {
          borderRadius: "3px",
          background: "green",
          color: "#fff",
        },
      })
}

const VerifyKycPan = async (data) => {
    try {
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/pan/manage`, data);
        return response;
    }
    catch (error) {
        if (error) {
            notify("investor kyc already exists !!")
        }
        return error;
    }

}
const VerifyAddress = async (data) => {
    try {
        const response = await axios.post(`${Base_Url}/api/investor-kyc/address/manage`, data);
        // notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if (error) {
            notify('investor kyc already exists !!')
        }
        return error;
    }

}
const UpdateAddress = async (data) => {
    try {
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/address/manage`, data);
        // notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if (error) {
            notify('investor kyc already exists !!')
        }
        return error;
    }

}

const VerifyKycBank = async (data) => {

    try {
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/bank-verification/manage`, data);
        // notifySuccess("Bank details uploaded successfully!")
        return response;
    }
    catch (error) {
        if (error) {
            notify("Something went wrong !!")
        }
        return error;
    }

}

const verifyAadharKyc = async (aadharCredentials) => {

    try {
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/aadhaar-verification/manage`, aadharCredentials);
        return response;
    }
    catch (error) {
        notify("Something went wrong, please try again later !!")
        return error;
    }

}
const getInvestorKycData = async (id) => {

    try {
        const response = await axios.get(`${Base_Url}/api/investor-kyc/${id}`);
        console.log(response.data)
        return response;
    }
    catch (error) {
        if (error) {
            console.log("data not found !!")
        }
        return error;
    }

}
const EditBankDetails = async (data) => {

    try {
        const response = await axios.patch(`${Base_Url}/api/investor-kyc/bank-verification/manage`,data);
        console.log(response.data)
        return response;
    }
    catch (error) {
        if (error) {
            console.log("data not found !!")
        }
        return error;
    }

}
const UpdateInvestorKyc = async (data) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/investor-kyc/update-investor-Kyc`,data);
        console.log(response.data)
        return response;
    }
    catch (error) {
        if (error) {
            console.log("data not found !!")
        }
        return error;
    }

}
const services = {
    VerifyKycPan,
    VerifyKycBank,
    VerifyAddress,
    UpdateAddress,
    getInvestorKycData,
    verifyAadharKyc,
    EditBankDetails,
    UpdateInvestorKyc
};

export default services