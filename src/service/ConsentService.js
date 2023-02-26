import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { toast } from 'react-toastify';

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
            notify("Data not found")
        }
        return error;
    }

}
const createUserConsent = async (data) => {
    console.log(data)
    try {
        const response = await axios.post(`${Base_Url}/api/investor-consent/manage` , data);
        notifySuccess("updated!")
        return response;
    }
    catch (error) {
        if (error) {
            notify("Data not found")
        }
        return error;
    }

}


const ConsentSerivce = {
    getUserConsent,
    createUserConsent
};

export default ConsentSerivce