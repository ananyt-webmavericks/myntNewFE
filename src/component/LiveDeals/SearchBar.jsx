import React from "react";
import '../../css/Dashboard/liveDeals.css';
import SearchIcon from '../../images/assets/searchIcon.png';
import { makeStyles } from "@material-ui/styles";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            // width: '30%',
            top: '297px'

        },
    },
};
const names = [
   'All',
   'Minimum',
   '5001 - 10000',
   '10001 - 20000',
   'More than 20000'
];

const useStyles = makeStyles((theme) => ({
    select: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',

        },
        '& .css-vrp7az-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            background: 'white',
            padding:'8px',
            borderRadius:'5px'
        },
        width: '100%',
        height: '32px',
        

    },

}));

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        textAlign: 'left'
    };
}

export default function SearchBar() {
    const [personName, setPersonName] = React.useState([]);
    const classes = useStyles();
    const theme = useTheme();
    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <div className="search-sort-container">
            <div className="search-bar-keyword-container">
                <input className="search-input-live-deals"></input>
                <img src={SearchIcon} width={17} height={17} />
            </div>
            <div className="dropdown-container-live-deals">
                <Select
                    className={`${classes.select} dropdown-position`}
                    // multiple
                    variant="standard"
                    sx={{ textAlign: 'left', fontStyle: 'normal', background: 'red', height: '42px' }}
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <span>Sort By Amount</span>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}

                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Sort By Amount</em>
                    </MenuItem>
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
                <Select
                    className={classes.select}
                    // multiple
                    variant="standard"
                    sx={{ textAlign: 'left', fontStyle: 'normal', background: 'none', height: '42px' }}
                    displayEmpty
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <span>Sort By Sector</span>;
                        }

                        return selected.join(', ');
                    }}
                    MenuProps={MenuProps}

                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="">
                        <em>Sort By Amount</em>
                    </MenuItem>
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

            </div>
        </div>
    )
}