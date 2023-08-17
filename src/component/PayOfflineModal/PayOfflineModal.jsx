import * as React from 'react';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Loginlogo from '../../images/assets/loginlogo.png';
import Button from '@mui/material/Button';
import Enquiry from '../../images/assets/enquiry.png'
import { Tooltip } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { toast } from "react-hot-toast";
import { useSelector } from 'react-redux';
import CompanyServices from '../../service/Company';
const initialData = {
    bank_name: "",
    account_name: "",
    account_no: "",
    ifsc_code: "",
    transaction_id: "",
    amount: null
}

const PayOfflineModal = (props) => {
    const navigate = useNavigate()
    const [value, setValue] = useState(initialData)
    const ratio = parseInt(window.innerWidth);
    const { userData } = useSelector((state) => state.loginData)
    let bankInfo = props?.campaignData?.deal_terms
    console.log("campaignData", props?.campaignData)
    const [width, setWidth] = React.useState(500)
    useEffect(() => {
        if (ratio > 500) {
            setWidth(500)
        } else {
            setWidth(300)
        }
    }, []);

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const totalAmount = useCallback(() => {
        if (value?.amount) {
            let values = parseInt(value.amount)
            const fee = (2 / 100) * values;
            const tax = (18 / 100) * values;
            const total = values + fee + tax;

            return total;
        } else {
            return 0
        }

    }, [value?.amount]);

    const totalAmountMin = () => {
        let values = parseInt(bankInfo?.min_subscription)
        const fee = (2 / 100) * values;
        const tax = (18 / 100) * values;
        const total = values + fee + tax;
        return total;
    }


    const handleSubmit = () => {
        console.log(parseInt(bankInfo?.min_subscription))
        let isVerified = value.amount && value.transaction_id && totalAmount() > parseInt(bankInfo?.min_subscription)
        if (!value.amount) {
            toast.error("Please enter amount", {
                position: "top-right",
                style: {
                    borderRadius: "3px",
                    background: "red",
                    color: "#fff",
                },
            });
        }
        else if (!value.transaction_id) {
            toast.error("Please enter transaction Id", {
                position: "top-right",
                style: {
                    borderRadius: "3px",
                    background: "red",
                    color: "#fff",
                },
            });
        }
        else if (totalAmount() < parseInt(bankInfo?.min_subscription)) {
            toast.error("amount should be greater than minimum Enrollment", {
                position: "top-right",
                style: {
                    borderRadius: "3px",
                    background: "red",
                    color: "#fff",
                },
            });
        }
        if (isVerified) {
            let object = {
                user_id: userData.id,
                campaign_id: props?.campaignData?.campaign?.id,
                transaction_id: value.transaction_id,
                amount: totalAmount()
            }
            try {
                CompanyServices.makeOfflinePayment(object).then(res => {
                    if (res.status === 200 || res.status === 201) {
                        setValue(initialData)
                        props?.handleClose()
                        toast.success(res?.data?.message, {
                            position: "top-right",
                            style: {
                                borderRadius: "3px",
                                background: "green",
                                color: "#fff",
                            },
                        })
                    } else {
                        setValue(initialData)
                        props?.handleClose()
                        toast.error(res?.response?.data?.message, {
                            position: "top-right",
                            style: {
                                borderRadius: "3px",
                                background: "red",
                                color: "#fff",
                            },
                        });
                    }
                })
            } catch (error) {
                setValue(initialData)
                props?.handleClose()
                toast.error(error, {
                    position: "top-right",
                    style: {
                        borderRadius: "3px",
                        background: "red",
                        color: "#fff",
                    },
                });
            }
        }

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: width,
        bgcolor: 'white',
        // border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        outline: 'none'
    };


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={props?.show}
            onClose={props?.handleClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={props?.show}>
                <Box sx={style}  >
                    <div style={{ display: 'flex', justifyContent: 'center', margin: 'auto', marginBottom: '13px', marginLeft: '2em' }}>
                        <img src={Loginlogo} width={172} height={76} style={{ objectFit: 'contain' }}></img>
                    </div>
                    <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
                        Pay Offline
                    </Typography>


                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <span style={{ fontSize: '13px', fontWeight: '500', marginRight: '5px' }}>Bank Name</span>

                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '600' }}>{bankInfo?.bank_name}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <span style={{ fontSize: '13px', fontWeight: '500', marginRight: '5px' }}>Account No.</span>

                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '600' }}>{bankInfo?.account_no}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <span style={{ fontSize: '13px', fontWeight: '500', marginRight: '5px' }}>IFSC Code</span>

                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '600' }}>{bankInfo?.ifsc_code}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                        <div style={{ alignItems: 'center', display: 'flex' }}>
                            <span style={{ fontSize: '13px', fontWeight: '500', marginRight: '5px' }}>Account Name</span>

                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '600' }}>{bankInfo?.account_name}</span>
                    </div>

                    <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'left', color: '' }}>
                        note
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 0.5, textAlign: 'left', fontSize: '13px' }}>

                        amount calculation :  minimum Enrollment is {bankInfo?.min_subscription}  so 2% convenience fee will be {bankInfo?.min_subscription * 2 / 100} and 18% GST will be {(18 / 100) * bankInfo?.min_subscription}
                        and the total amount will be {totalAmountMin()}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2, textAlign: 'center', color: '' }}>
                        Already paid?
                    </Typography>
                    <div className="verifyAddress-input">
                        <input type="text" name="transaction_id" value={value.transaction_id} onChange={handleChange} placeholder="transaction id" className="verifyAddress-input-section" />
                    </div>
                    <div className="verifyAddress-input">
                        <input type="text" name="amount" value={value.amount} onChange={handleChange} placeholder={`minimum amount :- ${bankInfo?.min_subscription || 0} `} className="verifyAddress-input-section" />
                    </div>

                    <button onClick={handleSubmit} className="sign-up-btn">Pay offline</button>
                </Box>
            </Fade>
        </Modal>
    );
}
export default PayOfflineModal;