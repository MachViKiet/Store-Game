import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


function SignInButton(progs) {
  const style = progs.sx ? progs.sx : 'text.primary'

  const navigate = useNavigate();
  const handleSingInButton = () => {
    navigate("/store-game/login");
  }
  const handleSingUpButton = () => {
    navigate("/store-game/register");
  }
  return (
    <>
      <AccountCircleOutlinedIcon fontSize="medium" />
      <Button
        sx={{
          fontSize: "16px",
          color: style.color
        }}
        onClick={() => handleSingInButton()}
      >
        <Box sx={{ fontSize: "16px", color: style.color }}>Sign In</Box>
      </Button>
      \
      <Button
        sx={{
          fontSize: "16px",
          color: style.color
        }}
        onClick={() => handleSingUpButton()}
      >
        <Box sx={{ fontSize: "16px",  color: style.color }}>Register</Box>
      </Button>
    </>
  );
}

export default SignInButton;
