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
        .required("Website is required!"),
    facebook_link: Yup
        .string()
        .required("Facebook link is required!"),
    instagram_link: Yup
        .string()
        .required("Instagram link is required!"),
    legal_name: Yup
        .string()
        .required("Legal name is required!"),
    cin: Yup
        .string()
        .required("CIN number is required!"),
    date_of_incorporation: Yup
        .string()
        .required("Date of incorporation is required!"),
    incorporation_type: Yup
        .string()
        .required("Incorporation type is required!"),
    invested_so_far: Yup
        .string()
        .required("This field is required!"),

});

export default CompanyProfileValSchema;