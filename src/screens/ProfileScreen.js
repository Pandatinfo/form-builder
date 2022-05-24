import * as React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid, Typography, Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router-dom";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

function ProfilePage(props) {
  const history = useHistory();
  return (
    <>
      {localStorage.getItem("auth-token") ? (
        <>
          <Button
            style={{ marginLeft: 20, marginUp: 30 }}
            align="left"
            startIcon={<ArrowBackIosOutlinedIcon />}
            onClick={history.goBack}
          >
            Back
          </Button>
          <Grid align="center">
            <Avatar
              src="/broken-image.jpg"
              style={{ margin: "20px auto", background: "lightblue" }}
              sx={{ width: 250, height: 250 }}
            />
            <Typography mt={2} variant="h3" component="h2">
              Administrator
            </Typography>
            <Typography mt={2} variant="h3" component="h2">
              Iamadmin
            </Typography>
            <Button
              variant="contained"
              style={{ marginTop: 16 }}
              startIcon={<LogoutIcon />}
              onClick={() => {
                props.handleLogout();
              }}
            >
              Logout
            </Button>
          </Grid>
        </>
      ) : (
        history.push("/login")
      )}
    </>
  );
}

export default ProfilePage;
