import React ,{useState , useEffect} from "react";
import '../../css/Dashboard/dashboard.css';
import services from "../../service/investor.kyc";
import { useSelector } from "react-redux";
export default function ProgressBarDash(props) {
    const _ = require('lodash');
    const [data, setData] = useState({})
    const { userData } = useSelector((state) => state.loginData)
    const [noData , setNoData] = useState(false)

    useEffect(() => {
      services.getInvestorKycData(userData.id).then((response , error)=>{
        if(response.status === 200){
            setData(response?.data)
            props.fetchValue(response?.data)
        }
      })
    }, [])
    console.log(data)

    useEffect(() => {
        if(_.isEmpty(data)){
          setNoData(true)
        }else{
          setNoData(false)
        }
      }, [data])

    
    return (
        <>
            <span className="completion-status">{noData ? "1" :data?.bank_account !=='' ? '2': '1'} out of 3 completed</span>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                <div className="bottom-completion-container">
                    <div style={noData ? {maxWidth:'45%'}:data?.bank_account !=='' ? {maxWidth:'90%'}:{maxWidth:'45%'}} className="top-completion-container"></div>
                </div>
                <div><span className="calculated-percentage">{noData ? "45%" :data?.bank_account !=='' ? '90%': '45%'}</span></div>
            </div>
        </>
    )
}