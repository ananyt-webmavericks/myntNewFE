import { Card, CardContent, Grid, Checkbox, Tooltip } from "@mui/material";
import React, { useState, useEffect } from "react";
import '../../css/PayToSubscribe/payToSubscribe.css'
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/styles";
import Enquiry from '../../images/assets/enquiry.png'
import { useLocation, useSearchParams } from "react-router-dom";
import CompanyServices from "../../service/Company";
import { useFormik } from "formik";
import PayToSubscribeValSchema from "../../Validations/PayToSubscribeValSchema";
import { authAxios } from "../../service/Auth-header";
import { Base_Url } from "../../Utils/Configurable";
import { useSelector } from "react-redux";
import PayOfflineModal from "../PayOfflineModal/PayOfflineModal";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '30%',

        },
    },
};
const names = [
    '#JSJSDNJSD',
    '#REHERWEWD',
    '#EWEKJKDSS',
    '#JHWKKAJBS'
];

const useStyles = makeStyles((theme) => ({
    select: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',

        },
        '& .css-vrp7az-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            background: '#F4F4F4',
            padding: '9px',
            borderRadius: '5px'
        },
        width: '100%',
        height: '32px',


    },

}));

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        textAlign: 'left'
    };
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
export default function PayToSubscribeMain() {
    const [personName, setPersonName] = React.useState([]);
    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [openOfflineModal, setOpenOfflineModal] = useState(false)
    const handleClose = () => { setOpenOfflineModal(false) }
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const [rewards, setRewards] = useState([])
    const ratio = parseInt(window.innerWidth);
    const classes = useStyles();
    const theme = useTheme();
    const location = useLocation()
    const [paymentSessionId, setPaymentSessionId] = useState(null)
    const { userData } = useSelector(state => state.loginData)
    console.log("location", location.state)
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            amount: '',
        },

        validationSchema: PayToSubscribeValSchema,

        onSubmit: (values) => handleSubmit(values)
    });

    const handleSubmit = async (vals) => {
        console.log(vals)
        const values = {
            user_id: userData.id,
            campaign_id: location.state?.campaignId,
            amount: vals.amount,
            total_amount: Math.floor(vals.amount + (vals.amount * 2 / 100) + ((18 / 100) * vals.amount))
        }
        const { data: { data } } = await authAxios.post(`${Base_Url}/api/payment/create-order`, values)
        const cf = new window.Cashfree(data.payment_session_id);
        cf.redirect();
    }

    useEffect(() => {
        CompanyServices.getRewardByCampaingID(location.state?.campaignId).then(res => {
            console.log("rewards = ", res.data)
            if (res.status === 200 || res.status === 201) {
                setRewards(res.data)
            } else {
                setRewards([])
            }
        })
        if (ratio < 700) {
            setGridxsFirst(1)
            setgridxsSecond(12)
        }
    }, [])



    return (
        <>
            <div className="pay-to-subscribe-container">
                <span className="get-started-heading payment-section-heading">Enroll To {location.state?.companyName}</span>
                <Card className="card-pay-main-section">
                    <CardContent>
                        <Grid className="payment-card-wrapper" style={{ width: "100%", marginLeft: 0, padding: 16 }} container spacing={gridxsFirst}>

                            <Grid className="payment-card" style={{ padding: 0 }} item xs={gridxsSecond}>
                                <span className="pay-amount-label">Amount</span>

                                <form onSubmit={formik.handleSubmit}>
                                    <div className="payment-input" style={gridxsFirst === 1 ? { width: '100%' } : { width: '90%' }}>
                                        <input
                                            name="amount"
                                            value={formik.values.amount}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            type="number"
                                            placeholder="Eg. ₹25,000"
                                            style={{ WebkitAppearance: "none" }} className="verifyAddress-input-section" />
                                        {formik.touched.amount && <div className="raise-err-text" style={{ marginTop: "2px" }}>{formik.errors.amount}</div>}
                                    </div>
                                </form>

                                <div className="chips-pay-to-subscribe-cointainer">
                                    <div
                                        onClick={e => formik.setFieldValue("amount", 5000)}
                                        className="particular-mentioned-chip-pay">+ ₹5,000</div>
                                    <div
                                        onClick={e => formik.setFieldValue("amount", 10000)}
                                        className="particular-mentioned-chip-pay">+ ₹10,000</div>
                                    <div
                                        onClick={e => formik.setFieldValue("amount", 15000)}
                                        className="particular-mentioned-chip-pay">+ ₹15,000</div>
                                </div>
                                {rewards.length > 0 && <span className="pay-amount-heading">Enrollment Benefits</span>}
                                {
                                    rewards?.map((item, index) => <Card key={index} className="secondary-card-pay-section">
                                        <CardContent>
                                            <span className="pay-amount-label">Enroll for</span>
                                            <div className="pay-amount-sub-label-head"><span style={{ color: '#EBB429' }}>₹{item.amount} </span>or more</div>
                                        </CardContent>
                                        <hr />
                                        <CardContent>
                                            <span className="pay-amount-label">Get Rewards</span>
                                            <div className="pay-amount-sub-label-head" style={{ marginBottom: '10px' }}>Discount on {location.state?.companyName} Products</div>
                                            <span className="pay-amount-label">{item.discounted_price}% off on products for Mynt Community</span>
                                        </CardContent>
                                    </Card>
                                    )
                                }

                            </Grid>
                            <Grid className="payment-card" style={{ padding: 0 }} item xs={gridxsSecond}>
                                <span className="pay-amount-label">Have a Coupon Code?</span>
                                <div style={{ width: '100%', marginTop: '1.5em' }} className="dropdown-container-live-deals">
                                    <Select
                                        className={classes.select}
                                        // multiple
                                        variant="standard"
                                        sx={{ textAlign: 'left', fontStyle: 'normal', background: 'none', height: '42px' }}
                                        displayEmpty
                                        value={personName}
                                        onChange={handleChange}
                                        input={<OutlinedInput />}
                                        renderValue={(selected) => {
                                            if (selected.length === 0) {
                                                return <span>Coupon Code</span>;
                                            }

                                            return selected.join(', ');
                                        }}
                                        MenuProps={MenuProps}

                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem disabled value="">
                                            <em>Coupon Code</em>
                                        </MenuItem>
                                        {names.map((name) => (
                                            <MenuItem
                                                key={name}
                                                value={name}
                                                style={getStyles(name, personName, theme)}
                                            >
                                                {name}
                                            </MenuItem>
                                        ))}
                                    </Select>

                                </div>
                                <Card className="secondary-card-pay-section second">
                                    <CardContent>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em' }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600' }}>Enrollment Amount</span>
                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>₹{formik.values.amount ? formik.values.amount : 0}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em' }}>
                                            <div style={{ alignItems: 'center', display: 'flex' }}>
                                                <span style={{ fontSize: '14px', fontWeight: '600', marginRight: '5px' }}>Convenience Fee</span>
                                                <Tooltip title="A convenience fee of 2% is charged by Mynt for sourcing deals and maintaining the platform"><img src={Enquiry} width={20} height={20} alt="" /></Tooltip>
                                            </div>

                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>{formik.values.amount ? formik.values.amount * 2 / 100 : 0}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em', marginBottom: '1em' }}>
                                            <div style={{ alignItems: 'center', display: 'flex' }}>
                                                <span style={{ fontSize: '14px', fontWeight: '600', marginRight: '5px' }}>GST</span>
                                                <Tooltip title="GST is applicable at 18% of the convenience Fee."><img src={Enquiry} width={20} height={20} alt="" /></Tooltip>
                                            </div>
                                            <span style={{ fontSize: '16px', fontWeight: '600' }}>₹{(18 / 100) * formik.values.amount}</span>
                                        </div>
                                        <hr />
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em' }}>
                                            <span style={{ fontSize: '18px', fontWeight: '600' }}>Total</span>
                                            <span style={{ fontSize: '18px', fontWeight: '600' }}>₹{formik.values.amount * 2 / 100 + ((18 / 100) * formik.values.amount) + formik.values.amount}</span>
                                        </div>
                                    </CardContent>

                                </Card>

                                <div className="aggrement-pay-subscribe-container">
                                    <Checkbox
                                        {...label}
                                        defaultChecked
                                        sx={{
                                            color: '#F8DA36',
                                            '&.Mui-checked': {
                                                color: '#F8DA36',
                                            },
                                        }}
                                    />
                                    <div>I agree to the<span style={{ color: '#EBB429' }}> terms of use </span>and have read and understand the<span style={{ color: '#EBB429' }}> Privacy Policy</span></div>
                                </div>
                                <div className="aggrement-pay-subscribe-container">
                                    <Checkbox
                                        {...label}
                                        defaultChecked
                                        sx={{
                                            color: '#F8DA36',
                                            '&.Mui-checked': {
                                                color: '#F8DA36',
                                            },
                                        }}
                                    />
                                    <div>I bear to undertake the<span style={{ color: '#EBB429' }}> Risk </span>In Invesment</div>
                                </div>
                                <button onClick={() => formik.handleSubmit()} className="payment-btn" style={{ maxWidth: '100%', marginLeft: 0 }}>Pay Online</button>
                                {location?.state?.compayData?.deal_terms?.enable_offline && <button onClick={() => { setOpenOfflineModal(true) }} className="payment-btn" style={{ maxWidth: '100%', marginLeft: 0 }}>Pay Offline</button>}
                                {/* <button className="submit-btn-startup kyc" style={{ maxWidth: '100%', marginTop: "12px" }}>Pay Offline</button> */}
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </div>
            <PayOfflineModal show={openOfflineModal} handleClose={handleClose} />
        </>
    )
}