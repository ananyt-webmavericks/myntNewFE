import React  , {useState ,useEffect} from "react";
import { Grid, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { verifyBankKycAction } from "../../Redux/actions/verifyKycAction";
const initialValues = {name:'' , account_number:'' , ifsc_code:''}

export default function BankDetails() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [value, setValue] = useState(initialValues)
    const {bankDetails} = useSelector((state)=> state.panData)

    console.log(bankDetails)
    const handleChange = (e)=>{
        setValue({[e.target.name] : e.target.value})
    }
    const handleSubmit = () =>{
        dispatch(verifyBankKycAction(value))
    }

    // useEffect(() => {
    //     if(panDetails === "PAN verification done successfully!"){
    //       navigate('/complete-your-profile/payment-details')
    //     }
    //   }, [panDetails])
    return (
        <div className="verify-number-container">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" value={value.name} name="name" onChange={handleChange} placeholder="Name in bank account" className="verifyAddress-input-section" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" value={value.account_number} name="account_number" onChange={handleChange} placeholder="account number" className="verifyAddress-input-section" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="verifyAddress-input">
                        <input type="text" value={value.ifsc_code} name="ifsc_code" onChange={handleChange} placeholder="IFSC Code" className="verifyAddress-input-section" />
                    </div>
                </Grid>
            </Grid>
            <div className="verify-button-container">
                <Button onClick={handleSubmit} varient="contained" className="verify-button">Submit</Button>
            </div>
        </div>
    )
}