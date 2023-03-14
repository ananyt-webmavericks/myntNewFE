import React, { useState, useEffect } from "react";
import { Card, CardContent, Grid } from "@mui/material";
import '../../css/StartupSectors/startupSectors.css';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from "react-router-dom";
const data = [
    { id: 1, name: 'HealthTech', isChecked: true },
    { id: 2, name: 'Artificial Intelligence', isChecked: true },
    { id: 3, name: 'Blockchain', isChecked: true },
    { id: 4, name: 'Electric Vehicles', isChecked: true },
    { id: 5, name: 'AgriTech', isChecked: true },
    { id: 6, name: 'EdTech', isChecked: true },
    { id: 7, name: 'Augmented Reality', isChecked: true },
    { id: 8, name: 'E-commerce', isChecked: true },
    { id: 9, name: 'Foods & Beverages', isChecked: true },
    { id: 10, name: 'SaaS', isChecked: true },
    { id: 11, name: 'FinTech', isChecked: true },
    { id: 12, name: 'Virtual Reality', isChecked: true },
    { id: 13, name: 'InsurTech', isChecked: true },
    { id: 14, name: 'Cryptocurrency', isChecked: true },
    { id: 15, name: 'Entertainment', isChecked: true },
]
export default function StartupSectorsMain() {

    const [value, setValue] = useState(data)
    const [gridxsFirst, setGridxsFirst] = useState(3)
    const [gridxsSecond, setgridxsSecond] = useState(4)
    const ratio = parseInt(window.innerWidth);
    const navigate = useNavigate()
    const handleChange = (index) => {
        let new_array = value;
        new_array[index].isChecked = !new_array[index].isChecked;
        console.log(new_array[index].isChecked)
        setValue([...new_array])
    }
    const handleSubmit = () => {
        navigate('/dashboard')
    }

    useEffect(() => {

        if (ratio < 900) {

            setGridxsFirst(2)
            setgridxsSecond(6)
        }
        if (ratio < 572) {

            setGridxsFirst(1)
            setgridxsSecond(12)
        }
    }, [])
    return (
        <div className="startup-sectors-container">
            <div className="get-started-section">
                <h2 className="get-started-heading startup" style={{ fontWeight: "bolder", fontFamily: 'poppins' }}>
                    Please choose startup sectors you’re interested in
                </h2>

                <Card className="card-investors">
                    <CardContent style={{ padding: '0' }}>
                        <Grid container spacing={gridxsFirst}>
                            {value.map((item, index) => {
                                return (
                                    <Grid key={index} item xs={gridxsSecond}>
                                        <div
                                            onClick={() => handleChange(index)}
                                            className="sectors-box-container"
                                            style={{ cursor: "pointer" }}>
                                            <span className="startup-category-names">{item.name}</span>
                                            <div className="check-status-sectors"
                                                style={item.isChecked
                                                    ?
                                                    { color: 'white', background: '#01965D' }
                                                    : { color: 'white', background: 'white', border: "none", boxShadow: "none" }}>
                                                <DoneIcon style={{ width: '20px', height: '20px' }} /></div>
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                        <button className="submit-btn-startup" onClick={handleSubmit}>Submit</button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}