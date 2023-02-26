import React, { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import '../../css/Dashboard/analytics.css'
import ScrollContainer from 'react-indiana-drag-scroll'
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Download from '../../images/assets/download.svg'
import Arrow from '../../images/assets/yellowArrow.png'
import { Grid } from "@mui/material";
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
export default function StartupUpdateDialog({ open, handleClose }) {
    const [activeBtn, setActiveBtn] = useState(1)

    return (

        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Startup Updates"}</DialogTitle>
            <DialogContent>
                <div className="update-dialog-tabs">
                    <div className="year-wise-pdfs-btn" style={activeBtn === 1 ? { border: '1px solid #DEA20A' } : { border: 'none' }} onClick={() => setActiveBtn(1)}>2023</div>
                    <div className="year-wise-pdfs-btn" style={activeBtn === 2 ? { border: '1px solid #DEA20A' } : { border: 'none' }} onClick={() => setActiveBtn(2)}>2022</div>
                    <div className="year-wise-pdfs-btn" style={activeBtn === 3 ? { border: '1px solid #DEA20A' } : { border: 'none' }} onClick={() => setActiveBtn(3)}>2021</div>
                    <div className="year-wise-pdfs-btn" style={activeBtn === 4 ? { border: '1px solid #DEA20A' } : { border: 'none' }} onClick={() => setActiveBtn(4)}>2020</div>
                </div>
                <div className="pdf-container-startup">
                    <ScrollContainer vertical={true} className="scroll-container">
                        <div>
                        <div className="single-pdf-enlist-section">
                            <Grid container spacing={3} style={{alignItems:'center'}}>
                                <Grid item xs={4}>
                                    <span style={{ fontSize: '16px' }}>August 2022</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Download} />
                                </Grid>
                                <Grid item xs={4}>
                                   <img src={Arrow} width={12} height={20} style={{float:'right' , marginRight:'10px'}}></img>
                                </Grid>
                            </Grid>
                           
                        </div>
                        <hr />
                        <div className="single-pdf-enlist-section">
                            <Grid container spacing={3} style={{alignItems:'center'}}>
                                <Grid item xs={4}>
                                    <span style={{ fontSize: '16px' }}>September 2022</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Download} />
                                </Grid>
                                <Grid item xs={4}>
                                   <img src={Arrow} width={12} height={20} style={{float:'right' , marginRight:'10px'}}></img>
                                </Grid>
                            </Grid>
                           
                        </div>
                        <hr />
                        <div className="single-pdf-enlist-section">
                            <Grid container spacing={3} style={{alignItems:'center'}}>
                                <Grid item xs={4}>
                                    <span style={{ fontSize: '16px' }}>October 2022</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Download} />
                                </Grid>
                                <Grid item xs={4}>
                                   <img src={Arrow} width={12} height={20} style={{float:'right' , marginRight:'10px'}}></img>
                                </Grid>
                            </Grid>
                           
                        </div>
                        <hr />
                        <div className="single-pdf-enlist-section">
                            <Grid container spacing={3} style={{alignItems:'center'}}>
                                <Grid item xs={4}>
                                    <span style={{ fontSize: '16px' }}>November 2022</span>
                                </Grid>
                                <Grid item xs={4}>
                                    <img src={Download} />
                                </Grid>
                                <Grid item xs={4}>
                                   <img src={Arrow} width={12} height={20} style={{float:'right' , marginRight:'10px'}}></img>
                                </Grid>
                            </Grid>
                           
                        </div>
                        <hr />
                        </div>
                    </ScrollContainer>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} variant='contained' className='modal-btn-complete-new'>Done</Button>
            </DialogActions>
        </Dialog>

    )
}