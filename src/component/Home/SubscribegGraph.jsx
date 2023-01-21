import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import '../../css/Home/subscribegraph.css'
import Card from '@mui/material/Card';
import Graph1 from '../../images/assets/graph1.png';
import Graph2 from '../../images/assets/graph2.png';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import YellowArrow from '../../images/assets/yellowArrow.png';
import { useEffect , useState} from "react";
export default function SubscribegGraph() {

    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);

    useEffect(() => {

        if (ratio < 920) {
            setGridxsFirst(1)
            setgridxsSecond(12)
        }
        else if(ratio < 600) {
            setGridxsFirst(1)
            setgridxsSecond(6)
        }
    }, [])
    return (
        <Box sx={{ minHeight: '60vh', marginTop: '90px' }}>
            <Typography className="test-script-regular">Subscribe to<span className="test-script-bg"> opportunities curated</span> for you</Typography>
            <Grid sx={{ marginTop: '40px'}} container spacing={gridxsFirst}>
                <Grid item xs={gridxsSecond}>
                    <Card className="card-container" >
                        <CardContent>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'grid', width: '70%' }}>
                                    <Typography className="card-bold-txt" >Equity linked instruments</Typography>
                                    <Typography className="regular-txt">Subscribe to gain access to exclusive high return opportunities in growing business</Typography>
                                    <Typography className="card-bold-number-text">25%+</Typography>
                                    <Typography className="regular-bold-text">Expected IRR</Typography>
                                    <Button className="learn-more-btn" varient='outlined'>Learn More  <img style={{ marginLeft: '5px' }} width={5} height={10} src={YellowArrow}></img> </Button>
                                </div>
                                {/* <div className="bar-graph-image"> */}
                                    <img src={Graph1} className="bar-graph-image" alt="graph"></img>
                                {/* </div>   */}
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid item xs={gridxsSecond}>
                <Card className="card-container">
                        <CardContent>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'grid', width: '70%' }}>
                                    <Typography className="card-bold-txt" >Fixed Income instruments</Typography>
                                    <Typography className="regular-txt">Enjoy regular payouts with high yield investment<br /> opportunities</Typography>
                                    <Typography className="card-bold-number-text">12 - 25%</Typography>
                                    <Typography className="regular-bold-text">Expected IRR</Typography>
                                    <Button className="learn-more-btn" varient='outlined'>Learn More  <img style={{ marginLeft: '5px' }} width={5} height={10} src={YellowArrow}></img> </Button>
                                </div>
                                {/* <div className="bar-graph-image"> */}
                                    <img src={Graph2} className="bar-graph-image" alt="graph"></img>
                                {/* </div>   */}
                            </div>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>

        </Box>
    )
}