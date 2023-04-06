import { Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Advisors from './PeopleTabs/Advisors'
import Investors from './PeopleTabs/Investors'
import TeamMembers from './PeopleTabs/TeamMembers'
import CompanyServices from '../../../service/Company'
import { useDispatch, useSelector } from 'react-redux'
import { peopleDataStoreAction } from '../../../Redux/actions/company'
import Linkdin from '../../../images/highlights/linkdin.png';
const useStyles = makeStyles({
    peoplegroupbtn: {
        gap: "2rem",
        display: "flex",
        marginTop: "2rem"
    },
    Teambtn: {
        color: "white",
        borderRadius: "20px",
        background: "#F4F4F4",
        textTransform: "capitalize"
    },
    investorbtn: {
        borderRadius: "20px",
        background: "#F4F4F4",
        textTransform: "capitalize"
    },
    advisorsbtn: {
        borderRadius: "20px",
        background: "#F4F4F4",
        textTransform: "capitalize"
    },


})


const People = ({ tabChangeFn }) => {
    const [subTabNo, setSubTabNo] = useState(0)
    const handleClick = tabNo => {
        setSubTabNo(tabNo)
    };
    const classes = useStyles()
    const dispatch = useDispatch()
    const { peopleData } = useSelector(state => state.companyData)
    console.log(peopleData)
    const getPeopleData = () => {
        CompanyServices.getPeopleByCompanyId(localStorage.getItem("company_id")).then(res => {
            if (res.status === 200 || res.status === 201) {
                dispatch(peopleDataStoreAction(res.data))
            }
        })
    }
    useEffect(() => {
        peopleData.length === 0 && getPeopleData()
    }, [])

    return (
        <Box sx={{ marginTop: 4, marginLeft: 2, marginBottom: "3rem" }}>
            <h3>People</h3>
            <Typography>
                Add your founding team members, lead investors and advisors here. As we all know ‘Team work makes the dream work’. Investors are always keen to know the people that run the show behind the scenes.
            </Typography>
            <Box className={classes.peoplegroupbtn}>
                <Button
                    style={{
                        transition: '0.5s',
                        backgroundColor: subTabNo === 0 ? '#000000' : '#F4F4F4',
                        color: subTabNo === 0 ? 'white' : '#000000'
                    }}
                    onClick={e => handleClick(0)} variant="contained" className={classes.Teambtn}>Team Member</Button>
                <Button
                    style={{
                        transition: '0.5s',
                        backgroundColor: subTabNo === 1 ? '#000000' : '#F4F4F4',
                        color: subTabNo === 1 ? 'white' : '#000000'
                    }}
                    onClick={e => handleClick(1)}
                    variant="contained"
                    className={classes.investorbtn}>Investors</Button>
                <Button
                    style={{
                        transition: '0.5s',
                        backgroundColor: subTabNo === 2 ? '#000000' : '#F4F4F4',
                        color: subTabNo === 2 ? 'white' : '#000000'
                    }}
                    onClick={e => handleClick(2)}
                    variant="contained"
                    className={classes.advisorsbtn}>Advisors</Button>
            </Box>

            {subTabNo === 0 && <TeamMembers getPeopleData={getPeopleData} tabChangeFn={tabChangeFn} />}
            {subTabNo === 1 && <Investors getPeopleData={getPeopleData} tabChangeFn={tabChangeFn} />}
            {subTabNo === 2 && <Advisors getPeopleData={getPeopleData} tabChangeFn={tabChangeFn} />}

            {subTabNo === 0 && peopleData?.filter(item => item.type === "TEAM").length > 0 &&
                <div className="investor-home-heading" style={{ fontSize: '18px' }}>Added Team Members</div>}
            {subTabNo === 1 && peopleData?.filter(item => item.type === "INVESTOR").length > 0 && <div className="investor-home-heading" style={{ fontSize: '18px' }}>Added Investors</div>}
            {subTabNo === 2 && peopleData?.filter(item => item.type === "ADVISOR").length > 0 && <div className="investor-home-heading" style={{ fontSize: '18px' }}>Added Advisors</div>}

            <div className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 4.2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >


                        {subTabNo === 0 &&
                            <>
                                {
                                    peopleData?.filter(item => item.type === "TEAM").slice(0).reverse().map((item, index) => <Card key={index} style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                        <CardContent>
                                            <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                                <img src={item.profile_image} width={183} height={183}></img>
                                                <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{item.name}</span>
                                                <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>
                                                    {item.position}
                                                </span>
                                                <img
                                                    onclick={() => window.open(item.linked_in_link, '_blank')}
                                                    src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                                            </div>
                                        </CardContent>
                                    </Card>)
                                }
                            </>
                        }

                        {subTabNo === 1 && <>
                            {
                                peopleData?.filter(item => item.type === "INVESTOR").slice(0).reverse().map((item, index) => <Card key={index} style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                    <CardContent>
                                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                            <img src={item.profile_image} width={183} height={183}></img>
                                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{item.name}</span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>
                                                {item.position}</span>
                                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                                        </div>
                                    </CardContent>
                                </Card>)
                            }
                        </>
                        }


                        {subTabNo === 2 && <>
                            {
                                peopleData?.filter(item => item.type === "ADVISOR").slice(0).reverse().map((item, index) => <Card key={index} style={{ minWidth: '280px', background: '#FFFFFF 0% 0% no-repeat padding-box', boxShadow: '0px 0px 12px #0000001F', borderRadius: '7px', marginRight: '50px', marginTop: '10px', marginBottom: '10px', marginLeft: '10px' }}>
                                    <CardContent>
                                        <div style={{ display: 'grid', justifyContent: 'center', textAlign: 'center' }}>
                                            <img src={item.profile_image} width={183} height={183}></img>
                                            <span style={{ fontSize: '16px', fontWeight: '600', marginTop: '10px' }}>{item.name}</span>
                                            <span style={{ fontSize: '12px', fontWeight: '600', marginTop: '10px', marginBottom: '10px' }}>
                                                {item.position}
                                            </span>
                                            <img src={Linkdin} width={25} height={25} style={{ margin: 'auto' }}></img>
                                        </div>
                                    </CardContent>
                                </Card>)
                            }
                        </>
                        }
                    </Box>
                </Grid>
            </div>

        </Box >
    )
}

export default People