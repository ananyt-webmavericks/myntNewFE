import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { toast } from 'react-toastify';

const notify = (data) => {
    toast.error(data)
}
const notifySuccess = (data) => {
    toast.success(data)
}

const LoginUserByEmail = async (email) => {

    try {
        const response = await axios.post(`${Base_Url}/api/users/login`, { email });
        notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if (error) {
            notify("User Doesn't Exist!")
        }
        return error;
    }

}

const CreateUser = async (value) => {

    try {
        const response = await axios.post(`${Base_Url}/api/users/manage`, value);
        notifySuccess('Sign up successfully')
        return response;
    }
    catch (error) {
        if (error) {
            notify(error.response.data.email[0])
        }
        return error;
    }

}
const UpdateUser = async (obj) => {
  
    try {
        const response = await axios.patch(`${Base_Url}/api/users/manage`, obj);
        notifySuccess('successfully updated')
        return response;
    }
    catch (error) {
        if (error) {
            notify(error.response.data.email[0])
        }
        return error;
    }

}

const UserServices = {
    LoginUserByEmail,
    CreateUser,
    UpdateUser
};

export default UserServices