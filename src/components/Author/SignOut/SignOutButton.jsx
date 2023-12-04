import { Button } from "@mui/material";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function SignOutButton(progs) {
  const style = progs.sx ? progs.sx : 'text.primary'

  const handleSingInButton = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user_id");
    window.location= "/store-game/" ;
  }

  return (
    <>
      <Button
        sx={{
          fontSize: "16px",
          color: style.color,
          ml: 2
        }}
        onClick={() => handleSingInButton()}
      >
            <ExitToAppIcon fontSize="large"  sx ={{mr: 1}}/> Sign Out
      </Button>
    </>
  );
}

export default SignOutButton;
