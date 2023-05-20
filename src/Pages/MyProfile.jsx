import React from "react";
import { CssBaseline , Container } from "@mui/material";
import MyProfileMain from "../component/MyProfile";
import Footer from "../component/Footer";
const MyProfile = ()=>{
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
           <MyProfileMain />
        </Container>
        <Footer/>
    </React.Fragment>
    )
}
export default MyProfile