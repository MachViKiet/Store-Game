import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function  SignInButton() {
  const navigate = useNavigate();
  const handleSingInButton = () => {
    navigate("/store-game/login");
  }
  return (
    <>
      <AccountCircleOutlinedIcon fontSize="medium" />
      <Button
        sx={{
          fontSize: "16px",
        }}
        onClick={() => handleSingInButton()}
      >
        <Box sx={{ fontSize: "16px" }}>Sign In</Box>
      </Button>
      \
      <Button
        sx={{
          fontSize: "16px",
        }}
      >
        <Box sx={{ fontSize: "16px" }}>Register</Box>
      </Button>
    </>
  );
}

export default SignInButton;
