import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "@mui/material/Avatar";

function Header(props) {
  const profilePage = () => {
    props.history.push("/profile");
  };
  
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" color="white">
            Form Builder
          </Typography>

          <Button
            style={{
              position: "sticky",
              mixBlendMode: "hard-light",
              left: 1150,
            }}
            startIcon={<Avatar src="/broken-image.jpg" />}
            onClick={profilePage}
          />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default withRouter(Header);
