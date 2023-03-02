import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import { Box, Button, FormGroup, Grid, IconButton, InputBase, TextField, Typography } from '@mui/material'
import { createMuiTheme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../../../css/FounderDrawer/Dashboard/GridBox.css'
import MenuIcon from '@mui/icons-material/Menu';
import facebook from './../../../images/assets/facebook.png'
import instagram from './../../../images/assets/instagram.png'
import date from './../../../images/assets/date.png'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}
const useStyles = makeStyles({
    SaveBtn: {
        height: "3.37rem",
        width: "17.5rem"
    },
    SubmitBnt: {
        height: "3.37rem",
        width: "17.5rem",
        backgroundColor: "#FADF35",
        color: 'red'
    }
});
const CompanyProfile = () => {
    const classes = useStyles()
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const selectStyle = {
        height: "42px",
        background: "#F4F4F4",
        font: "normal normal Poppins !important"
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ marginTop: 4, marginLeft: 2, }} style={{ width: "80%" }}>
                <h3>Company Info</h3>
                <Typography className='companyinformation' >
                    <p style={{ marginTop: "10px", width: "100%" }}>Tell us a little about your company. Applications are usually processed within 5 working days. </p>
                </Typography>
            </Box>

            <Typography className="comp-info-appl-title">Application</Typography>

            <div className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 4.2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel
                                color='warning'
                                id="demo-multiple-name-label"
                                sx={{ marginTop: '-6px' }} >Select Country*</InputLabel>
                            <Select
                                sx={selectStyle}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel
                                color='warning'
                                sx={{ marginTop: '-6px' }}
                                id="demo-multiple-name-label">Select State*</InputLabel>
                            <Select
                                sx={selectStyle}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel
                                color='warning'
                                sx={{ marginTop: '-6px' }}
                                id="demo-multiple-name-label">Select City*</InputLabel>
                            <Select
                                sx={selectStyle}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='Enter Pin Code*'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>

                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='Enter your Company Address*'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>
                    </Box>
                </Grid>
            </div>

            <Typography className="comp-info-appl-title">Online Presence</Typography>

            <div className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 4.2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >


                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='Enter your company website*'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>

                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <div className="input-with-logo" style={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <img src={facebook} alt="facebook-logo" width={30} />
                                </IconButton>
                                <input
                                    style={{ border: 'none', height: '40px' }}
                                    placeholder='Facebook Link'
                                    type="text"
                                    className='icon-input' />
                            </div>
                        </FormControl>

                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <div className="input-with-logo" style={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <img src={instagram} alt="insta-logo" width={30} />
                                </IconButton>
                                <input
                                    style={{ border: 'none', height: '40px' }}
                                    placeholder='Instagram Link'
                                    type="text"
                                    className='icon-input' />
                            </div>
                        </FormControl>

                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <div className="input-with-logo" style={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <img src={facebook} alt="facebook-logo" width={30} />
                                </IconButton>
                                <input
                                    style={{ border: 'none', height: '40px' }}
                                    placeholder='Linked In Link'
                                    type="text"
                                    className='icon-input' />
                            </div>
                        </FormControl>


                    </Box>
                </Grid>
            </div>

            <Typography className="comp-info-appl-title">Legal</Typography>

            <div className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 4.2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >

                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='Enter your legal name*'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='Enter CIN Number*'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <div className="input-with-logo" style={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}>
                                <input
                                    style={{ border: 'none', height: '40px', paddingLeft: 0 }}
                                    placeholder='Date of Incorporation'
                                    type="text"
                                    className='icon-input' />
                                <IconButton sx={{ p: '10px' }} aria-label="menu">
                                    <img src={date} alt="date-logo" width={24} />
                                </IconButton>
                            </div>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='incorporation Type e.g. Private, public etc.'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>
                    </Box>
                </Grid>
            </div>

            <Typography className="comp-info-appl-title">About Company</Typography>

            <div className='gridParent'>
                <Grid item xs={6} md={3}>
                    <Box
                        sx={{
                            p: 2,
                            paddingTop: 4.2,
                            bgcolor: 'background.default',
                            display: 'grid',
                            gridTemplateColumns: { md: '1fr 1fr', sm: '1fr 1fr' },
                            gap: 2.5,
                            width: '492',
                            textAlign: 'left',
                            fontFamily: 'poppins'
                        }}
                    >
                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel
                                color='warning'
                                id="demo-multiple-name-label"
                                sx={{ marginTop: '-6px' }} >Select Country*</InputLabel>
                            <Select
                                sx={selectStyle}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>


                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <input
                                placeholder='Amount Invested in the business till date *'
                                type="text"
                                className='amount-invested-till-date' />

                        </FormControl>

                        <FormControl sx={{ m: 1, width: "100%" }}>
                            <InputLabel
                                color='warning'
                                sx={{ marginTop: '-6px' }}
                                id="demo-multiple-name-label">Select City*</InputLabel>
                            <Select
                                sx={selectStyle}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"
                                multiple
                                value={personName}
                                onChange={handleChange}
                                input={<OutlinedInput label="Name" />}
                                MenuProps={MenuProps}
                            >
                                {names.map((name) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        style={getStyles(name, personName, theme)}
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </div>

            <div className="buttonsParent">
                <Button
                    style={{ margin: '20px', color: 'black' }}
                    variant='contained' className="comp-prof-button1">Save</Button>
                <Button
                    style={{ margin: '20px' }}
                    variant="contained" className="comp-prof-button2">Submit</Button>
            </div>
        </Container>
    )
}

export default CompanyProfile