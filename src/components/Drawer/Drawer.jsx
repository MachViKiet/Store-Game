import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CustomLogo from "../Logo/Logo";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import SignInButton from "../Author/SignIn/SignInButton";

export default function MenuDrawer(progs) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* Logo */}
      <Box
        sx={{
          width: "100%",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#252525",
        }}
      >
        <CustomLogo
          sx={{
            width: "70%",
            height: "60px",
          }}
        />
      </Box>

      <List>
        {[
          { key: "Home", icon: <HomeOutlinedIcon /> },
          { key: "WishList", icon: <LoyaltyOutlinedIcon /> },
          { key: "News", icon: <FeedOutlinedIcon /> },
        ].map((text) => (
          <ListItem key={text.key} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.key} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider
        sx={{
          bgcolor: "#ccccccb5",
        }}
      />

      <List>
        {TYPEGAME.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GradeOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider
        sx={{
          bgcolor: "#ccccccb5",
        }}
      />
      <Box sx = {{
        width: '100%',
        height: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <SignInButton />
      </Box>
    </Box>
  );

  return (
    <Box sx={progs.sx}>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{progs.value}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              "& .MuiPaper-root": {
                bgcolor: "#000017",
                "::-webkit-scrollbar": {
                  width: "5px",
                },

                /* Track */
                "::-webkit-scrollbar-track": {
                  background: "#fff",
                  mr: 5,
                  pl: 5,
                },

                /* Handle */
                "::-webkit-scrollbar-thumb": {
                  background: "#888",
                },

                /* Handle on hover */
                "::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              },
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}

const TYPEGAME = [
  { key: "type-01", value: "Action", icon: "" },
  { key: "type-02", value: "Adventure", icon: "" },
  { key: "type-03", value: "Role_Playing", icon: "" },
  { key: "type-04", value: "Simulation", icon: "" },
  { key: "type-05", value: "Strategy", icon: "" },
  { key: "type-06", value: "Sports & Racing", icon: "" },
  { key: "type-07", value: "Horror", icon: "" },
  { key: "type-08", value: "Casual", icon: "" },
  { key: "type-09", value: "Role-Playing", icon: "" },
  { key: "type-10", value: "Survival", icon: "" },
];
