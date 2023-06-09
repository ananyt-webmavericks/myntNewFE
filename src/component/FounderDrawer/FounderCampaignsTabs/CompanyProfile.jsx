import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import {
  Box,
  Button,
  FormGroup,
  Grid,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { createMuiTheme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import "../../../css/FounderDrawer/Dashboard/GridBox.css";
import MenuIcon from "@mui/icons-material/Menu";
import facebook from "./../../../images/assets/facebook.png";
import instagram from "./../../../images/assets/instagram.png";
import linkedin from "./../../../images/assets/linkedin.png";
import date from "./../../../images/assets/date.png";
import { useFormik } from "formik";
import CompanyProfileValSchema from "../../../Validations/CompanyProfileValSchema";
import CompanyServices from "../../../service/Company";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import country from "./country.json";
import Select, { components } from "react-select";
import states from "./states.json";
import city from "./city.json";

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

// const city = ["Abu Road", "Ahmedabad", "pune", " jaipur"];

const sectors = [
  { label: "sector 1", value: 0 },
  { label: "sector 2", value: 1 },
];
const employees = [
  { label: "1", value: 0 },
  { label: "2", value: 1 },
  { label: "3", value: 2 },
  { label: "4", value: 3 },
  { label: "5", value: 4 },
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const useStyles = makeStyles({
  SaveBtn: {
    height: "3.37rem",
    width: "17.5rem",
  },
  SubmitBnt: {
    height: "3.37rem",
    width: "17.5rem",
    backgroundColor: "#FADF35",
    color: "red",
  },
});
const CompanyProfile = ({ tabChangeFn }) => {
  const navigate = useNavigate();

  const classes = useStyles();
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const [companyData, setCompanyData] = useState({});
  const { userData } = useSelector((state) => state.loginData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaveLoading, setIsSaveLoading] = useState(false);
  const [isSaveClicked, setSavedClicked] = useState(false);
  const [isNextClicked, setNextClicked] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [cityCode, setCityCode] = useState("");
  const [selectSector, setSelectSector] = useState("");
  const [selectEmployees, setSelectEmployees] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const selectStyle = {
    height: "42px",
    background: "#F4F4F4",
    font: "normal normal Poppins !important",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      country: companyData?.country ? companyData?.country : "",
      state: companyData?.state ? companyData?.state : "",
      city: companyData?.city ? companyData?.city : "",
      pincode: companyData?.pincode ? companyData?.pincode : "",
      company_address: companyData?.company_address
        ? companyData?.company_address
        : "",

      website_url: companyData?.website_url ? companyData?.website_url : "",
      facebook_link: companyData?.facebook_link
        ? companyData?.facebook_link
        : "",
      instagram_link: companyData?.instagram_link
        ? companyData?.instagram_link
        : "",
      company_linked_in_profile: companyData?.company_linked_in_profile
        ? companyData?.company_linked_in_profile
        : "",

      legal_name: companyData?.legal_name ? companyData?.legal_name : "",
      cin: companyData?.cin ? companyData?.cin : "",
      date_of_incorporation: companyData?.date_of_incorporation
        ? companyData?.date_of_incorporation
        : "",
      incorporation_type: companyData?.incorporation_type
        ? companyData?.incorporation_type
        : "",

      invested_so_far: companyData?.invested_so_far
        ? companyData?.invested_so_far
        : "",
      sector: companyData?.sector ? companyData?.sector : "",
      number_of_employees: companyData?.number_of_employees
        ? companyData?.number_of_employees
        : "",
    },

    validationSchema: CompanyProfileValSchema,

    onSubmit: (values) => {
      if (isNextClicked) {
        setIsLoading(true);
      }
      if (isSaveClicked) {
        setIsSaveLoading(true);
      }
      CompanyServices.updateCompany({
        ...values,
        company_id: companyData?.id,
      }).then((res) => {
        setIsLoading(false);
        setIsSaveLoading(false);
        console.log(res);
        toast.success("Company details added successfully!", {
          position: "top-right",
          style: {
            borderRadius: "3px",
            background: "green",
            color: "#fff",
          },
        });

        // setTimeout(() => {
        //   if (isSaveClicked) {
        //     navigate("/dashboard-founder/e-signin");
        //   } else {
        //     tabChangeFn(0, 2);
        //   }
        // }, 1000);
        setTimeout(() => {
          if (isNextClicked) {
            tabChangeFn(0, 2);
          }
        }, 1000);
      });
    },
  });

  const getAllCountries = () => {
    return country.map((i) => {
      return { label: i.name, value: i.country_id };
    });
  };

  const setCountryValue = (val) => {
    setCountryCode(val);
    formik.setFieldValue("country", val.label);
  };

  const getAllState = () => {
    if (countryCode?.value) {
      const filteredStates = states.filter(
        (i) => i.country_id === countryCode?.value
      );
      return filteredStates.map((i) => {
        return { label: i.name, value: i.state_code };
      });
    }
  };

  const setStateValue = (val) => {
    setStateCode(val);
    formik.setFieldValue("state", val.label);
  };
  const getAllCity = () => {
    if (stateCode?.value) {
      const filteredStates = city.filter(
        (i) => i.state_code === stateCode?.value
      );
      return filteredStates.map((i) => {
        return { label: i.name, value: i.name };
      });
    }
  };

  const setCityValue = (val) => {
    setCityCode(val);
    formik.setFieldValue("city", val.label);
  };
  const setSectorValue = (val) => {
    setSelectSector(val);
    formik.setFieldValue("sector", val.label);
  };
  const setEmployeesValue = (val) => {
    setSelectEmployees(val);
    formik.setFieldValue("number_of_employees", val.label);
  };

  useEffect(() => {
    return CompanyServices.getCompanyDetailsByFounderId(userData?.id).then(
      (res) => {
        if (res.status === 200) {
          setCompanyData(res.data);

          const c = country.filter((item) => item.name === res.data.country);
          setCountryCode({ label: c?.[0]?.name, value: c?.[0]?.country_id });
          const s = states.filter((item) => item.name === res.data.state);
          setStateCode({ label: s?.[0]?.name, value: s?.[0]?.state_code });
          const cs = city.filter((item) => item.name === res.data.city);
          setCityCode({ label: cs?.[0]?.name, value: cs?.[0]?.state_code });
          const selectsector = sectors.filter(
            (item) => item.label === res.data.sector
          );
          setSelectSector({
            label: selectsector?.[0]?.label,
            value: selectsector?.[0]?.value,
          });
          const selectemployee = employees.filter(
            (item) => item.label === res.data.number_of_employees
          );
          setSelectEmployees({
            label: selectemployee?.[0]?.label,
            value: selectemployee?.[0]?.value,
          });

          localStorage.setItem("company_id", res.data.id);
        }
      }
    );
  }, [userData?.id]);

  return (
    <Container style={{ padding: "0px" }} maxWidth="lg">
      <Box sx={{ marginTop: 4, marginLeft: 2 }} style={{ width: "80%" }}>
        <h3>Company Information</h3>
        <Typography className="companyinformation">
          <p style={{ marginTop: "10px", width: "100%" }}>
            Tell us a little about your company. Applications are usually
            processed within 5 working days.{" "}
          </p>
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Typography className="comp-info-appl-title">Application</Typography>

        <div className="gridParent">
          <Grid item xs={6} md={12}>
            <Box
              sx={{
                p: 2,
                paddingTop: 4.2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr", sm: "1fr 1fr" },
                gap: 2.5,
                width: "100%",
                textAlign: "left",
                fontFamily: "poppins",
              }}
            >
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  value={countryCode}
                  options={getAllCountries() ?? []}
                  placeholder="Select Country"
                  name="country"
                  onChange={(val) => setCountryValue(val)}
                  onBlur={() => formik.setFieldTouched("country", true)}
                  // components={{Input}}
                />
                {formik.touched.country && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.country}
                  </div>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  value={stateCode}
                  options={getAllState() ?? []}
                  placeholder="Select State"
                  name="state"
                  onChange={(val) => setStateValue(val)}
                  onBlur={() => formik.setFieldTouched("state", true)}
                />
                {formik.touched.state && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.state}
                  </div>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={{ height: 42 }}
                  value={cityCode}
                  options={getAllCity() ?? []}
                  placeholder="Select City"
                  name="city"
                  onChange={(val) => setCityValue(val)}
                  onBlur={() => formik.setFieldTouched("city", true)}
                />
                {formik.touched.city && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.city}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="pincode"
                  value={formik.values.pincode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Pin Code*"
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.pincode && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.pincode}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="company_address"
                  value={formik.values.company_address}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your Company Address*"
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.company_address && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.company_address}
                  </div>
                )}
              </FormControl>
            </Box>
          </Grid>
        </div>

        <Typography className="comp-info-appl-title">
          Online Presence
        </Typography>

        <div className="gridParent">
          <Grid item xs={6} md={12}>
            <Box
              sx={{
                p: 2,
                paddingTop: 4.2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr", sm: "1fr 1fr" },
                gap: 2.5,
                width: "492",
                textAlign: "left",
                fontFamily: "poppins",
              }}
            >
              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="website_url"
                  value={formik.values.website_url}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your company website*"
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.website_url && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.website_url}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <div
                  className="input-with-logo"
                  style={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <img src={facebook} alt="facebook-logo" width={30} />
                  </IconButton>
                  <input
                    name="facebook_link"
                    value={formik.values.facebook_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: "none", height: "40px" }}
                    placeholder="Facebook Link"
                    type="text"
                    className="icon-input"
                  />
                </div>
                {formik.touched.facebook_link && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.facebook_link}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <div
                  className="input-with-logo"
                  style={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <img src={instagram} alt="insta-logo" width={30} />
                  </IconButton>
                  <input
                    name="instagram_link"
                    value={formik.values.instagram_link}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: "none", height: "40px" }}
                    placeholder="Instagram Link"
                    type="text"
                    className="icon-input"
                  />
                </div>
                {formik.touched.instagram_link && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.instagram_link}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <div
                  className="input-with-logo"
                  style={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <img src={linkedin} alt="linkedin-logo" width={30} />
                  </IconButton>
                  <input
                    name="company_linked_in_profile"
                    value={formik.values.company_linked_in_profile}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: "none", height: "40px" }}
                    placeholder="Linked In Link"
                    type="text"
                    className="icon-input"
                  />
                </div>
                {formik.touched.company_linked_in_profile && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.company_linked_in_profile}
                  </div>
                )}
              </FormControl>
            </Box>
          </Grid>
        </div>

        <Typography className="comp-info-appl-title">Legal</Typography>

        <div className="gridParent">
          <Grid item xs={6} md={12}>
            <Box
              sx={{
                p: 2,
                paddingTop: 4.2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr", sm: "1fr 1fr" },
                gap: 2.5,
                width: "492",
                textAlign: "left",
                fontFamily: "poppins",
              }}
            >
              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="legal_name"
                  value={formik.values.legal_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter your legal name*"
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.legal_name && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.legal_name}
                  </div>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="cin"
                  value={formik.values.cin}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter CIN Number*"
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.cin && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.cin}
                  </div>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <div
                  className="input-with-logo"
                  style={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <input
                    name="date_of_incorporation"
                    value={formik.values.date_of_incorporation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    style={{ border: "none", height: "40px", paddingLeft: 0 }}
                    placeholder="Date of Incorporation"
                    type="date"
                    className="icon-input"
                  />
                  {/* <IconButton sx={{ p: "10px" }} aria-label="menu">
                    <img src={date} alt="date-logo" width={24} />
                  </IconButton> */}
                </div>
                {formik.touched.date_of_incorporation && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.date_of_incorporation}
                  </div>
                )}
              </FormControl>
              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="incorporation_type"
                  value={formik.values.incorporation_type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="incorporation Type e.g. Private, public etc."
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.incorporation_type && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.incorporation_type}
                  </div>
                )}
              </FormControl>
            </Box>
          </Grid>
        </div>

        <Typography className="comp-info-appl-title">About Company</Typography>

        <div className="gridParent">
          <Grid item xs={6} md={12}>
            <Box
              sx={{
                p: 2,
                paddingTop: 4.2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr", sm: "1fr 1fr" },
                gap: 2.5,
                width: "492",
                textAlign: "left",
                fontFamily: "poppins",
              }}
            >
              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  styles={{ height: 42 }}
                  value={selectSector}
                  options={sectors}
                  placeholder="Select Sector"
                  name="sector"
                  onBlur={formik.handleBlur}
                  onChange={(val) => {
                    setSectorValue(val);
                  }}
                />
                {formik.touched.sector && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.sector}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <input
                  name="invested_so_far"
                  value={formik.values.invested_so_far}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Amount Invested in the business till date *"
                  type="text"
                  className="amount-invested-till-date"
                />
                {formik.touched.invested_so_far && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.invested_so_far}
                  </div>
                )}
              </FormControl>

              <FormControl sx={{ m: 1, width: "100%" }}>
                <Select
                  components={{
                    IndicatorSeparator: () => null,
                  }}
                  value={selectEmployees}
                  options={employees}
                  placeholder="No. of Employees"
                  name="number_of_employees"
                  onBlur={formik.handleBlur}
                  onChange={(val) => {
                    setEmployeesValue(val);
                  }}
                />
                {formik.touched.number_of_employees && (
                  <div className="raise-err-text" style={{ marginTop: "2px" }}>
                    {formik.errors.number_of_employees}
                  </div>
                )}
              </FormControl>
            </Box>
          </Grid>
        </div>

        <div className="buttonsParent">
          <Button
            onClick={() => {
              formik.submitForm();
              setSavedClicked(true);
            }}
            disabled={isSaveLoading === true ? true : false}
            // type="submit"
            style={{ margin: "20px", color: "black" }}
            variant="contained"
            className="comp-prof-button1"
          >
            {isSaveLoading && isSaveClicked ? (
              <CircularProgress
                style={{ color: "black", fontSize: 10, width: 20, height: 20 }}
              />
            ) : (
              "Save"
            )}
          </Button>
          <Button
            disabled={isLoading === true ? true : false}
            onClick={() => {
              formik.submitForm();
              setNextClicked(true);
            }}
            // type="submit"
            style={{ margin: "20px" }}
            variant="contained"
            className="comp-prof-button2"
          >
            {isLoading && isNextClicked ? (
              <CircularProgress
                style={{ color: "white", fontSize: 10, width: 20, height: 20 }}
              />
            ) : (
              "Next"
            )}
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default CompanyProfile;
