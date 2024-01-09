import { Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";

function UserInfor(progs) {
  const Navigate = useNavigate()

  const HANDLECLICK = () => {
    Navigate('/store-game/' + progs.role.toLowerCase())
  }
  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx = {{
          textTransform: 'capitalize'
        }}

        onClick={HANDLECLICK}
      >
        <AccountCircleOutlinedIcon fontSize="large"  sx ={{mr: 1}} /> {progs.username}
      </Button>
    </div>
  );
}

export default UserInfor;
