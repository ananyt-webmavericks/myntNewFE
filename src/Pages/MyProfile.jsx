import React from "react";
import { CssBaseline , Container } from "@mui/material";
import MyProfileMain from "../component/MyProfile";
const MyProfile = ()=>{
    return(
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
           <MyProfileMain />
        </Container>
    </React.Fragment>
    )
}
export default MyProfile