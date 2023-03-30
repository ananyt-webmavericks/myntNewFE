import * as Yup from 'yup';

const PressValSchema = Yup.object({
    user_id: Yup
        .number()
        .typeError("Id must be a number!")
        .required("Name is required!"),
    title: Yup
        .string()
        .required("Title is required!"),
    link: Yup
        .string()
        .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Enter correct url!'
        )
        .required("Link is required!"),
    description: Yup
        .string()
        .required("Description is required!"),
    banner: Yup
        .string()
        .required("Description is required!"),
});

export default PressValSchema;