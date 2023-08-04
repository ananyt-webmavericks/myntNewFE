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




const LoginModal = (props) => {
    const navigate = useNavigate()
    const ratio = parseInt(window.innerWidth);
    const [width, setWidth] = React.useState(500)
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
                        Please login first to access the deals !!
                    </Typography>
                    <button onClick={() => { navigate('/login'); props?.handleClose() }} className="sign-up-btn">Login</button>
                </Box>
            </Fade>
        </Modal>
    );
}
export default LoginModal;