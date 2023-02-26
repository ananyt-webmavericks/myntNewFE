import React, { useState, useEffect } from "react";
import '../../../css/MyntUniversity/myntFaq.css'
import { useNavigate } from "react-router-dom";
import { Grid, Button } from "@mui/material";
import Player from '../../../images/assets/Player.png';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import ImageBlog1 from '../../../images/myntblogs/detailblog1.png'
import ImageBlog2 from '../../../images/myntblogs/detailblog2.png'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import YoutubeEmbed from "../../LiveDealsDetails/YouTubeEmbed";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const data = [
    { id: 1, heading: 'How to be a startup investor', episode: 'Episode 01', subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque', buttonUrl: '', image: ImageBlog1 },
    { id: 2, heading: 'How to be a startup investor', episode: 'Episode 01', subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque', buttonUrl: '', image: ImageBlog2 },
    { id: 3, heading: 'How to be a startup investor', episode: 'Episode 01', subHeading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non ante eu lorem elementum scelerisque', buttonUrl: '', image: ImageBlog1 },

]
export default function MyntVideosMain() {
    const navigate = useNavigate()
    const [gridxsMainFirst, setGridxsMainFirst] = useState(3)
    const [gridxsMainSecond, setGridxsMainSecond] = useState(4)
    const ratio = parseInt(window.innerWidth);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        if (ratio < 1350) {
            setGridxsMainFirst(2)
            setGridxsMainSecond(6)
        }
        if (ratio < 670) {
            setGridxsMainFirst(1)
            setGridxsMainSecond(12)
        }
    }, [])
    return (
        <div className="faq-university-container">
            <div style={{ display: 'grid' }}>
                <span className="get-started-heading startup">Tutorials</span>
            </div>
            <div className="blogs-container-mynt">
                <Grid container spacing={gridxsMainFirst}>
                    {data.map((item, index) => {
                        return (
                            <Grid item xs={gridxsMainSecond} key={index}>
                                <div className="blogs-des-image-container">
                                    <img onClick={handleClickOpen} src={Player} style={{ boxShadow: '0px 0px 40px #0000001A', position: 'absolute', left: '45%', top: '20%' }} alt="" />
                                    <img src={item.image} style={{ width: 'inherit', height: '160px' }}></img>
                                    <div style={{ padding: '1em', display: 'grid' }}>
                                        <span style={{ fontSize: '12px', color: 'gray', marginBottom: '10px' }} >{item.episode}</span>
                                        <span style={{ fontSize: '15px', marginBottom: '10px' }}>{item.heading}</span>
                                        <span style={{ fontSize: '12px', marginBottom: '10px' }}>{item.subHeading}</span>
                                        <Button onClick={handleClickOpen} variant="contained" sx={{ fontSize: '12px', borderRadius: '27px', color: 'black', width: 'fit-content', background: '#FADF35', '&:hover': { background: '#FADF35' } }} startIcon={<PlayCircleOutlinedIcon />}>Watch video</Button>
                                    </div>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                fullWidth={fullWidth}
                maxWidth={maxWidth}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogContent>
                <YoutubeEmbed   width={'100%'} height={'357px'} embedId={"g_aELYEBc4Q"} />
                </DialogContent>
               
            </Dialog>

        </div>
    )
}