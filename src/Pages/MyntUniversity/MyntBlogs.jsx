
import { Container } from "@mui/material";
import React from "react";
import DrawerMynt from "../../component/Dashboard/DrawerMynt";
import '../../css/Dashboard/dashboard.css';
import Footer from "../../component/Footer";
import { useState } from "react";
import MyntBlogsMain from "../../component/MyntUniversity/myntBlogs";
const MyntBlogs = () => {
    const location = window.location.pathname;
    const ratio = parseInt(window.innerWidth);


    return (
        <>
            <div style={{ display: 'flex', position: 'relative' }}>
                {location.includes('/myntUniversity') && <DrawerMynt height={'inherit'} />}
                <div className="dashboard-container">
                    <Container maxWidth="lg">
                            <MyntBlogsMain />
                    </Container>
                </div>
            </div>
            {ratio < 1000 ? null : <Footer />}
        </>
    )
}
export default MyntBlogs;