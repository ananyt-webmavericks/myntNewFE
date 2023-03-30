import axios from "axios";
import { Base_Url } from "../Utils/Configurable";
import { authAxios } from "./Auth-header";

const createCompany = async (companyData) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/company/create`, companyData);
        console.log(response)
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}


const updateCompany = async (companyData) => {

    try {
        const response = await axios.patch(`${Base_Url}/api/company/manage`, companyData);
        return response;
    }
    catch (error) {
        if (error) {
            console.log("Data not found !!")
        }
        return error;
    }
}

const addPeopleToCompany = async (peopleData) => {

    try {
        const response = await axios.post(`${Base_Url}/api/people/manage`, peopleData);
        return response;
    }
    catch (error) {
        if (error) {
            console.log("Data not found !!")
        }
        return error;
    }
}

const addFAQsForCompany = async (faqsData) => {

    try {
        const response = await axios.post(`${Base_Url}/api/faqs/manage`, faqsData);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const addPress = async (pressData) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/press/manage`, pressData);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const CompanyServices = {
    createCompany,
    updateCompany,
    addPeopleToCompany,
    addPress

};

export default CompanyServices