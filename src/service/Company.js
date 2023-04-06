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

const createCampaign = async (campaignData) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/campaign/manage`, campaignData);
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


const updateCampaign = async (campaignData) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/campaign/manage`, campaignData);
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
        const response = await authAxios.patch(`${Base_Url}/api/company/manage`, companyData);
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
        const response = await authAxios.post(`${Base_Url}/api/people/manage`, peopleData);
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

const addFAQ = async (faqData) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/faqs/manage`, faqData);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const getCampaignsFaqs = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/faqs/get-faqs-by-campaign-id/${ID}`);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const updatePress = async (pressData) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/press/manage`, pressData);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const getCompanyDetailsByFounderId = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/company/company-by-user-id/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const uploadCompanyDocs = async (values) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/documents/manage`, values);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const createReward = async (rewardData) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/rewards/manage`, rewardData);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const createHighlights = async (rewardData) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/highlights/manage`, rewardData);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const getHighlights = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/highlights/get-highlights-by-campaign-id/${ID}`);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const getUploadedDocs = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/documents/get-documents-by-comapny-id/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const getRewardByCampaingID = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/rewards/get-rewards-by-campaign-id/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const getPressByCompanyID = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/press/get-press-by-company-id/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const getAllCampaignOfCompany = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/campaign/campaign-by-company-id/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}

const getCampaignById = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/campaign/campaign-by-id/${ID}`);
        return response;
    }
    catch (error) {
        if (error) {
            console.log(error)
        }
        return error;
    }
}


const getPeopleByCompanyId = async (ID) => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/people/get-peoples-by-company-id/${ID}`);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const getCompanyDetailByCampaign = async (ID) => {
    try {
        const response = await authAxios.get(`${Base_Url}/api/campaign/campaign-with-company-data-by-campaign-id/${ID}`);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}


const getAllDealTypes = async () => {
    try {
        const response = await authAxios.get(`${Base_Url}/api/deal_type/manage`);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}


const getAllDealTerms = async () => {
    try {
        const response = await authAxios.get(`${Base_Url}/api/deal_terms/manage`);
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}


const getApprovedCampaigns = async () => {

    try {
        const response = await authAxios.get(`${Base_Url}/api/campaign/campaign-by-status`, { status: 'TRUE' });
        return response;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

const CompanyServices = {
    createCompany,
    updateCompany,
    createCampaign,
    updateCampaign,
    addPeopleToCompany,
    addPress,
    addFAQ,
    getCampaignsFaqs,
    getCompanyDetailsByFounderId,
    uploadCompanyDocs,
    getUploadedDocs,
    updatePress,
    createReward,
    getRewardByCampaingID,
    getPressByCompanyID,
    getAllCampaignOfCompany,
    getPeopleByCompanyId,
    createHighlights,
    getHighlights,

    getAllDealTypes,
    getAllDealTerms,
    getApprovedCampaigns,
    getCampaignById,
    getCompanyDetailByCampaign
};

export default CompanyServices