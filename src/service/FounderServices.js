import { Base_Url } from "../Utils/Configurable";
import { authAxios } from "./Auth-header";

const getEsignPdf = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/users/fetch-agreement/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}
const FounderServices = {
    getEsignPdf,
};

export default FounderServices