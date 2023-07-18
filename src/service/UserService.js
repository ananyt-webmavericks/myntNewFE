import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { toast } from "react-hot-toast";
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

const LoginUserByEmail = async (data) => {

    try {
        const response = await axios.post(`${Base_Url}/api/users/login`, JSON.stringify(data));
        // notifySuccess(response.data.message)
        localStorage.setItem("access_token", response.data.access_token)
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
        const response = await authAxios.get(`${Base_Url}/api/users/${id}`);
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