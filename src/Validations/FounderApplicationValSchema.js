import * as Yup from 'yup';

const FounderApplicationValSchema = Yup.object({
    // company_name: '',
    // company_email: "",
    // founder_linkedIn_url: "",
    // registered_company_name: "",
    // company_linkedIn_page: "",
    // website_url: "",
    // prev_fundraising_rounds: "",
    // product_description: "",
    // traction_description: "",
    // revenue_description: "",
    // community_raise_reason: "",
    // right_invest_thinking: "",
    // existing_commitments: "",
    company_name:
        Yup
            .string()
            .required("Name is required!"),

    company_email:
        Yup
            .string()
            .required("Name is required!"),
    founder_linkedIn_url:
        Yup
            .string()
            .required("Name is required!"),
    registered_company_name:
        Yup
            .string()
            .required("Name is required!"),
    company_linkedIn_page:
        Yup
            .string()
            .required("Name is required!"),
    website_url:
        Yup
            .string()
            .required("Name is required!"),
    prev_fundraising_rounds:
        Yup
            .string()
            .required("Name is required!"),
    product_description:
        Yup
            .string()
            .required("Name is required!"),
    traction_description:
        Yup
            .string()
            .required("Name is required!"),
    revenue_description:
        Yup
            .string()
            .required("Name is required!"),
    community_raise_reason:
        Yup
            .string()
            .required("Name is required!"),
    right_invest_thinking:
        Yup
            .string()
            .required("Name is required!"),
    existing_commitments:
        Yup
            .string()
            .required("Name is required!"),

});

export default FounderApplicationValSchema;