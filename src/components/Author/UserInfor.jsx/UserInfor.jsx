import { Button } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

function UserInfor(progs) {


  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        sx = {{
          textTransform: 'capitalize'
        }}
      >
        <AccountCircleOutlinedIcon fontSize="large"  sx ={{mr: 1}} /> {progs.username}
      </Button>
    </div>
  );
}

export default UserInfor;
