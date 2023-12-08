/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

// import bg from "./bg/Login.svg";
// import Logo from "~/assets/Logo.png";

// import ModeButton from "~/components/Mode/Button";
import theme from "~/theme";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginAPI } from "~/apis/Auth_api/Login";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: '500px',
  height: "70%",
  bgcolor: "transparent",
  boxShadow: 24,
};

function Login() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const vertical = "top";
  const horizontal = "right"; 
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorAlert, setErrorAlert] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (event) => {
    setOpen(false);
    event.preventDefault();

    setIsSubmit((cur)=>!cur);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  useEffect(()=>{
    const login = ()=>{
        fetch("http://localhost:5000/api/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((res) => {
            console.log("Server response:", res);
            if (isSubmit && res.status === "OK") {
              console.log(res)
              // Đánh dấu token đã đăng nhập
              // todo ...

              localStorage.setItem('accessToken', res.access_token)
              localStorage.setItem('user_id', res.user_id)


              window.location= "/store-game/" ;
              
            } else {
              setErrorAlert(res.messgae);
              console.log(res.messgae)
              setOpen(true);
            }
            // Xử lý phản hồi từ server tại đây
          })
          .catch((error) => {
            console.error("There was an error:", error);

            setErrorAlert("có xíu lỗi");
            console.log(error)
            setOpen(true);
            // Xử lý lỗi tại đây
          });
          setIsSubmit((cur)=> !cur)
    }
    if ( isSubmit  == true ){
        login()
    }
  }, [email, password, isSubmit, navigate])

  return (
    <ThemeProvider theme={theme}>
            {/* <h1>{isSubmit ? "true" : "false"}</h1> */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {errorAlert}
        </Alert>
      </Snackbar>

      <Box
        sx={{
          backgroundColor: (theme) => {
            return theme.palette.mode === "dark" ? "#1A2027" : "#f0f2f5";
          },
          height: "100vh",
          color: "#f5f5f5",
          background: 'url(https://img.freepik.com/premium-photo/abstract-backgound-video-game-esports-scifi-gaming-cyberpunk-vr-virtual-reality-simulation-metaverse-scene-stand-pedestal-stage-3d-illustration-rendering-futuristic-neon-glow-room_42100-3372.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Header */}
        {/* <Box
          sx={{
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            background:
              "url(https://divineshop.vn/static/0de2668c294edf9d5fd8a8647b2c65b6.png)",
          }}
        >
          <ModeButton />
        </Box> */}

        {/* Content */}
        <Box
          sx={boxstyle}
          alignItems="center"
          style={{
            backgroundColor: `transparent`,
            borderRadius: "20px",
          }}
        >
          <Grid container>
            <Grid item xs={12} sm={12} lg={12}>
              <Box
                sx={{
                  backgroundSize: "cover",
                  height: "fit-content",
                  pb: 7,
                  backgroundColor: (theme) => {
                    return theme.palette.mode === "dark"
                      ? "#3f51b5"
                      : "#2579f2";
                  },
                  borderRadius: "20px",
                }}
              >
                <ThemeProvider theme={theme}>
                  <Container>
                    <Box height={35} />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      {/* <Avatar sx = {{ color: '#fff', bgcolor: '#31314d', height: '60px', width: '60px' }}> */}
                        <LockOutlinedIcon color="#fff" fontSize="large" />
                      {/* </Avatar> */}
                      <Typography component="h1" variant="h4" pt={1}>
                        Sign In
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>

{/* Email */}
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Grid>
{/* Passwork */}
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            value={password}
                            autoComplete="new-password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <Stack direction="row" sx = {{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'space-between'
                          }}>
                            <FormControlLabel
                              sx={{
                                display: { xs: "none", sm: "block" },
                              }}
                              onClick={() => setRemember(!remember)}
                              control={<Checkbox checked={remember} />}
                              label="Remember me"
                            />
                            <Typography
                              xs={12}
                              variant="body1"
                              component="span"
                              onClick={() => {}}
                              style={{ marginTop: "10px", cursor: "pointer" }}
                            >
                              Forgot password?
                            </Typography>
                          </Stack>
                        </Grid>

                        <Grid item xs={12} 
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                          >
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="medium"
                            sx={{
                              width: '1',
                              borderRadius: '10px',
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#FF9A01",
                              textAlign: "center",
                              display: "block",
                              margin: "0 auto",
                            }}
                          >
                            Sign in
                          </Button>
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "3em", mr: "3em", textAlign: "center" }}
                        >
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: "10px" }}
                            >
                              Not registered yet?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                navigate("/store-game/register");
                              }}
                              >
                                Create an Account
                              </span>
                            </Typography>
                          </Stack>
                        </Grid>

                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>


              </Box>
            </Grid>
            {/* <Grid item lg={6}>
              <Box
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "70%",
                  color: "#f5f5f5",
                }}
              ></Box>
              <Box
                style={{
                  backgroundImage: `url(${Logo})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "30%",
                }}
              ></Box>
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Login;
