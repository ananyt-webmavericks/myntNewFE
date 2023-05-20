import React from "react";
import { Container } from "@mui/material";
import DrawerMain from "../component/Dashboard/Drawer";
const ChatWithExpert = () => {
  const location = window.location.pathname;
  return (
    <div style={{ display: "flex" }}>
      {location.includes("/dashboard") && <DrawerMain />}
      <div className="dashboard-container">
        <Container maxWidth="lg">
          <a
            href="https://wa.me/+918769740854"
            className="whatsapp_float"
            target="_blank"
            // rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp whatsapp-icon"></i>
          </a>
        </Container>
      </div>
    </div>
  );
};
export default ChatWithExpert;
