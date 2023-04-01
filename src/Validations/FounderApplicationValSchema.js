import * as Yup from 'yup';

const FounderApplicationValSchema = Yup.object({
    // company_name: '',
    // company_email: "",
    // founder_linked_in_profile: "",
    // registered_company_name: "",
    // company_linkedIn_page: "",
    // website_url: "",
    // prev_fundraising_rounds: "",
    // product_description: "",
    // traction_description: "",
    // revenue_description: "",
    // reason_for_community_round: "",
    // reason_for_mynt: "",
    // existing_commitments: "",
    name:
        Yup
            .string()
            .matches(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/, 'Please enter full name!')
            .test('two-part-name', 'Full name must have at least two parts', (value) => {
                if (value) {
                    const parts = value.split(' ');
                    return parts.length >= 2;
                }
                return false;
            })
            .required("Your name is required!"),

    company_email:
        Yup
            .string()
            .required("Email is required!"),
    company_logo:
        Yup
            .string()
            .required("Logo is required!"),
    founder_linked_in_profile:
        Yup
            .string()
            .required("Linkedin url is required!"),
    company_name:
        Yup
            .string()
            .required("Registered company name is required!"),
    company_linked_in_profile:
        Yup
            .string()
            .required("company's linkedin page url is required!"),
    website_url:
        Yup
            .string()
            .required("Website url is required!"),
    previous_funding:
        Yup
            .string()
            .required("previous fund raising round is required!"),
    product_description:
        Yup
            .string()
            .required("Product description is required!"),
    traction_description:
        Yup
            .string()
            .required("Traction is required!"),
    revenue:
        Yup
            .string()
            .required("Revenue description is required!"),
    reason_for_community_round:
        Yup
            .string()
            .required("Community raise reason is required!"),
    reason_for_mynt:
        Yup
            .string()
            .required("This field is required!"),
    existing_commitments:
        Yup
            .string()
            .required("This field is required!"),
    company_pitch:
        Yup
            .string()
            .required("This field is required!"),


    // is_fund_raise: false,
    // is_growth_hack: false,
    // is_tech_p_dev: false,
    // is_ivestor_readiness: false,
    // is_finan_advisory: false,
    // is_legal_advisory: false


    is_fund_raise:
        Yup
            .boolean(),
    is_growth_hack:
        Yup
            .boolean(),
    is_tech_p_dev:
        Yup
            .boolean(),
    is_ivestor_readiness:
        Yup
            .boolean(),
    is_finan_advisory:
        Yup
            .boolean(),
    is_legal_advisory:
        Yup
            .boolean(),

});

export default FounderApplicationValSchema;