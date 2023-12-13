/* eslint-disable no-unused-vars */
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, forwardRef, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import theme from "~/theme";
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import { authAPI } from "~/apis/Auth_api";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95%",
  maxWidth: "600px",
  height: "80%",
  bgcolor: "transparent",
  boxShadow: 24,
};
const center = {
  position: "relative",
  top: "50%",
  left: "30%",
};
function Register() {
  const [open, setOpen] = useState(false);
  const [remember, setRemember] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("Customer");

  const [errorAlert, setErrorAlert] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const isValidPhone = (phone) => {
    // Thực hiện kiểm tra số điện thoại hợp lệ
    return true; // Thay true bằng kết quả kiểm tra số điện thoại của bạn
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValidEmail = email && /\S+@\S+\.\S+/.test(email);
    const isValidPhoneValue = phone && isValidPhone(phone);
    const isValidUsername = username && username.trim() !== "";
    const isValidPassword = password && password.trim() !== "";
    const isValidConfirmPassword =
      confirmPassword === password && password !== "";

    // Set lỗi cho từng khung
    setEmailError(!isValidEmail);
    setPhoneError(!isValidPhoneValue);
    setUsernameError(!isValidUsername);
    setPasswordError(!isValidPassword);
    setConfirmPasswordError(!isValidConfirmPassword);

    // Nếu có lỗi, hiển thị thông báo lỗi
    if (!email) {
      setErrorAlert("Email is required");
    } else if (!isValidEmail) {
      setErrorAlert("Email is invalid");
    } else if (!phone) {
      setErrorAlert("Phone is required");
    } else if (!isValidPhoneValue) {
      setErrorAlert("Phone number is invalid");
    } else if (!username) {
      setErrorAlert("Username is required");
    } else if (!isValidUsername) {
      setErrorAlert("Username is invalid");
    } else if (!password) {
      setErrorAlert("Password is required");
    } else if (!isValidPassword) {
      setErrorAlert("Password is invalid");
    } else if (!confirmPassword) {
      setErrorAlert("Confirm password is required");
    } else if (!isValidConfirmPassword) {
      setErrorAlert("Passwords do not match");
    } else {
      setIsSubmit(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  useEffect(() => {
    const Register = () => {
      fetch("https://store-game-server.onrender.com/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          phone: phone,
          role: role,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          setSuccess(true);
          setOpen(true);

          return response.json();
        })
        .then((res) => {
          console.log("Server response:", res);
          if (isSubmit && res.status === "OK" && res.message === "SUCCESS") {
            navigate("/store-game");
          } else {
            setErrorAlert(res.message);
          }
          // Xử lý phản hồi từ server tại đây
        })
        .catch((error) => {
          console.error("There was an error:", error);
          setErrorAlert("Any problems happened");
          setOpen(true);
          // Xử lý lỗi tại đây
        });

      setIsSubmit((cur) => !cur);
    };

    const register = () => authAPI.registerAPI(
      username,
      email,
      password,
      confirmPassword,
      phone,
      role,
    )

    if (isSubmit == true) {
      register().then((res)=>{
        console.log(res)
        if (res.status === "OK" && res.message === "SUCCESS") {
          setSuccess(true)
          setOpen(true);
          setTimeout(()=>{
            navigate("/store-game/login");
          }, 1000)
        } else {
          setErrorAlert(res.message);
          setOpen(true);
        }
        // Xử lý phản hồi từ server tại đây
      }).catch((error) => {
        setErrorAlert("Any problems happened");
        setOpen(true);
        // Xử lý lỗi tại đây
      });
      setIsSubmit(false)
    }
  }, [email, phone, username, password, confirmPassword, isSubmit, role, navigate]);

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

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
        {success ? (
          <Alert severity="success" sx={{ width: "100%" }}>
            Registration successful! Redirecting...
          </Alert>
        ) : (
          <Alert severity="error" sx={{ width: "100%" }}>
            {errorAlert}
          </Alert>
        )}
      </Snackbar>

      <Box
        sx={{
          backgroundColor: (theme) => {
            return theme.palette.mode === "dark" ? "#1A2027" : "#f0f2f5";
          },
          height: "100vh",
          color: "#f5f5f5",
          background: 'url(https://t3.ftcdn.net/jpg/03/95/37/18/360_F_395371888_kmvHp9FVzO4NI0pbYdLyZSW50aUqwgxX.jpg)',
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
                  pt: 4,
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
                    {/* Header */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      {/* <Avatar sx = {{ color: '#fff', bgcolor: '#31314d', height: '60px', width: '60px' }}> */}
                      <AccountCircleOutlinedIcon
                        color="#fff"
                        fontSize="large"
                      />
                      {/* </Avatar> */}
                      <Typography component="h1" variant="h5" pt={1}>
                        Sign Up
                      </Typography>
                    </Box>
                    <Box
                      component="form"
                      noValidate
                      onSubmit={handleSubmit}
                      sx={{ mt: 2 }}
                    >
                      <Grid container spacing={1}>
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
                            type="email"
                            name="email"
                            autoComplete="email"
                            error={emailError}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            name="phone"
                            label="Number phone"
                            type="phone"
                            id="phone"
                            autoComplete="phone"
                            error={phoneError}
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            name="username"
                            label="Username"
                            type="username"
                            id="username"
                            autoComplete="new-username"
                            error={usernameError}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </Grid>
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
                            autoComplete="new-password"
                            error={passwordError}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em", textAlign: "center" }}
                        >
                          <TextField
                            required
                            fullWidth
                            name="confirm-password"
                            label="Confirm Password"
                            type="password"
                            id="confirm-password"
                            autoComplete="confirm-password"
                            error={confirmPasswordError}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                          />
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "1.5em", mr: "1.5em"}}
                        >
                          <TextField
                            id="standard-select-currency"
                            select
                            value={role}
                            variant="outlined"
                            sx = {{
                              width:'100%'
                            }}
                            onChange={(e)=> setRole((cur)=> cur = e.target.value)}
                          >
                            {currencies.map((option) => (
                              <MenuItem sx = {{bgcolor: '#fff', color: '#000'}} key={option.value} value={option.value}>
                                {option.value}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{
                            my: 1,
                            ml: "1.5em",
                            mr: "1.5em",
                            textAlign: "center",
                          }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="medium"
                            sx={{
                              borderRadius: "10px",
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#FF9A01",
                              textAlign: "center",
                              display: "block",
                              margin: "0 auto",
                            }}
                          >
                            Register
                          </Button>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sx={{ ml: "3em", mr: "3em", textAlign: "center" }}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                          >
                            <Typography
                              variant="body1"
                              component="span"
                              sx={{
                                marginTop: "10px",
                                display: { xs: "none", sm: "block" },
                              }}
                            >
                              Already have an Account?
                            </Typography>
                            <Typography
                              sx={{
                                color: "#beb4fb",
                                cursor: "pointer",
                                flex: 1,
                              }}
                              onClick={() => {
                                navigate("/store-game/login");
                              }}
                            >
                              Sign In
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Box>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>

            {/* Background-image */}
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

export default Register;

const currencies = [
  {
    value: "Seller",
  },
  {
    value: "Customer",
  },
];
