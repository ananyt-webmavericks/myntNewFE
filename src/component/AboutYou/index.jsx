import React ,{useState , useEffect} from "react";
import '../../css/AboutYou/aboutYou.css'
import { Card, CardContent, Button } from "@mui/material";
import MapLoc from '../../images/assets/mapLoc.png'
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeStyles } from "@material-ui/styles";
import Residency from '../../images/assets/residency.png';
import Nationality from '../../images/assets/nationality.png';
import UserServices from "../../service/UserService";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../Redux/actions/auth";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,

        },
    },
};
const nationalityList = [
    'Afghan',
    'Albanian',
    'Algerian',
    'American',
    'Andorran',
    'Angolan',
    'Antiguans',
    'Argentinean',
    'Armenian',
    'Australian',
    'Austrian',
    'Azerbaijani',
    'Bahamian',
    'Bahraini',
    'Bangladeshi',
    'Barbadian',
    'Barbudans',
    'Batswana',
    'Belarusian',
    'Belgian',
    'Belizean',
    'Beninese',
    'Bhutanese',
    'Bolivian',
    'Bosnian',
    'Brazilian',
    'British',
    'Bruneian',
    'Bulgarian',
    'Burkinabe',
    'Burmese',
    'Burundian',
    'Cambodian',
    'Cameroonian',
    'Canadian',
    'Cape verdean',
    'Central african',
    'Chadian',
    'Chilean',
    'Chinese',
    'Colombian',
    'Comoran',
    'Congolese',
    'Costa rican',
    'Croatian',
    'Cuban',
    'Cypriot',
    'Czech',
    'Danish',
    'Djibouti',
    'Dominican',
    'Dutch',
    'East timorese',
    'Ecuadorean',
    'Egyptian',
    'Emirian',
    'Equatorial guinean',
    'Eritrean',
    'Estonian',
    'Ethiopian',
    'Fijian',
    'Filipino',
    'Finnish',
    'French',
    'Gabonese',
    'Gambian',
    'Georgian',
    'German',
    'Ghanaian',
    'Greek',
    'Grenadian',
    'Guatemalan',
    'Guinea-bissauan',
    'Guinean',
    'Guyanese',
    'haitian',
    'Herzegovinian',
    'Honduran',
    'Hungarian',
    'Icelander',
    'Indian',
    'Indonesian',
    'Iranian',
    'Iraqi',
    'Irish',
    'Israeli',
    'Italian',
    'Ivorian',
    'Jamaican',
    'Japanese',
    'Jordanian',
    'Kazakhstani',
    'Kenyan',
    'Kittian and nevisian',
    'Kuwaiti',
    'Kyrgyz',
    'Laotian',
    'Latvian',
    'Lebanese',
    'Liberian',
    'Libyan',
    'Liechtensteiner',
    'Lithuanian',
    'Luxembourger',
    'Macedonian',
    'Malagasy',
    'Malawian',
    'Malaysian',
    'Maldivan',
    'Malian',
    'Maltese',
    'Marshallese',
    'Mauritanian',
    'Mauritian',
    'Mexican',
    'Micronesian',
    'Moldovan',
    'Monacan',
    'Mongolian',
    'Moroccan',
    'Mosotho',
    'Motswana',
    'Mozambican',
    'namibian',
    'Nauruan',
    'Nepalese',
    'New zealander',
    'Ni-vanuatu',
    'Nicaraguan',
    'Nigerien',
    'North korean',
    'Northern irish',
    'Norwegian',
    'Omani',
    'Pakistani',
    'Palauan',
    'Panamanian',
    'Papua new guinean',
    'Paraguayan',
    'Peruvian',
    'Polish',
    'Portuguese',
    'Qatari',
    'Romanian',
    'Russian',
    'Rwandan',
    'Saint lucian',
    'Salvadoran',
    'Samoan',
    'San marinese',
    'Sao tomean',
    'Saudi',
    'Scottish',
    'Senegalese',
    'Serbian',
    'Seychellois',
    'Sierra leonean',
    'Singaporean',
    'Slovakian',
    'Slovenian',
    'Solomon islander',
    'Somali',
    'South african',
    'South korean',
    'Spanish',
    'Sri lankan',
    'Sudanese',
    'Surinamer',
    'Swazi',
    'Swedish',
    'Swiss',
    'Syrian',
    'Taiwanese',
    'Tajik',
    'Tanzanian',
    'Thai',
    'Togolese',
    'Tongan',
    'Trinidadian or tobagonian',
    'Tunisian',
    'Turkish',
    'Tuvaluan',
    'Ugandan',
    'Ukrainian',
    'Uruguayan',
    'Uzbekistani',
    'Venezuelan',
    'Vietnamese',
    'Welsh',
    'Yemenite',
    'Zambian',
    'Zimbabwean',
]
const countryList = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas (the)",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia (Plurinational State of)",
    "Bonaire, Sint Eustatius and Saba",
    "Bosnia and Herzegovina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory (the)",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cayman Islands (the)",
    "Central African Republic (the)",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands (the)",
    "Colombia",
    "Comoros (the)",
    "Congo (the Democratic Republic of the)",
    "Congo (the)",
    "Cook Islands (the)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Curaçao",
    "Cyprus",
    "Czechia",
    "Côte d'Ivoire",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic (the)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Falkland Islands (the) [Malvinas]",
    "Faroe Islands (the)",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories (the)",
    "Gabon",
    "Gambia (the)",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guernsey",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard Island and McDonald Islands",
    "Holy See (the)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Isle of Man",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jersey",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea (the Democratic People's Republic of)",
    "Korea (the Republic of)",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People's Democratic Republic (the)",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macao",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands (the)",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia (Federated States of)",
    "Moldova (the Republic of)",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands (the)",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger (the)",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands (the)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine, State of",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines (the)",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Republic of North Macedonia",
    "Romania",
    "Russian Federation (the)",
    "Rwanda",
    "Réunion",
    "Saint Barthélemy",
    "Saint Helena, Ascension and Tristan da Cunha",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Martin (French part)",
    "Saint Pierre and Miquelon",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Sint Maarten (Dutch part)",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan (the)",
    "Suriname",
    "Svalbard and Jan Mayen",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands (the)",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (the)",
    "United Kingdom of Great Britain and Northern Ireland (the)",
    "United States Minor Outlying Islands (the)",
    "United States of America (the)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela (Bolivarian Republic of)",
    "Viet Nam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna",
    "Western Sahara",
    "Yemen",
    "Zambia",
    "Zimbabwe",
    "Åland Islands"
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        textAlign: 'left'
    };
}

