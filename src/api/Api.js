
import axiosInstancee from "../axiosServiseFactory/aesEncription/AesEncripition";

// import axiosInstance from "../../axiosServiseFactory/AxiosServiseFactory";
// import axios from "axios";
import { baseUrl } from "../baseUrl";

export const loginn = (data) => {
    return axiosInstancee.post(`${baseUrl}staff/login`, data);
};
// -------------------------------PROFILE ATTRIBUTES------------------------------------
// -------Religion--------
export const getReligions = (page) => {
    return axiosInstancee.get(`${baseUrl}religion/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddReligion = (data) => {
    return axiosInstancee.post(`${baseUrl}religion/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getReligionById = (id) => {
    return axiosInstancee.get(`${baseUrl}religion/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateReligion = (payload) => {
    return axiosInstancee.put(`${baseUrl}religion/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteReligion = (id) => {
    return axiosInstancee.delete(`${baseUrl}religion/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchReligion = (payload) => {
    return axiosInstancee.get(`${baseUrl}religion/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Caste--------
export const getCastes = (page) => {
    return axiosInstancee.get(`${baseUrl}caste/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddCaste = (data) => {
    return axiosInstancee.post(`${baseUrl}caste/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCasteById = (id) => {
    return axiosInstancee.get(`${baseUrl}caste/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateCaste = (payload) => {
    return axiosInstancee.put(`${baseUrl}caste/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteCaste = (id) => {
    return axiosInstancee.delete(`${baseUrl}caste/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getReligionForSelector = () => {
    return axiosInstancee.get(`${baseUrl}religion`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchCaste = (payload) => {
    return axiosInstancee.get(`${baseUrl}caste/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Sub-Caste--------
export const getSubCastes = (page) => {
    return axiosInstancee.get(`${baseUrl}sub-caste/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddSubCaste = (data) => {
    return axiosInstancee.post(`${baseUrl}sub-caste/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getSubCasteById = (id) => {
    return axiosInstancee.get(`${baseUrl}sub-caste/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateSubCaste = (payload) => {
    return axiosInstancee.put(`${baseUrl}sub-caste/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteSubCaste = (id) => {
    return axiosInstancee.delete(`${baseUrl}sub-caste/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCasteForSelector = () => {
    return axiosInstancee.get(`${baseUrl}caste`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchSubCaste = (payload) => {
    return axiosInstancee.get(`${baseUrl}sub-caste/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Member Languages--------
export const getMemberLanguages = (page) => {
    return axiosInstancee.get(`${baseUrl}members-language/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddMemberLanguage = (data) => {
    return axiosInstancee.post(`${baseUrl}members-language/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getMemberLanguageById = (id) => {
    return axiosInstancee.get(`${baseUrl}members-language/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateMemberLanguage = (payload) => {
    return axiosInstancee.put(`${baseUrl}members-language/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteMemberLanguage = (id) => {
    return axiosInstancee.delete(`${baseUrl}members-language/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchMembersLanguage = (payload) => {
    return axiosInstancee.get(`${baseUrl}members-language/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Countries--------
export const getCountries = (page) => {
    return axiosInstancee.get(`${baseUrl}countries/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddCountries = (data) => {
    return axiosInstancee.post(`${baseUrl}countries/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCountriesById = (id) => {
    return axiosInstancee.get(`${baseUrl}countries/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateCountries = (payload) => {
    return axiosInstancee.put(`${baseUrl}countries/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteCountry = (id) => {
    return axiosInstancee.delete(`${baseUrl}countries/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchCountry = (payload) => {
    return axiosInstancee.get(`${baseUrl}countries/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------States--------
export const getStates = (page) => {
    return axiosInstancee.get(`${baseUrl}states/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddState = (data) => {
    return axiosInstancee.post(`${baseUrl}states/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getStateById = (id) => {
    return axiosInstancee.get(`${baseUrl}states/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateState = (payload) => {
    return axiosInstancee.put(`${baseUrl}states/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteState = (id) => {
    return axiosInstancee.delete(`${baseUrl}states/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCountriesForSelector = () => {
    return axiosInstancee.get(`${baseUrl}countries`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchState = (payload) => {
    return axiosInstancee.get(`${baseUrl}states/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Cities--------
export const getCities = (page) => {
    return axiosInstancee.get(`${baseUrl}cities/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddCity = (data) => {
    return axiosInstancee.post(`${baseUrl}cities/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCityById = (id) => {
    return axiosInstancee.get(`${baseUrl}cities/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateCity = (payload) => {
    return axiosInstancee.put(`${baseUrl}cities/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteCity = (id) => {
    return axiosInstancee.delete(`${baseUrl}cities/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getStatesForSelector = () => {
    return axiosInstancee.get(`${baseUrl}states`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchCity = (payload) => {
    return axiosInstancee.get(`${baseUrl}cities/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------On Behalf--------
export const getOnBehalfs = (page) => {
    return axiosInstancee.get(`${baseUrl}on-behalf/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddOnBehalf = (data) => {
    return axiosInstancee.post(`${baseUrl}on-behalf/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getOnBehalfById = (id) => {
    return axiosInstancee.get(`${baseUrl}on-behalf/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateOnBehalf = (payload) => {
    return axiosInstancee.put(`${baseUrl}on-behalf/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteOnBehalf = (id) => {
    return axiosInstancee.delete(`${baseUrl}on-behalf/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchOnBehalf = (payload) => {
    return axiosInstancee.get(`${baseUrl}on-behalf/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Family Status--------
export const getFamilyStatus = (page) => {
    return axiosInstancee.get(`${baseUrl}family-status/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddFamilyStatus = (data) => {
    return axiosInstancee.post(`${baseUrl}family-status/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getFamilyStatusById = (id) => {
    return axiosInstancee.get(`${baseUrl}family-status/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFamilyStatus = (payload) => {
    return axiosInstancee.put(`${baseUrl}family-status/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteFamilyStatus = (id) => {
    return axiosInstancee.delete(`${baseUrl}family-status/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchFamilyStatus = (payload) => {
    return axiosInstancee.get(`${baseUrl}family-status/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Family Values--------
export const getFamilyValues = (page) => {
    return axiosInstancee.get(`${baseUrl}family-value/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddFamilyValue = (data) => {
    return axiosInstancee.post(`${baseUrl}family-value/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getFamilyValueById = (id) => {
    return axiosInstancee.get(`${baseUrl}family-value/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFamilyValue = (payload) => {
    return axiosInstancee.put(`${baseUrl}family-value/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteFamilyValue = (id) => {
    return axiosInstancee.delete(`${baseUrl}family-value/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchFamilyValue = (payload) => {
    return axiosInstancee.get(`${baseUrl}family-value/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Marital Status--------
export const getMaritalStatuses = (page) => {
    return axiosInstancee.get(`${baseUrl}marital-status/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddMaritalStatus = (data) => {
    return axiosInstancee.post(`${baseUrl}marital-status/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getMaritalStatusById = (id) => {
    return axiosInstancee.get(`${baseUrl}marital-status/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateMaritalStatus = (payload) => {
    return axiosInstancee.put(`${baseUrl}marital-status/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteMaritalStatus = (id) => {
    return axiosInstancee.delete(`${baseUrl}marital-status/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchMaritalStatus = (payload) => {
    return axiosInstancee.get(`${baseUrl}marital-status/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Blog Posts--------
export const getAllBlogPosts = (page) => {
    return axiosInstancee.get(`${baseUrl}blog/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddBlogPost = (data) => {
    return axiosInstancee.post(`${baseUrl}blog/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getBlogPostById = (id) => {
    return axiosInstancee.get(`${baseUrl}blog/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateBlogPost = (payload) => {
    return axiosInstancee.put(`${baseUrl}blog/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteBlogPost = (id) => {
    return axiosInstancee.delete(`${baseUrl}blog/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchBlogPost = (payload) => {
    return axiosInstancee.get(`${baseUrl}blog/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCategoryForSelector = () => {
    return axiosInstancee.get(`${baseUrl}blog-category`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Blog Category--------
export const getAllBlogCategory = (page) => {
    return axiosInstancee.get(`${baseUrl}blog-category/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddBlogCategoryD = (data) => {
    return axiosInstancee.post(`${baseUrl}blog-category/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getBlogCategoryById = (id) => {
    return axiosInstancee.get(`${baseUrl}blog-category/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateBlogCategory = (payload) => {
    return axiosInstancee.put(`${baseUrl}blog-category/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteBlogCategory = (id) => {
    return axiosInstancee.delete(`${baseUrl}blog-category/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchBlogCategory = (payload) => {
    return axiosInstancee.get(`${baseUrl}blog-category/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Premium Packages--------
export const getAllPremiumPackages = (page) => {
    return axiosInstancee.get(`${baseUrl}packages/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddPremiumPackage = (data) => {
    return axiosInstancee.post(`${baseUrl}packages/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getPremiumPackageById = (id) => {
    return axiosInstancee.get(`${baseUrl}packages/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updatePremiumPackage = (payload) => {
    return axiosInstancee.put(`${baseUrl}packages/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deletePremiumPackage = (id) => {
    return axiosInstancee.delete(`${baseUrl}packages/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchPremiumPackage = (payload) => {
    return axiosInstancee.get(`${baseUrl}packages/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Package Payments--------
export const getAllPackagePayments = (page) => {
    return axiosInstancee.get(`${baseUrl}packages-payment/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddPackagePayment = (data) => {
    return axiosInstancee.post(`${baseUrl}packages-payment/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getPackagePaymentById = (id) => {
    return axiosInstancee.get(`${baseUrl}packages-payment/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updatePackagePayment = (payload) => {
    return axiosInstancee.put(`${baseUrl}packages-payment/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deletePackagePayment = (id) => {
    return axiosInstancee.delete(`${baseUrl}packages-payment/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchPackagePayment = (payload) => {
    return axiosInstancee.get(`${baseUrl}packages-payment/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Happy Stories--------
export const getAllHappyStories = (page) => {
    return axiosInstancee.get(`${baseUrl}happy-stories/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddHappyStory = (data) => {
    return axiosInstancee.post(`${baseUrl}happy-stories/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getHappyStoryById = (id) => {
    return axiosInstancee.get(`${baseUrl}happy-stories/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateHappyStory = (payload) => {
    return axiosInstancee.put(`${baseUrl}happy-stories/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteHappyStory = (id) => {
    return axiosInstancee.delete(`${baseUrl}happy-stories/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchHappyStory = (payload) => {
    return axiosInstancee.get(`${baseUrl}happy-stories/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Languages--------
export const getAllLanguages = (page) => {
    return axiosInstancee.get(`${baseUrl}language/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddLanguageD = (data) => {
    return axiosInstancee.post(`${baseUrl}language/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getLanguageById = (id) => {
    return axiosInstancee.get(`${baseUrl}language/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateLanguage = (payload) => {
    return axiosInstancee.put(`${baseUrl}language/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteLanguage = (id) => {
    return axiosInstancee.delete(`${baseUrl}language/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchLanguage = (payload) => {
    return axiosInstancee.get(`${baseUrl}language/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Currencies--------
export const getAllCurrencies = (page) => {
    return axiosInstancee.get(`${baseUrl}currency/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddCurrencyD = (data) => {
    return axiosInstancee.post(`${baseUrl}currency/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getCurrencyById = (id) => {
    return axiosInstancee.get(`${baseUrl}currency/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateCurrency = (payload) => {
    return axiosInstancee.put(`${baseUrl}currency/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deleteCurrency = (id) => {
    return axiosInstancee.delete(`${baseUrl}currency/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchCurrency = (payload) => {
    return axiosInstancee.get(`${baseUrl}currency/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------general setting--------
export const getAllgeneralsettingD = () => {
    return axiosInstancee.get(`${baseUrl}general-setting/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updategenralsettingD = (payload) => {
    return axiosInstancee.put(`${baseUrl}general-setting/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Social Media Login--------

// -------Google Login--------
export const getAllGoogleLoginD = () => {
    return axiosInstancee.get(`${baseUrl}social-media-login/google`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateGoogleLoginD = (payload) => {
    return axiosInstancee.put(`${baseUrl}social-media-login/google`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Facebook Login--------
export const getAllFacebookLoginD = () => {
    return axiosInstancee.get(`${baseUrl}social-media-login/facebook`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFacebookD = (payload) => {
    return axiosInstancee.put(`${baseUrl}social-media-login/facebook`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Twitter Login--------
export const getAllTwitterD = () => {
    return axiosInstancee.get(`${baseUrl}social-media-login/twitter`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateTwitterD = (payload) => {
    return axiosInstancee.put(`${baseUrl}social-media-login/twitter`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------SMTP Setting--------
export const getAllSMTPSettingD = () => {
    return axiosInstancee.get(`${baseUrl}smtp-setting/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateSMTPSettingD = (payload) => {
    return axiosInstancee.put(`${baseUrl}smtp-setting/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Website Setup--------

// -------Pages--------
export const getAllPagesD = (page) => {
    return axiosInstancee.get(`${baseUrl}page/get?page=${page}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const AddPagesD = (data) => {
    return axiosInstancee.post(`${baseUrl}page/add`, data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const getPagesById = (id) => {
    return axiosInstancee.get(`${baseUrl}page/get/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updatePageD = (payload) => {
    return axiosInstancee.put(`${baseUrl}page/update/${payload?.id}`, payload?.data, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const deletePages = (id) => {
    return axiosInstancee.delete(`${baseUrl}page/delete/${id}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const searchPages = (payload) => {
    return axiosInstancee.get(`${baseUrl}currency/get?page=${payload.page}&search=${payload.val}`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Header--------
export const getAllWebHeaderD = () => {
    return axiosInstancee.get(`${baseUrl}header/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateWebHeaderD = (payload) => {
    return axiosInstancee.put(`${baseUrl}header/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Footer--------
// -------AboutWidget--------
export const getFooterAboutWidgetD = () => {
    return axiosInstancee.get(`${baseUrl}footer/about/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFooterAboutWidgetD = (payload) => {
    return axiosInstancee.put(`${baseUrl}footer/about/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------ContactWidget--------
export const getFooterContactWidgetD = () => {
    return axiosInstancee.get(`${baseUrl}footer/contact/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFooterContactWidgetD = (payload) => {
    return axiosInstancee.put(`${baseUrl}footer/contact/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Copyright--------
export const getFooterCopyrightD = () => {
    return axiosInstancee.get(`${baseUrl}footer/copyright/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFooterCopyrightD = (payload) => {
    return axiosInstancee.put(`${baseUrl}footer/copyright/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------LinkWidget--------
export const getFooterLinkWidgetD = () => {
    return axiosInstancee.get(`${baseUrl}footer/link/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFooterLinkWidgetD = (payload) => {
    return axiosInstancee.put(`${baseUrl}footer/link/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------SocialLinkWidget--------
export const getFooterSocialLinkWidgetD = () => {
    return axiosInstancee.get(`${baseUrl}footer/social-link/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFooterSocialLinkWidgetD = (payload) => {
    return axiosInstancee.put(`${baseUrl}footer/social-link/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------MobileAppWidget--------
export const getFooterMobileAppWidgetD = () => {
    return axiosInstancee.get(`${baseUrl}footer/app/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFooterMobileAppWidgetD = (payload) => {
    return axiosInstancee.put(`${baseUrl}footer/app/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};


// -------Appearances--------
// -------General Appearances--------
export const getAllGeneralAppearancesD = () => {
    return axiosInstancee.get(`${baseUrl}apperance/general/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateGeneralAppearancesD = (payload) => {
    return axiosInstancee.put(`${baseUrl}apperance/general/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Global SEO--------
export const getAllGlobalSEOD = () => {
    return axiosInstancee.get(`${baseUrl}apperance/global-seo/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateGlobalSEOD = (payload) => {
    return axiosInstancee.put(`${baseUrl}apperance/global-seo/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Cookies Agreement--------
export const getAllCookiesAgreementD = () => {
    return axiosInstancee.get(`${baseUrl}apperance/cookies/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateCookiesAgreementD = (payload) => {
    return axiosInstancee.put(`${baseUrl}apperance/cookies/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Custom Script--------
export const getAllCustomScriptD = () => {
    return axiosInstancee.get(`${baseUrl}apperance/custom/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateCustomScriptD = (payload) => {
    return axiosInstancee.put(`${baseUrl}apperance/custom/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Email Templates--------
export const getAllEmailTemplatesD = () => {
    return axiosInstancee.get(`${baseUrl}email/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateEmailTemplatesD = (payload) => {
    return axiosInstancee.put(`${baseUrl}email/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Payment methods--------
// -------Paypal Credential--------
export const getPaypalCredentialsD = () => {
    return axiosInstancee.get(`${baseUrl}payment/paypal/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updatePaypalCredentialsD = (payload) => {
    return axiosInstancee.put(`${baseUrl}payment/paypal/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Instamojo Credential--------
export const getInstamojoCredentialsD = () => {
    return axiosInstancee.get(`${baseUrl}payment/instamojo/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateInstamojoCredentialsD = (payload) => {
    return axiosInstancee.put(`${baseUrl}payment/instamojo/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Stripe Credential--------
export const getStripeCredentialsD = () => {
    return axiosInstancee.get(`${baseUrl}payment/stripe/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateStripeCredentialsD = (payload) => {
    return axiosInstancee.put(`${baseUrl}payment/stripe/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Razorpay Credential--------
export const getRazorpayCredentialsD = () => {
    return axiosInstancee.get(`${baseUrl}payment/razorpay/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateRazorpayCredentialsD = (payload) => {
    return axiosInstancee.put(`${baseUrl}payment/razorpay/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------PayStack Credential--------
export const getPayStackCredentialsD = () => {
    return axiosInstancee.get(`${baseUrl}payment/paystack/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updatePayStackCredentialsD = (payload) => {
    return axiosInstancee.put(`${baseUrl}payment/paystack/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Manual Payment Credential--------
export const getManualPaymentCredentialsD = () => {
    return axiosInstancee.get(`${baseUrl}payment/manual/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateManualPaymentCredentialsD = (payload) => {
    return axiosInstancee.put(`${baseUrl}payment/manual/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------Third Party Settings--------
// -------Google Recaptcha--------
export const getGoogleRecaptchaSettingD = () => {
    return axiosInstancee.get(`${baseUrl}third-party-settings/re-captcha/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateGoogleRecaptchaSettingD = (payload) => {
    return axiosInstancee.put(`${baseUrl}third-party-settings/re-captcha/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Google Analytics--------
export const getGoogleAnalyticsSettingD = () => {
    return axiosInstancee.get(`${baseUrl}third-party-settings/analytics/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateGoogleAnalyticsSettingD = (payload) => {
    return axiosInstancee.put(`${baseUrl}third-party-settings/analytics/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Facebook Chat--------
export const getFacebookChatSettingD = () => {
    return axiosInstancee.get(`${baseUrl}third-party-settings/fb-chat/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    })
};
export const updateFacebookChatSettingD = (payload) => {
    return axiosInstancee.put(`${baseUrl}third-party-settings/fb-chat/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// -------Facebook Pixcel--------
export const getFacebookPixelSettingD = () => {
    return axiosInstancee.get(`${baseUrl}third-party-settings/fb-pixel/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFacebookPixelSettingD = (payload) => {
    return axiosInstancee.put(`${baseUrl}third-party-settings/fb-pixel/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// -------OTP System--------
// -------SET OTP Credentials--------
// ------Twilio Credential----------
export const getAllTwillioCredentialD = () => {
    return axiosInstancee.get(`${baseUrl}otp-credentials/twilio/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateTwillioCredentialD = (payload) => {
    return axiosInstancee.put(`${baseUrl}otp-credentials/twilio/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// ------Fast2SMS Credential----------
export const getAllFast2SmsCredentialD = () => {
    return axiosInstancee.get(`${baseUrl}otp-credentials/fast2sms/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateFast2SmsCredentialD = (payload) => {
    return axiosInstancee.put(`${baseUrl}otp-credentials/fast2sms/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// ------Mimo Credential----------
export const getAllMimoCredentialD = () => {
    return axiosInstancee.get(`${baseUrl}otp-credentials/mimo/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateMimoCredentialD = (payload) => {
    return axiosInstancee.put(`${baseUrl}otp-credentials/mimo/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// ------SSL Credential----------
export const getAllSslCredentialD = () => {
    return axiosInstancee.get(`${baseUrl}otp-credentials/ssl/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateSslCredentialD = (payload) => {
    return axiosInstancee.put(`${baseUrl}otp-credentials/ssl/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// ------Nexmo Credential----------
export const getAllNexmoCredentialD = () => {
    return axiosInstancee.get(`${baseUrl}otp-credentials/nexmo/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateNexmoCredentialD = (payload) => {
    return axiosInstancee.put(`${baseUrl}otp-credentials/nexmo/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
// ------Mim Credential----------
export const getAllMimCredentialD = () => {
    return axiosInstancee.get(`${baseUrl}otp-credentials/mim/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateMimCredentialD = (payload) => {
    return axiosInstancee.put(`${baseUrl}otp-credentials/mim/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};

// ------SMS Templates----------
export const getAllSMSTemplatesD = () => {
    return axiosInstancee.get(`${baseUrl}sms-template/get`, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};
export const updateSMSTemplatesD = (payload) => {
    return axiosInstancee.put(`${baseUrl}sms-template/update`, payload, {
        headers: {
            "content-type": "application/json; charset=UTF-8",
            authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
        },
    });
};