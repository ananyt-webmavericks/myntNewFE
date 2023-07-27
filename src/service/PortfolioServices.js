import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { authAxios } from "./Auth-header";

const getPortfolioData = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/users/fetch-portfolio/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}
const PortfolioServices = {
    getPortfolioData,
};

export default PortfolioServices