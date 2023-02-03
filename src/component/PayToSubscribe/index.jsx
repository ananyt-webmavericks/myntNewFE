import { Card, CardContent, Grid, Checkbox } from "@mui/material";
import React, { useState, useEffect } from "react";
import '../../css/PayToSubscribe/payToSubscribe.css'
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { makeStyles } from "@material-ui/styles";
import Enquiry from '../../images/assets/enquiry.png'

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
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);
    const classes = useStyles();
    const theme = useTheme();
   
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleSubmit =()=>{
      
    }

    useEffect(() => {

        if (ratio < 700) {

            setGridxsFirst(1)
            setgridxsSecond(12)
        }

    }, [])
    return (
        <div className="pay-to-subscribe-container">
            <span className="get-started-heading">Subscribe to MildCares - GynoCup</span>
            <Card className="card-pay-main-section">
                <CardContent>
                    <Grid container spacing={gridxsFirst}>

                        <Grid item xs={gridxsSecond}>
                            <span className="pay-amount-label">Amount</span>
                            <div className="verifyAddress-input" style={gridxsFirst === 1 ? { width: '100%' } : { width: '90%' }}>
                                <input type="text" placeholder="₹25,000" className="verifyAddress-input-section" />
                            </div>
                            <div className="chips-pay-to-subscribe-cointainer">
                                <div className="particular-mentioned-chip-pay">+ ₹5,000</div>
                                <div className="particular-mentioned-chip-pay">+ ₹10,000</div>
                                <div className="particular-mentioned-chip-pay">+ ₹15,000</div>
                            </div>
                            <span className="pay-amount-heading">Subscription Benefits</span>
                            <Card className="secondary-card-pay-section">
                                <CardContent>
                                    <span className="pay-amount-label">Subscribe for</span>
                                    <div className="pay-amount-sub-label-head"><span style={{ color: '#EBB429' }}>₹5,000 </span>or more</div>
                                </CardContent>
                                <hr />
                                <CardContent>
                                    <span className="pay-amount-label">Get Rewards</span>
                                    <div className="pay-amount-sub-label-head" style={{ marginBottom: '10px' }}>Discount on MildCares Products</div>
                                    <span className="pay-amount-label">20% off on products for Mynt Community</span>
                                </CardContent>
                            </Card>
                            <Card className="secondary-card-pay-section">
                                <CardContent>
                                    <span className="pay-amount-label">Subscribe for</span>
                                    <div className="pay-amount-sub-label-head"><span style={{ color: '#EBB429' }}>₹20,000 </span>or more</div>
                                </CardContent>
                                <hr />
                                <CardContent>
                                    <span className="pay-amount-label">Get Rewards</span>
                                    <div className="pay-amount-sub-label-head" style={{ marginBottom: '10px' }}>Discount on MildCares Products</div>
                                    <span className="pay-amount-label">30% off on products for Mynt Community</span>
                                </CardContent>
                            </Card>
                            <Card className="secondary-card-pay-section">
                                <CardContent>
                                    <span className="pay-amount-label">Subscribe for</span>
                                    <div className="pay-amount-sub-label-head"><span style={{ color: '#EBB429' }}>₹30,000 </span>or more</div>
                                </CardContent>
                                <hr />
                                <CardContent>
                                    <span className="pay-amount-label">Get Rewards</span>
                                    <div className="pay-amount-sub-label-head" style={{ marginBottom: '10px' }}>Discount on MildCares Products</div>
                                    <span className="pay-amount-label">40% off on products for Mynt Community</span>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
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
                                        <span style={{ fontSize: '14px', fontWeight: '600' }}>Subscription Amount</span>
                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>₹20,000</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em' }}>
                                        <div style={{ alignItems: 'center', display: 'flex' }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600', marginRight: '5px' }}>Convenience Fee</span>
                                            <img src={Enquiry} width={20} height={20} alt="" />
                                        </div>

                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>₹400</span>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em', marginBottom: '1em' }}>
                                        <div style={{ alignItems: 'center', display: 'flex' }}>
                                            <span style={{ fontSize: '14px', fontWeight: '600', marginRight: '5px' }}>GST</span>
                                            <img src={Enquiry} width={20} height={20} alt="" />
                                        </div>
                                        <span style={{ fontSize: '16px', fontWeight: '600' }}>₹72</span>
                                    </div>
                                    <hr />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1em' }}>
                                        <span style={{ fontSize: '18px', fontWeight: '600' }}>Total</span>
                                        <span style={{ fontSize: '18px', fontWeight: '600' }}>₹20,472</span>
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
                            <button onClick={handleSubmit} className="submit-btn-startup kyc" style={{ maxWidth: '100%' }}>Pay Online</button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </div>
    )
}