import * as Yup from 'yup';

const createPayToSubscribeValSchema = (minAmount) => {
    return Yup.object({
        amount:
            Yup
                .number()
                .min(minAmount, `Minimum amount at least ${minAmount}`)
                .typeError("Please enter amount only")
                .required("Please enter amount!"),
    });
};
export default createPayToSubscribeValSchema;