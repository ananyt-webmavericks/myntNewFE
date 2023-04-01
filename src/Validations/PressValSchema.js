import * as Yup from 'yup';

const PressValSchema = Yup.object({
    company_id: Yup
        .number()
        .typeError("Id must be a number!")
        .required("Name is required!"),
    title: Yup
        .string()
        .required("Title is required!"),
    link: Yup
        .string()
        .url('Invalid URL')
        .required("Link is required!"),
    description: Yup
        .string()
        .required("Description is required!"),
    banner: Yup
        .string()
        .required("Description is required!"),
});

export default PressValSchema;