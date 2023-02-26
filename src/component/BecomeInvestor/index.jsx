import React, { useState, useEffect } from "react";
import '../../css/BecomeInvestor/becomeInvestor.css';
import { Card, CardContent, Grid } from "@mui/material";
import Switch from "@material-ui/core/Switch";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import ConsentSerivce from "../../service/ConsentService";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const investor =[
    {id:1,number:'01.' , name:'Risk' , description:'Investing in startups is extremely risky. You should only invest money that you can afford to lose entirely without compromising your standard of living.', 
    toggleText:'I understand that I can lose the money I’m investing',toggle:true
    },
    {id:2,number:'02.' , name:'Limited Transfer' , description:'As these companies are not publicly traded, Subscriptions in startups are extremely illiquid. These securities are private and cannot be sold easily on an exchange or other secondary trading platform.', 
    toggleText:'I understand that it may be difficult to transfer my Subscriptions',toggle:true
    },
    {id:3,number:'03.' , name:'Diversification' , description:'Investing in startups is highly speculative, and every Subscription carries the risk of loss. By investing small sums in multiple transactions, you can reduce your risk in comparison to a large Subscription in a single company.', 
    toggleText:'I understand that it’s safer to split money across many Subscriptions across asset classes',toggle:true
    },
    {id:4,number:'04.' , name:'Cancellation' , description:'We are planning to remove this point. You may cancel your Subscription up to 24 hours prior to the close of the deal. After that, your transaction will be final and you will no longer have access to your funds', 
    toggleText:'I understand that I can’t cancel after the 48-hour cancellation deadline',toggle:true
    },
    {id:5,number:'05.' , name:'Research' , description:'Research independently & review the documentation supplied by each company. Obtain impartial legal, accounting, and financial counsel. If you have any questions or require additional information, please contact us through support.', 
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
    const [predefinedConsent ,setPredefinedConsent] = useState(false)
    const [gridxsFirst, setGridxsFirst] = useState(2)
    const [gridxsSecond, setgridxsSecond] = useState(6)
    const ratio = parseInt(window.innerWidth);
    const  {userData}  = useSelector((state)=> state.loginData)
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange =(index)=>{
        let new_array = value;
        
        new_array[index].toggle = !new_array[index].toggle;
        console.log( new_array[index].toggle)
        setValue([...new_array])
    }

    const notify = (data) => {
        toast.error(data)
    }
    useEffect(()=>{
            ConsentSerivce.getUserConsent(userData.id).then((response)=>{
                if(response.status === 200){
                    setPredefinedConsent(true)
                }else{
                    setPredefinedConsent(false)
                }
            })
    },[])

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
  
    const handleSubmit = ()=>{
       
        const data = {
            user_id:userData.id,
            risk_consent:value[0].toggle,
            limited_transfer_consent:value[1].toggle,
            diversification_consent:value[2].toggle,
            cancellation_consent:value[3].toggle,
            research_consent:value[4].toggle
        }
        if(predefinedConsent === true){
            navigate('/startup-sectors')
        }else{
            try {
                ConsentSerivce.createUserConsent(data).then(
                    (response) => {
                        console.log(response)
                        if (response.status === 201 || response.status === 200) {
                            // dispatch(userLoginAction({...userData , nationality:nationality.toString() ,country:country.toString()} ))
                            navigate('/startup-sectors')
                        }
                        else{
                            console.log("error")
                        }
                    })
            }
            catch {
                notify("Try after few minutes")
            }
        }
    }
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
                                <div onClick={handleSubmit} className="button-section-finished">
                                <button  className="finished-btn" >Finished</button>
                                </div>
                             </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}