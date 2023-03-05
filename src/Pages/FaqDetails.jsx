import React, { useState, useEffect } from "react";
import '../css/FaqDetails/faqDetails.css';
import { Card, CardContent, Container, CssBaseline, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
const FaqDetails = () => {
    const navigate = useNavigate()
    const [gridxsFirst, setGridxsFirst] = useState(3)
    const [gridxsSecond, setgridxsSecond] = useState(4)
    const ratio = parseInt(window.innerWidth);
    useEffect(() => {
        window.scrollTo(0, 0);

        if (ratio < 862) {

            setGridxsFirst(2)
            setgridxsSecond(6)
        }
        if (ratio < 500) {

            setGridxsFirst(1)
            setgridxsSecond(12)
        }
    }, [ratio])
    return (
        <>
            <CssBaseline />
            <Container maxWidth="lg">
                <div className="faqDetails-container">
                    <span className="heading-faq-container">Faqs</span>
                    <Grid container spacing={gridxsFirst}>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/started-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">Getting Started</span>
                                        <span className="subHeading-internal-card">How do get started on the wealth building journey </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/startedInvest-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">Startup Investing</span>
                                        <span className="subHeading-internal-card">Everything you need to know about investing in startups</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/general-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">General</span>
                                        <span className="subHeading-internal-card">Frequent questions on using Tykeinvest</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/subscribtion-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">Subscriptions</span>
                                        <span className="subHeading-internal-card">Learn more about the steps involved in subscribing </span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/campaigns-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">Types of campaigns</span>
                                        <span className="subHeading-internal-card">All subscription instruments demystified</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/taxtation-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">Returns and Taxation</span>
                                        <span className="subHeading-internal-card">Earnings from different instruments and the tax implications</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={gridxsSecond}>
                            <Card onClick={() => navigate('/faq-details/founder-faq')} className="card-content-faq-details">
                                <CardContent>
                                    <div className="internal-card-faq">
                                        <span className="heading-internal-card">For Founders</span>
                                        <span className="subHeading-internal-card">Answers to all questions relevant to your fund raising campaing on Tykeinvest</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>



                </div>
            </Container>
        </>
    )
}

export default FaqDetails;