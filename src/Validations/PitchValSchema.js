import * as Yup from 'yup';

const PitchValSchema = Yup.object({
    pitch:
        Yup
            .string()
            .required("Pitch is required!"),
});

export default PitchValSchema;  