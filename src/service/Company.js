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
const updatePeople = async (peopleData) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/people/manage`, peopleData);
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
const updateFAQ = async (faqData) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/faqs/manage`, faqData);
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
const updateReward = async (rewardData) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/rewards/manage`, rewardData);
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
const updateHighlights = async (rewardData) => {

    try {
        const response = await authAxios.patch(`${Base_Url}/api/highlights/manage`, rewardData);
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
        const response = await authAxios.get(`${Base_Url}/api/campaign/campaign-with-all-data-by-campaign-id/${ID}`);
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
        const response = await authAxios.get(`${Base_Url}/api/campaign/manage`);
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

const makeOfflinePayment = async (data) => {

    try {
        const response = await authAxios.post(`${Base_Url}/api/payment/make-offline-payment`, data);
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
    updatePeople,
    addPress,
    addFAQ,
    updateFAQ,
    getCampaignsFaqs,
    getCompanyDetailsByFounderId,
    uploadCompanyDocs,
    getUploadedDocs,
    updatePress,
    createReward,
    updateReward,
    getRewardByCampaingID,
    getPressByCompanyID,
    getAllCampaignOfCompany,
    getPeopleByCompanyId,
    createHighlights,
    updateHighlights,
    getHighlights,

    getAllDealTypes,
    getAllDealTerms,
    getApprovedCampaigns,
    getCampaignById,
    getCompanyDetailByCampaign,
    makeOfflinePayment

};

export default CompanyServices