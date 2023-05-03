import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Mask1 from '../../images/portfolio/Mask1.png'
import Mask2 from '../../images/portfolio/Mask2.png'
import Mask3 from '../../images/portfolio/Mask3.png'
import Mask4 from '../../images/portfolio/Mask4.png'
import Doc from '../../images/portfolio/doc.png';
import Pagination from '@mui/material/Pagination';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "black",

        },
        "& .MuiPaginationItem-root.Mui-selected": {
            background: 'black',
            color: 'white'
        }
    }
}));


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(img, name, amount, date, doc, actions) {
    return { img, name, amount, date, doc, actions };
}

const actions = ['Offer Letter', 'Download Agreement', 'Download Instruments']
const emptyAction = []
const rows = [
    createData(Mask1, 'SustVest', '₹ 5,000', '22 Dec, 2022', '#', actions),
    createData(Mask2, 'Deciwood', '₹ 10,000', '22 Dec, 2022', '#', actions),
    createData(Mask2, 'SustVest', '₹ 25,000', '22 Dec, 2022', '#', emptyAction),
    createData(Mask3, 'Deciwood', '₹ 15,000', '22 Dec, 2022', '#', actions),
    createData(Mask1, 'SustVest', '₹ 5,000', '22 Dec, 2022', '#', actions),
];

export default function DataTablePortfolio() {
    const classes = useStyles();
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>

                            <StyledTableCell align='left'>Company</StyledTableCell>
                            <StyledTableCell align='center'>Amt.Enrolled</StyledTableCell>
                            <StyledTableCell align='center'>Date of Enrollment</StyledTableCell>
                            <StyledTableCell align='center'>Documents</StyledTableCell>
                            <StyledTableCell align='center'>Action</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row" >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <img src={row.img} width={41} height={41} style={{ marginRight: '17px' }}></img>{row.name}
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align='center'>{row.amount}</StyledTableCell>
                                <StyledTableCell align='center'>{row.date}</StyledTableCell>
                                <StyledTableCell align='center'><a href={row.doc} ><img src={Doc} width={22} height={22}></img></a></StyledTableCell>
                                <StyledTableCell align='center'>
                                    {row.actions.length !== 0 ?
                                        <div>
                                            {row.actions.map((item, index) => {
                                                return (
                                                    <div key={index}>
                                                        <a href='#'>{item}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        :
                                        <div style={{ boxShadow: '0px 0px 20px #00000017', width: 'fit-content', margin: 'auto', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px', background: 'white' }}>
                                            Pending from Startup
                                        </div>
                                    }

                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '26px' }}>
                <Pagination count={10} classes={{ ul: classes.ul }} />
            </div>
        </>
    );
}