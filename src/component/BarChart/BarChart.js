import React from "react";
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const options = {
    title: {
        text: ''
    },
    series: [{
        data: [100,200,30,100,30,50,100]
    }],
}

export default function BarChart() {
    return (
        <>
            <HighchartsReact
                
                highcharts={Highcharts}
                options={options}
            />
        </>
    )
}