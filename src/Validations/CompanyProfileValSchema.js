import * as Yup from 'yup';

const CompanyProfileValSchema = Yup.object({
    // country: '',
    // state: '',
    // city: '',
    // pincode: '',
    // company_address: '',

    // website_url: '',
    // facebook_link: '',
    // instagram_link: '',
    // //linkedin link required here

    // legal_name: '',
    // cin: '',
    // date_of_incorporation: '',
    // incorporation_type: '',

    //invested_so_far,
    country: Yup
        .string()
        .required("Country is required!"),
    state: Yup
        .string()
        .required("State is required!"),
    city: Yup
        .string()
        .required("City is required!"),
    pincode: Yup
        .number()
        .typeError("Pincode must be a number!")
        .required("Pincode is required!"),
    company_address: Yup
        .string()
        .required("Address is required!"),
    website_url: Yup
        .string()
        .required("Website is required!")
        .matches(
            /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            "Invalid website URL format!"
        ),
    facebook_link: Yup
        .string()
        .required("Facebook link is required!")
        .matches(
            /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            "Invalid Facebook link format!"
        ),
    instagram_link: Yup
        .string()
        .required("Instagram link is required!")
        .matches(
            /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            "Invalid Instagram link format!"
        ),
    company_linked_in_profile: Yup
        .string()
        .required("LinkedIn link is required!")
        .matches(
            /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/,
            "Invalid LinkedIn link format!"
        ),
    legal_name: Yup
        .string()
        .required("Legal name is required!"),
    cin: Yup
        .string()
        // .typeError("cin must be a number!")
        .required("CIN number is required!"),
    date_of_incorporation: Yup
        .string()
        .required("Date of incorporation is required!"),
    incorporation_type: Yup
        .string()
        .required("Incorporation type is required!"),
    invested_so_far: Yup
        .number()
        .typeError("investment must be a number!")
        .required("This field is required!"),
    sector: Yup
        .string()
        .required("Sector is required!"),
    number_of_employees: Yup
        .number()
        .typeError("employee count must be a number!")
        .required("No. of Employees is required!"),

});

export default CompanyProfileValSchema;