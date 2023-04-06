import * as Yup from 'yup';

const PayToSubscribeValSchema = Yup.object({
    amount:
        Yup
            .number()
            .min(100, "Minimum amount at least 100")
            .typeError("Please enter amount only")
            .required("Please enter amount!"),
});

export default PayToSubscribeValSchema;