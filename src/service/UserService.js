import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { toast } from "react-hot-toast";
import { authAxios } from "./Auth-header";

const notify = (data) => {
    toast.error(data)
}
const notifySuccess = (data) => {
    toast.success(data)
}

const LoginUserByEmail = async (data) => {

    try {
        const response = await axios.post(`${Base_Url}/api/users/login`, data);
        // notifySuccess(response.data.message)
        return response;
    }
    catch (error) {
        if (error) {
            notify("User Doesn't Exist !!")
        }
        return error;
    }

}

const CreateUser = async (value) => {
    console.log(value)
    try {
        const response = await axios.post(`${Base_Url}/api/users/sign-up`, value);
        notifySuccess('Sign up successfully !!')
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
        const response = await authAxios.patch(`${Base_Url}/api/users/manage`, obj);
        return response;
    }
    catch (error) {
        if (error) {
            notify(error.response.data.email[0])
        }
        return error;
    }

}

const getUserById = async (id) => {
    console.log(id)
    try {
        const response = await authAxios(`${Base_Url}/api/users/${id}`);
        return response;
    }
    catch (error) {
        console.log(error)
        if (error) {
            notify(error.response)
        }
        return error;
    }

}

const UserServices = {
    LoginUserByEmail,
    CreateUser,
    UpdateUser,
    getUserById
};

export default UserServices