const useStyles = makeStyles((theme) => ({
    select: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',

        },
        '& .css-vrp7az-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            background: 'none'
        },
        width: '100%',
        height: '42px'
    },

}));

export default function AboutYouMain() {
    const theme = useTheme();
    const [nationality, setNationality] = React.useState([]);
    const [country, setCountry] = React.useState([]);
    const [showMessage, setShowMessage] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch()
    const  {userData}  = useSelector((state)=> state.loginData)
    const navigate = useNavigate()

    console.log(userData)

    const handleChangeNationality = (event) => {
        const {
            target: { value },
        } = event;
        setNationality(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleChangeCountry = (event) => {
        const {
            target: { value },
        } = event;
        setCountry(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const notify = (data) => {
        toast.error(data)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(nationality.length===0 && country.length===0){
            notify("Please choose both fields !!")
        }else if(nationality.length===0){
            notify("Please choose nationality !!")
        }else if(country.length===0){
            notify("Please choose country !!")
        }else{
            try {
                UserServices.UpdateUser({user_id:userData.id , email:userData.email, nationality:nationality.toString() ,country:country.toString() }).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 200) {
                            dispatch(userLoginAction({...userData , nationality:nationality.toString() ,country:country.toString()} ))
                            navigate('/become-investor')
                        }
                        else{
                            setCountry([])
                            country([])
                        }
    
                    })
            }
            catch {
                notify("Try after few minutes !!")
            }
        }
        
    }

    useEffect(() => {
        
        if(country.includes('India') ||country.length === 0 ){
            setShowMessage(false)
        }
        else{
            setShowMessage(true)
        }
    

    }, [country])


    
    
    return (
        <div className="about-you-container">
            <div className="get-started-section">
                <span className="get-started-heading">Tell us a little about you</span>
                <Card className="card-get-started">
                    <CardContent>
                        <div className="otp-verify-container">
                            <img src={MapLoc} className="map-location-about-you"></img>
                        </div>
                        <div className="about-you-dropdown-container">
                            <img src={Nationality} width={14} height={14}></img>
                            <Select
                                className={classes.select}
                                // multiple
                                variant="standard"
                                sx={{ textAlign: 'left', fontStyle: 'normal', background: 'none', height: '42px' }}
                                displayEmpty
                                value={nationality}
                                onChange={handleChangeNationality}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <span>Nationality</span>;
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}

                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>Nationality</em>
                                </MenuItem>
                                {nationalityList.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, nationality, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>

                        </div>
                        <div className="about-you-dropdown-container" >
                            <img src={Residency} width={15} height={18}></img>
                            <Select
                                className={classes.select}
                                // multiple
                                variant="standard"
                                sx={{ textAlign: 'left', fontStyle: 'normal', background: 'none', height: '42px' }}
                                displayEmpty
                                value={country}
                                onChange={handleChangeCountry}
                                input={<OutlinedInput />}
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <span>Country of Residency</span>;
                                    }

                                    return selected.join(', ');
                                }}
                                MenuProps={MenuProps}

                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem disabled value="">
                                    <em>Country of Residency</em>
                                </MenuItem>
                                {countryList.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, country, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>

                        </div>
                        <button className="sign-up-btn" onClick={handleSubmit}>Next</button>
                        {showMessage &&
                            <div style={{display:'grid' , fontSize:'12px' , marginTop:'10px'}}>
                                <span style={{marginBottom:'10px'}}>Getting ready to assist you shortly</span>
                                <span>Myntinvest is currently available only for Resident Indians. We are working on making it available for Non resident Indians soon</span>
                            </div>
                        }

                    </CardContent>
                </Card>
            </div>
        </div>
    )
}