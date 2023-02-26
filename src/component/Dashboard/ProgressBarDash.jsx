import React ,{useState , useEffect} from "react";
import '../../css/Dashboard/dashboard.css';
import services from "../../service/investor.kyc";
import { useSelector } from "react-redux";
export default function ProgressBarDash(props) {

    const [data, setData] = useState({})
    const { userData } = useSelector((state) => state.loginData)
    useEffect(() => {
      services.getInvestorKycData(userData.id).then((response)=>{
        setData(response.data)
        props.fetchValue(response.data)
      })
    }, [])

    

    return (
        <>
            <span className="completion-status">1 out of 3 completed</span>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                <div className="bottom-completion-container">
                    <div style={data?.bank_account !=='' ? {maxWidth:'90%'}:{maxWidth:'45%'}} className="top-completion-container"></div>
                </div>
                <div><span className="calculated-percentage">{data?.bank_account !=='' ? '90%': '45%'}</span></div>
            </div>
        </>
    )
}