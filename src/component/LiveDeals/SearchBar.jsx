import React, { useEffect, useState } from "react";
import '../../css/Dashboard/liveDeals.css';
import SearchIcon from '../../images/assets/searchIcon.png';
import { makeStyles } from "@material-ui/styles";
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { dealsStoreAction } from "../../Redux/actions/company";
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
    'Minimum',
    'All',
    '< 5000',
    '5001 - 10000',
    '10001 - 20000',
    '> 20000'
];

const useStyles = makeStyles((theme) => ({
    select: {
        '& .MuiOutlinedInput-notchedOutline': {
            border: 'none',

        },
        '& .css-vrp7az-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
            background: 'white',
            padding: '8px',
            borderRadius: '5px'
        },
        width: '100%',
        height: '32px',


    },

}));

function getStyles(name, sortedData, theme) {
    return {
        fontWeight:
            sortedData.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
        textAlign: 'left'
    };
}

export default function SearchBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch()
    const [sortedData, setSortedData] = useState('');
    const { deals } = useSelector(state => state.companyData)
    const handleSortChange = (e) => {
        console.log(e.target.value)
        setSortedData(e.target.value)
    }

    // // Handle search input change and update the search term state
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const filteredData = props?.filteredData.filter((item) =>
            item?.company?.company_name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        dispatch(dealsStoreAction(filteredData))
    };

    // // Filter data based on the search term


    const sortByAmount = (value) => {
        let filteredAndSortedData = [...props?.filteredData];

        if (value === 'All') {
            filteredAndSortedData.sort((a, b) => a?.deal_terms?.min_subscription - b?.deal_terms?.min_subscription);
        } else if (value === 'Minimum') {
            filteredAndSortedData.sort((a, b) => b?.deal_terms?.min_subscription - a?.deal_terms?.min_subscription);
        } else if (value === '< 5000') {
            filteredAndSortedData = filteredAndSortedData
                .sort((a, b) => b?.deal_terms?.min_subscription - a?.deal_terms?.min_subscription)
                .filter((item) => item?.deal_terms?.min_subscription <= 5000);
        } else if (value === '5001 - 10000') {
            filteredAndSortedData = filteredAndSortedData
                .sort((a, b) => b?.deal_terms?.min_subscription - a?.deal_terms?.min_subscription)
                .filter((item) => item?.deal_terms?.min_subscription >= 5001 && item?.deal_terms?.min_subscription <= 10000);
        }
        else if (value === '10001 - 20000') {
            filteredAndSortedData = filteredAndSortedData
                .sort((a, b) => b?.deal_terms?.min_subscription - a?.deal_terms?.min_subscription)
                .filter((item) => item?.deal_terms?.min_subscription >= 10001 && item?.deal_terms?.min_subscription <= 20000);
        }
        else if (value === '> 20000') {
            filteredAndSortedData = filteredAndSortedData
                .sort((a, b) => b?.deal_terms?.min_subscription - a?.deal_terms?.min_subscription)
                .filter((item) => item?.deal_terms?.min_subscription > 20000);
        }
        // setSortedData(sortedByAmount);
        setSortedData(value)
        dispatch(dealsStoreAction(filteredAndSortedData))
        console.log("sortByAmount", filteredAndSortedData)
    };

    // useEffect(() => {
    //     if (sortedData) {
    //         props?.handleGetSearchBarData(sortedData)
    //     } else if (searchTerm) {
    //         props?.handleGetSearchBarData(searchTerm)
    //     } else {

    //     }

    // }, [searchTerm, sortedData])

    return (
        <div className="search-sort-container">
            <div className="search-bar-keyword-container">
                <input value={searchTerm} onChange={handleSearch} className="search-input-live-deals"></input>
                <img src={SearchIcon} width={17} height={17} />
            </div>
            <div className="dropdown-container-live-deals">
                <Select
                    className={`${classes.select} dropdown-position`}
                    variant="standard"
                    sx={{ textAlign: 'left', fontStyle: 'normal', background: 'red', height: '42px' }}
                    displayEmpty
                    value={sortedData}
                    onChange={(e) => sortByAmount(e.target.value)}
                    input={<OutlinedInput />}
                    // renderValue={(selected) => {
                    //     if (selected.length === 0) {
                    //         return <span>Sort By Amount</span>;
                    //     }

                    //     return selected.join(', ');
                    // }}
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
                        // style={getStyles(name, sortedData, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>

            </div>
        </div>
    )
}