import * as Yup from 'yup';

const FAQsValSchema = Yup.object({
    campaign_id:
        Yup
            .number()
            .typeError("Must be a number")
            .required("This field is required!"),
    question:
        Yup
            .string()
            .required("Question is required!"),
    answer:
        Yup
            .string()
            .required("Answer is required!"),
});

export default FAQsValSchema;