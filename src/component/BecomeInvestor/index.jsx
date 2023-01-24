import React, { useState, useEffect } from "react";
import '../../css/BecomeInvestor/becomeInvestor.css';
import { Card, CardContent, Grid } from "@mui/material";
import Switch from "@material-ui/core/Switch";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const investor =[
    {id:1,number:'01.' , name:'Risk' , description:'Investing in startups is extremely risky. You should only invest an amount you can afford to lose completely without changing your lifestyle.', 
    toggleText:'I understand that I can lose the money I’m investing',toggle:false
    },
    {id:2,number:'02.' , name:'Limited Transfer' , description:'Investment in startups is highly illiquid as such companies are unlisted/private and cannot be sold easily on an exchange or similar secondary trading platform.', 
    toggleText:'I understand that it may be difficult to transfer my investments',toggle:false
    },
    {id:3,number:'03.' , name:'Diversification' , description:'Startup investing is highly speculative and every investment may result in a loss. By investing small amounts across multiple deals, you can reduce yours compared to a large investment in a single company.', 
    toggleText:'I understand that it’s safer to split money across many investments across asset classes',toggle:true
    },
    {id:4,number:'04.' , name:'Cancellation' , description:'You can cancel your investment up to 48 hours before the deal deadline. After that, your deal will be final, and you will not be able to get your money', 
    toggleText:'I understand that I can’t cancel after the 48-hour cancellation deadline',toggle:false
    },
    {id:5,number:'05.' , name:'Research' , description:'Do your own research. Read the documents provided by each company. Get independent legal, accounting and financial advice. If you have any questions or need more information, reach out to us via support.', 
    toggleText:'I understand that doing research is my own responsibility',toggle:true
    },
    
]
const theme = createTheme({
    overrides: {
        MuiSwitch: {
            switchBase: {
                color: "black",
                "&$checked": {
                    color: "#F0C127 !important"
                },
              
            },
            track: {
                opacity: 0.7,
                backgroundColor: "#555555",
                "$checked$checked + &": {
                    opacity: 0.7,
                    backgroundColor: "#555555"
                },
               
            },
           
        }
    }
});
export default function BecomeInvestorMain() {

    const [value, setValue] = useState(investor)
    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const handleChange =(index)=>{
        let new_array = value;
        
        new_array[index].toggle = !new_array[index].toggle;
        console.log( new_array[index].toggle)
        setValue([...new_array])
    }
    useEffect(() => {

        if (ratio < 768) {

            setGridxsFirst(1)
            setgridxsSecond(12)
        }
        else {

            setGridxsFirst(2)
            setgridxsSecond(6)
        }
    }, [])
    return (
        <div className="become-investor-container">
            <div className="get-started-section">
                <span className="get-started-heading">Become an Investor</span>
                <span className="get-started-subheading">To invest through Mynt, you must understand the basics of Startup Investing. Please acknowledge that you are aware of the following:</span>
                <Card className="card-investors">
                    <CardContent>
                        <Grid container spacing={gridxsFirst}>
                            {value.map((item, index)=>{
                                return(
                                <Grid key={index} item xs={gridxsSecond}>
                                    <div className="investor-section-text-btns-container">
                                        <div className="form-factor-number-txt">{item.number}<span className="colored-text-get-started">{item.name}</span></div>
                                        <span className="investor-decription-txt">{item.description}</span>
                                        <div className="toggle-btn-text-container">
                                           
                                            <ThemeProvider theme={theme}>
                                                <Switch
                                                    checked={item.toggle}
                                                    onChange={()=>handleChange(index)}
                                                    inputProps={{ "aria-label": "primary checkbox" }}
                                                />
                                            </ThemeProvider>
                                            <span className="toggle-btn-text">{item.toggleText}</span>
                                        </div>
                                    </div>
                                </Grid>
                                )
                            })}
                             <Grid  item xs={gridxsSecond}>
                                <div className="button-section-finished">
                                <button disabled className="finished-btn">Finished</button>
                                </div>
                             </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}