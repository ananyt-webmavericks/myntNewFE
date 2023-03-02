import { Button, makeStyles, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Advisors from './PeopleTabs/Advisors'
import Investors from './PeopleTabs/Investors'
import TeamMembers from './PeopleTabs/TeamMembers'
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


const People = () => {
    const [subTabNo, setSubTabNo] = useState(0)
    const handleClick = tabNo => {
        setSubTabNo(tabNo)
    };
    const classes = useStyles()
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

            {subTabNo === 0 && <TeamMembers />}
            {subTabNo === 1 && <Investors />}
            {subTabNo === 2 && <Advisors />}
        </Box >
    )
}

export default People