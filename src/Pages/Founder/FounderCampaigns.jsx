import { useEffect, useState } from "react";
import { Box, Button, Grid, LinearProgress, Typography, Card } from "@material-ui/core";
import Footer from "../../component/Footer";
import '../../css/FounderDrawer/Dashboard/E-Sign.css'
import { makeStyles } from '@material-ui/core/styles';
import DrawerFounder from "../../component/FounderDrawer/DrawerFounder";
import { Container } from "@mui/material";
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    root2: {
        width: "100%",
        padding: 10,
    },
    paperconten: {
        padding: 5,
        boxShadow: "0px 0px 20px #0000001A !important",
        borderRadius: "7px",
    },
    Card: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: 5,
        display: "flex",
        justifyContent: "space-between",
        marginRight: 5,
    },
    btn: {
        borderRadius: 20,
        backgroundColor: "#01965D",
        color: "white",
        height: "30px",
        width: "100px"
    },
    btn2: {
        borderRadius: 20,
        height: "30px",
        width: "100px"
    },
    typofont: {
        textAlign: "left",
        color: "#000000"
    },
    para: {
        padding: "0px 10px 0px 10px",
        textAlign: "left",
        marginLeft: 5
    }

}));
function LinearProgressWithLabel(props) {
    const classes = useStyles();
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="" className={classes.root2}>{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const FounderCampaigns = () => {
    const classes = useStyles();
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);
    const [showDeals, setShowDeals] = useState(false)
    const [progress, setProgress] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    const fetchValue = (value) => {
        setShowDeals(value)
    }

    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/dashboard') && <DrawerFounder />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                        <div className={classes.root}>
                            <Grid style={{ marginBottom: "5rem" }} container spacing={3} marginTop={3}>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten}>
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>Company Profile</b>
                                            <Button className={classes.btn} variant="contained">Completed</Button>
                                        </div>
                                        <Box className={classes.para}><p>Tell us a little about your company</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten} >
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>People</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Pending</Button>
                                        </div>
                                        <Box><p className={classes.para}>Tell us little about your team</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten}>
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>FAQ’s</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Pending</Button>
                                        </div>
                                        <Box className={classes.para}><p>Lorem ipsum dolor sit amet, consectetur elit. Morbi et,</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten} >
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>Highlights</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Pending</Button>
                                        </div>
                                        <Box><p className={classes.para}>Lorem ipsum dolor sit amet, consectetur elit. Morbi et,</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten}>
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>Get Rewards</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Completed</Button>
                                        </div>
                                        <Box className={classes.para}><p>Tell us a little about your company</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten} >
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>Press</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Pending</Button>
                                        </div>
                                        <Box><p className={classes.para}>Tell us little about your team</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten}>
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>Upload Documents</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Completed</Button>
                                        </div>
                                        <Box className={classes.para}><p>Tell us a little about your company</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card className={classes.paperconten} >
                                        <div className={classes.Card}>
                                            <b className={classes.typofont}>Upload Pitch</b>
                                            <Button className={classes.btn2} color="secondary" variant="outlined">Pending</Button>
                                        </div>
                                        <Box><p className={classes.para}>Tell us little about your team</p></Box>
                                        <div className={classes.root2}>
                                            <LinearProgressWithLabel value={progress} />
                                        </div>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>

                </div >

            </div >
            {ratio < 1000 ? null : < Footer />}
        </>
    )
}
export default FounderCampaigns;