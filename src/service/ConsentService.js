import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { toast } from "react-hot-toast";

const notify = (data) => {
    toast.error(data)
}
const notifySuccess = (data) => {
    toast.success(data)
}

const getUserConsent = async (id) => {

    try {
        const response = await axios.get(`${Base_Url}/api/investor-consent/${id}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log("Data not found !!")
        }
        return error;
    }

}
const createUserConsent = async (data) => {
    console.log(data)
    try {
        const response = await axios.post(`${Base_Url}/api/investor-consent/manage` , data);
        return response;
    }
    catch (error) {
        if (error) {
           notify("error while uploading !!")
        }
        return error;
    }

}
const updateUserConsent = async (data) => {
    console.log(data)
    try {
        const response = await axios.patch(`${Base_Url}/api/investor-consent/manage` , data);
        return response;
    }
    catch (error) {
        if (error) {
           notify("error while uploading !!")
        }
        return error;
    }

}

const ConsentSerivce = {
    getUserConsent,
    createUserConsent,
    updateUserConsent
};

export default ConsentSerivce