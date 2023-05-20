import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import LiveDetailsMain from "../component/LiveDealsDetails";
import Footer from "../component/Footer";
const LiveDealsDetails = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <LiveDetailsMain />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default LiveDealsDetails;
