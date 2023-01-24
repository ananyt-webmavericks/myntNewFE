import React , {useState ,useEffect} from "react";
import { Card, CardContent, Grid } from "@mui/material";
import '../../css/StartupSectors/startupSectors.css';
import DoneIcon from '@mui/icons-material/Done';
const data = [
    { id: 1, name: 'HealthTech', isChecked: false },
    { id: 2, name: 'Artificial Intelligence', isChecked: false },
    { id: 3, name: 'Blockchain', isChecked: false },
    { id: 4, name: 'Electric Vehicles', isChecked: false },
    { id: 5, name: 'AgriTech', isChecked: false },
    { id: 6, name: 'EdTech', isChecked: false },
    { id: 7, name: 'Augmented Reality', isChecked: false },
    { id: 8, name: 'E-commerce', isChecked: false },
    { id: 9, name: 'Foods & Beverages', isChecked: false },
    { id: 10, name: 'SaaS', isChecked: false },
    { id: 11, name: 'FinTech', isChecked: false },
    { id: 12, name: 'Virtual Reality', isChecked: false },
    { id: 13, name: 'InsurTech', isChecked: false },
    { id: 14, name: 'Cryptocurrency', isChecked: false },
    { id: 15, name: 'Entertainment', isChecked: false },
]
export default function StartupSectorsMain() {

    const [value, setValue] = useState(data)
    const [gridxsFirst, setGridxsFirst] = useState(3)
    const [gridxsSecond, setgridxsSecond] = useState(4)
    const ratio = parseInt(window.innerWidth);

    const handleChange =(index)=>{
        let new_array = value;
        new_array[index].isChecked = !new_array[index].isChecked;
        console.log( new_array[index].isChecked)
        setValue([...new_array])
    }

    useEffect(() => {

        if (ratio < 900) {

            setGridxsFirst(2)
            setgridxsSecond(6)
        }
        if(ratio < 572) {

            setGridxsFirst(1)
            setgridxsSecond(12)
        }
    }, [])
    return (
        <div className="startup-sectors-container">
            <div className="get-started-section">
                <span className="get-started-heading startup">Please choose startup sectors you’re interested in</span>
                
                <Card className="card-investors">
                    <CardContent>
                        <Grid container spacing={gridxsFirst}>
                            {value.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={gridxsSecond}>
                                        <div className="sectors-box-container">
                                            <span className="startup-category-names">{item.name}</span>
                                            <div className="check-status-sectors" onClick={()=>handleChange(index)} style={item.isChecked ? {color: 'white' ,background:'#01965D' }:{color: 'black' ,background:'white' } }><DoneIcon style={{width:'20px' , height:'20px'}} /></div>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <button className="submit-btn-startup">submit</button>
                    </CardContent>
                </Card>
                </div>
        </div>
    )
}