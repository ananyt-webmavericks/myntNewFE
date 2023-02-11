import React from "react";
import '../../css/Dashboard/dashboard.css';

export default function ProgressBarDash({showDeals}) {
    return (
        <>
            <span className="completion-status">1 out of 3 completed</span>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                <div className="bottom-completion-container">
                    <div style={showDeals ? {maxWidth:'90%'}:{maxWidth:'35%'}} className="top-completion-container"></div>
                </div>
                <div><span className="calculated-percentage">{showDeals ? '90%': '35%'}</span></div>
            </div>
        </>
    )
}