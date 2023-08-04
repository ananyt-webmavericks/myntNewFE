import * as React from 'react';
import { useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Loginlogo from '../../images/assets/loginlogo.png';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialData = {
    bank_name: "",
    account_name: "",
    account_no: "",
    ifsc_code: "",
    transaction_id: ""
}

const PayOfflineModal = (props) => {
    const navigate = useNavigate()
    const [value, setValue] = useState(initialData)
    const ratio = parseInt(window.innerWidth);
    const [width, setWidth] = React.useState(500)
    useEffect(() => {
        if (ratio > 500) {
            setWidth(500)
        } else {
            setWidth(300)
        }
    }, []);

    const handleChange = (e) => {
        if (e.target.name === 'ifsc_code') {
            setValue({ ...value, [e.target.name]: e.target.value.toUpperCase() })
        } else {
            setValue({ ...value, [e.target.name]: e.target.value })
        }
    }

    const handleSubmit = () => {
        setValue(initialData)
        props?.handleClose()
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

                    </Typography>
                    <div className="verifyAddress-input">
                        <input type="text" name="bank_name" value={value.bank_name} onChange={handleChange} placeholder="bank name" className="verifyAddress-input-section" />
                    </div>
                    <div className="verifyAddress-input">
                        <input type="text" name="account_name" value={value.account_name} onChange={handleChange} placeholder="account name" className="verifyAddress-input-section" />
                    </div>
                    <div className="verifyAddress-input">
                        <input type="text" name="account_no" value={value.account_no} onChange={handleChange} placeholder="account number" className="verifyAddress-input-section" />
                    </div>
                    <div className="verifyAddress-input">
                        <input type="text" name="ifsc_code" value={value.ifsc_code} onChange={handleChange} placeholder="ifsc code" className="verifyAddress-input-section" />
                    </div>
                    <div className="verifyAddress-input">
                        <input type="text" name="transaction_id" value={value.transaction_id} onChange={handleChange} placeholder="transaction id" className="verifyAddress-input-section" />
                    </div>
                    <button onClick={handleSubmit} className="sign-up-btn">Submit</button>
                </Box>
            </Fade>
        </Modal>
    );
}
export default PayOfflineModal;