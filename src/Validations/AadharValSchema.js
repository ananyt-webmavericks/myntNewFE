import * as Yup from 'yup';

const AadharValSchema = Yup.object({
    user_id:
        Yup
            .number()
            .typeError("Must be a number")
            .required("This field is required!"),
    aadhaar_card_number:
        Yup
            .string()
            .required("Aadhar number is required!"),
});

export default AadharValSchema;