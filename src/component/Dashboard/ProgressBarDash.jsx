import React from "react";
import '../../css/Dashboard/dashboard.css';

export default function ProgressBarDash() {
    return (
        <>
            <span className="completion-status">1 out of 3 completed</span>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '12px' }}>
                <div className="bottom-completion-container">
                    <div className="top-completion-container"></div>
                </div>
                <div><span className="calculated-percentage">35%</span></div>
            </div>
        </>
    )
}