import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Grid, Paper, Avatar, TextField, Button, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import { AlertTitle } from "@mui/material";

const Login = () => {
  const paperStyle = {
    padding: 10,
    height: "auto",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [showAlert, setShowAlert] = useState(null);

  const history = useHistory();
  if (localStorage.getItem("auth-token")) {
    history.push("/dashboard");
    window.history.pushState(null, document.title, window.location.href);
    window.onpopstate = function (event) {
      history.go(1);
    };
  }

  const handleUsernameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  let hardcodedCred = {
    username: "admin",
    password: "admin",
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      usernameInput === hardcodedCred.username &&
      passwordInput === hardcodedCred.password
    ) {
      const token = "123456abcdef";
      localStorage.setItem("auth-token", token);

      history.push("/dashboard");
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      {showAlert ? (
        <Alert severity="error" onClose={() => setShowAlert(null)}>
          <AlertTitle>
            Wrong Combination of username and password.{" "}
            <strong>Please try again</strong>
          </AlertTitle>
        </Alert>
      ) : null}
        <Box noValidate sx={{ mt: 1 }}>
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <LockOutlinedIcon />
                </Avatar>
                <h2>Sign In</h2>
              </Grid>
              <TextField
                label="Username"
                name="username"
                value={usernameInput}
                onChange={handleUsernameChange}
                placeholder="Enter username"
                fullWidth
                required
              />
              <TextField
                style={{ marginTop: 8 }}
                label="Password"
                name="password"
                value={passwordInput}
                onChange={handlePasswordChange}
                placeholder="Enter password"
                type="password"
                fullWidth
                required
              />
              <Button
                onClick={handleLoginSubmit}
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
              >
                Sign in
              </Button>
            </Paper>
          </Grid>
        </Box>
    </>
  );
};
export default Login;
