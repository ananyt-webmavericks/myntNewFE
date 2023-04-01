import * as Yup from 'yup';

const PeopleTabValSchema = Yup.object({
    // name: '',
    // position: '',
    // facebook_link: '',
    // instagram_link: '',
    // linked_in_link: '',
    // description: '',
    company_id: Yup
        .number()
        .typeError("Id must be a number!")
        .required("Company id is required!"),
    name: Yup
        .string()
        .required("Name is required!"),
    position: Yup
        .string()
        .required("Position in company is required!"),
    facebook_link: Yup
        .string()
        .required("Facebook link is required!"),
    instagram_link: Yup
        .string("Instagram link is required!")
        .required("Pincode is required!"),
    linked_in_link: Yup
        .string()
        .required("Linked in link is required!"),
    description: Yup
        .string()
        .required("This field is required!"),
    profile_image: Yup
        .string()
        .required("Profile picture is required!"),

});

export default PeopleTabValSchema;