import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Footer from "../component/Footer";
import LiveDetailsMainClone from "../component/LiveDealsDetails/indexClone";
const LiveDealsDetailsClone = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <LiveDetailsMainClone />
      </Container>
      <Footer />
    </React.Fragment>
  );
};
export default LiveDealsDetailsClone;
