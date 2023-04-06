import * as Yup from 'yup';

const hightLightValSchema = Yup.object({
    highlight1:
        Yup
            .string()
            .required("Highlight is required!"),
    highlight2:
        Yup
            .string()
            .required("Highlight is required!"),
    highlight3:
        Yup
            .string()
            .required("Highlight is required!"),
    highlight4:
        Yup
            .string()
            .required("Highlight is required!"),
});

export default hightLightValSchema;