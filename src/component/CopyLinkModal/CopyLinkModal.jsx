import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Loginlogo from '../../images/assets/loginlogo.png';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { toast } from "react-hot-toast";

const inputStyle = {
    width: '300px',
    height: '42px',

    padding: "10px 10px",
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    /* UI Properties */
    background: '#D3D3D3 0% 0% no-repeat padding-box',
    boxShadow: '0px 0px 6px #0000000D',
    borderRadius: '5px'

}
const searchInput = {
    width: '90%',
    color: 'black',
    fontWeight: '600',
    height: 'inherit',
    outline: 'none',
    border: 'none',
    background: 'none'
}

const CopyLinkModal = (props) => {
    const navigate = useNavigate()
    const ratio = parseInt(window.innerWidth);
    const [width, setWidth] = React.useState(500)
    const [isCopied, setIsCopied] = useState(false);
    const linkInputRef = useRef(null);
    useEffect(() => {
        if (ratio > 500) {
            setWidth(500)
        } else {
            setWidth(300)
        }
    }, []);

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

    const handleCopy = () => {
        navigator.clipboard.writeText(props?.campaignData?.ama_meet_link)
        setIsCopied(true);
        toast.success("Link copied to clipboard!", {
            position: "top-right",
            style: {
                borderRadius: "3px",
                background: "green",
                color: "#fff",
            },
        })
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);

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
                        Link Expires on :{props?.campaignData?.ama_date || 'N/A'}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0px' }}>
                        <div style={inputStyle}>
                            <input
                                type="text"
                                ref={linkInputRef}
                                value={props?.campaignData?.ama_meet_link}
                                readOnly
                                style={searchInput} />
                            <div onClick={handleCopy}>
                                <ContentCopyIcon />
                            </div>
                        </div>
                    </div>
                </Box>
            </Fade>
        </Modal>
    );
}
export default CopyLinkModal;