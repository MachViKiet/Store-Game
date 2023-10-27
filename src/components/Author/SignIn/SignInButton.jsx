import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";

function SignInButton(progs) {
  const style = progs.sx ? progs.sx : 'text.primary'
  return (
    <>
      <AccountCircleOutlinedIcon fontSize="medium" />
      <Button
        sx={{
          fontSize: "16px",
          color: style.color
        }}
      >
        <Box sx={{ fontSize: "16px", color: style.color }}>Sign In</Box>
      </Button>
      \
      <Button
        sx={{
          fontSize: "16px",
          color: style.color
        }}
      >
        <Box sx={{ fontSize: "16px",  color: style.color }}>Register</Box>
      </Button>
    </>
  );
}

export default SignInButton;
