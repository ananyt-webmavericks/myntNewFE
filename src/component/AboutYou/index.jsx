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
    'afghan',
    'albanian',
    'algerian',
    'american',
    'andorran',
    'angolan',
    'antiguans',
    'argentinean',
    'armenian',
    'australian',
    'austrian',
    'azerbaijani',
    'bahamian',
    'bahraini',
    'bangladeshi',
    'barbadian',
    'barbudans',
    'batswana',
    'belarusian',
    'belgian',
    'belizean',
    'beninese',
    'bhutanese',
    'bolivian',
    'bosnian',
    'brazilian',
    'british',
    'bruneian',
    'bulgarian',
    'burkinabe',
    'burmese',
    'burundian',
    'cambodian',
    'cameroonian',
    'canadian',
    'cape verdean',
    'central african',
    'chadian',
    'chilean',
    'chinese',
    'colombian',
    'comoran',
    'congolese',
    'costa rican',
    'croatian',
    'cuban',
    'cypriot',
    'czech',
    'danish',
    'djibouti',
    'dominican',
    'dutch',
    'east timorese',
    'ecuadorean',
    'egyptian',
    'emirian',
    'equatorial guinean',
    'eritrean',
    'estonian',
    'ethiopian',
    'fijian',
    'filipino',
    'finnish',
    'french',
    'gabonese',
    'gambian',
    'georgian',
    'german',
    'ghanaian',
    'greek',
    'grenadian',
    'guatemalan',
    'guinea-bissauan',
    'guinean',
    'guyanese',
    'haitian',
    'herzegovinian',
    'honduran',
    'hungarian',
    'icelander',
    'indian',
    'indonesian',
    'iranian',
    'iraqi',
    'irish',
    'israeli',
    'italian',
    'ivorian',
    'jamaican',
    'japanese',
    'jordanian',
    'kazakhstani',
    'kenyan',
    'kittian and nevisian',
    'kuwaiti',
    'kyrgyz',
    'laotian',
    'latvian',
    'lebanese',
    'liberian',
    'libyan',
    'liechtensteiner',
    'lithuanian',
    'luxembourger',
    'macedonian',
    'malagasy',
    'malawian',
    'malaysian',
    'maldivan',
    'malian',
    'maltese',
    'marshallese',
    'mauritanian',
    'mauritian',
    'mexican',
    'micronesian',
    'moldovan',
    'monacan',
    'mongolian',
    'moroccan',
    'mosotho',
    'motswana',
    'mozambican',
    'namibian',
    'nauruan',
    'nepalese',
    'new zealander',
    'ni-vanuatu',
    'nicaraguan',
    'nigerien',
    'north korean',
    'northern irish',
    'norwegian',
    'omani',
    'pakistani',
    'palauan',
    'panamanian',
    'papua new guinean',
    'paraguayan',
    'peruvian',
    'polish',
    'portuguese',
    'qatari',
    'romanian',
    'russian',
    'rwandan',
    'saint lucian',
    'salvadoran',
    'samoan',
    'san marinese',
    'sao tomean',
    'saudi',
    'scottish',
    'senegalese',
    'serbian',
    'seychellois',
    'sierra leonean',
    'singaporean',
    'slovakian',
    'slovenian',
    'solomon islander',
    'somali',
    'south african',
    'south korean',
    'spanish',
    'sri lankan',
    'sudanese',
    'surinamer',
    'swazi',
    'swedish',
    'swiss',
    'syrian',
    'taiwanese',
    'tajik',
    'tanzanian',
    'thai',
    'togolese',
    'tongan',
    'trinidadian or tobagonian',
    'tunisian',
    'turkish',
    'tuvaluan',
    'ugandan',
    'ukrainian',
    'uruguayan',
    'uzbekistani',
    'venezuelan',
    'vietnamese',
    'welsh',
    'yemenite',
    'zambian',
    'zimbabwean',
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

    useEffect(() => {
        
        if(country.includes('India') ||country.length === 0 ){
            setShowMessage(false)
        }
        else{
            setShowMessage(true)
        }
    

    }, [country])
    
    console.log(country.length)
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
                        <button className="sign-up-btn">Next</button>
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