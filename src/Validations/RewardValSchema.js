import * as Yup from 'yup';

const RewardValSchema = Yup.object({
    user_id: Yup
        .number()
        .typeError("Id must be a number!")
        .required("Name is required!"),
    amount: Yup
        .number()
        .typeError("Amount must be a number!")
        .required("Amount is required!"),
    product_name: Yup
        .string()
        .required("Product name is required!"),
    description: Yup
        .string()
        .required("Product description is required!"),
});

export default RewardValSchema;