import * as Yup from 'yup';

const GetStartedValSchema = Yup.object({

    // first_name: '',
    // last_name: '',
    // email: '',
    // social_login: false,
    // user_type: "INVESTOR"

    first_name:
        Yup
            .string()
            .required("First name is required!"),

    last_name:
        Yup
            .string()
            .required("Last name is required!"),
    email:
        Yup
            .string()
            .email('Enter a valid email')
            .required("Email is required!"),
    social_login:
        Yup
            .boolean()
            .required("First name is required!"),
    user_type:
        Yup
            .string()
            .required("First name is required!"),

});

export default GetStartedValSchema;