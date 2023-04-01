import * as Yup from 'yup';

const PitchValSchema = Yup.object({
    youtube_link:
        Yup
            .string()
            .required("Youtube link is required!"),
    ama_date:
        Yup
            .string()
            .required("AMA data is required!"),
    ama_meet_link:
        Yup
            .string()
            .required("AMA meet link is required!"),
    ama_youtube_video:
        Yup
            .string()
            .required("AMA youtube vide link is required!"),
    pitch:
        Yup
            .string()
            .required("Pitch is required!"),
});

export default PitchValSchema;  