import * as Yup from 'yup';

const RewardValSchema = Yup.object({
    campaign_id: Yup
        .number()
        .typeError("Id must be a number!")
        .required("ID is required!"),
    amount: Yup
        .number()
        .typeError("Amount must be a number!")
        .required("Amount is required!"),
    product_name: Yup
        .string()
        .required("Product name is required!"),
    discounted_price: Yup
        .number()
        .typeError("Discount must be in number!")
        .required("Discount price is required!"),
});

export default RewardValSchema;