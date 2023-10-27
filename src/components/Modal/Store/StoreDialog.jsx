import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardMedia from "../../Card/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Divider from "@mui/material/Divider";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function StoreDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isInStock = (status) => {
    return status ? (
      <>
        <span
          style={{
            color: "rgb(76 194 81)",
            opacity: "1",
            fontWeight: "700",
          }}
        >
          In stock
        </span>
      </>
    ) : (
      <>
        <span
          style={{
            color: "rgb(255 142 142)",
            opacity: "1",
            fontWeight: "700",
          }}
        >
          Out of stock
        </span>
      </>
    );
  };

  return (
    <React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open max-width dialog
      </Button> */}
      <Typography
        variant="body1"
        component="h2"
        onClick={handleClickOpen}
        sx={{
          "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
          },
        }}
      >
        {/* learn more */}
        <RemoveRedEyeIcon sx = {{color:"#fff"}}/>
      </Typography>

      <Dialog
        fullWidth={"md"}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        maxHeight={"60vh"}
        sx = {{
          '& .MuiPaper-root':{
            bgcolor: 'cover.bg4'
          }
        }}
      >
        {/* <DialogTitle>Information product</DialogTitle> */}
        <DialogContent
          sx={{
            maxHeight: "70vh",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
              {CARDMEDIA.map((image) => {
                return (
                  <>
                    <CardMedia disableMore image={image} />
                  </>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={7}>
              <Box
                sx={{
                  pl: {
                    sm: 2,
                  },
                }}
              >
                {/* Type product*/}
                <Typography
                  sx={{
                    fontSize: "14px",
                    opacity: "0.6",
                  }}
                >
                  Product
                </Typography>

                {/* Name product */}
                <Typography
                  sx={{
                    fontSize: "26px",
                    fontWeight: "550",
                  }}
                >
                  VTTol VR
                </Typography>

                {/* Status */}
                <Typography
                  sx={{
                    fontSize: "14px",
                    pt: 1,
                  }}
                >
                  Status: {isInStock(ISINSTOCK)}
                </Typography>

                {/* Category */}
                <Typography
                  sx={{
                    fontSize: "14px",
                    pb: 1,
                  }}
                >
                  Category : Action, Simulation
                </Typography>

                {/* PRICE */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "21px",
                      fontWeight: "600",
                    }}
                  >
                    490,000 VND
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <NotificationsNoneOutlinedIcon
                      fontSize="medium"
                      sx={STYLE_ICON}
                    />
                    <FavoriteBorderIcon fontSize="medium" sx={STYLE_ICON} />
                  </Box>
                </Box>

                {/* Button */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    mt: 2,

                    "& button": {
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color:'text.primary',
                      "&.MuiButton-containedPrimary": {
                        backgroundColor: "cover.bg1",
                      },
                      "&.MuiButton-outlinedPrimary": {
                        borderColor: "text.primary",
                      },
                      "& .MuiSvgIcon-root": {
                        mr: 1,
                      },
                    },
                    gap: 2,
                  }}
                >
                  <Button variant="outlined" size="large">
                    <PaymentIcon fontSize="medium" /> Buy now
                  </Button>
                  <Button variant="contained" size="large">
                    <LocalGroceryStoreOutlinedIcon /> Add to Basket
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ background: "#ccc", mt: 4, mb: 4 }} />

          <Grid container spacing={2}>
            {/* inf */}
            <Grid item xs={12} sm={3}>
              <Typography>Product details</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography>
                VTOL VR is a near-futuristic combat flight game built for
                Virtual Reality. Pilot advanced multi-role jets, using your
                hands to flip switches, press buttons, and manipulate the
                virtual flight controls.
              </Typography>
            </Grid>

            {/* inf */}
            <Grid item xs={12} sm={3}>
              <Typography>Product details</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography>
                VTOL VR is a near-futuristic combat flight game built for
                Virtual Reality. Pilot advanced multi-role jets, using your
                hands to flip switches, press buttons, and manipulate the
                virtual flight controls.
              </Typography>
            </Grid>

            {/* inf */}
            <Grid item xs={12} sm={3}>
              <Typography>Product details</Typography>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Typography>
                VTOL VR is a near-futuristic combat flight game built for
                Virtual Reality. Pilot advanced multi-role jets, using your
                hands to flip switches, press buttons, and manipulate the
                virtual flight controls.
              </Typography>
            </Grid>
          </Grid>

          {/* </Box> */}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

const ISINSTOCK = true;

const CARDMEDIA = [
  "https://cdn.akamai.steamstatic.com/steam/apps/667970/header_292x136.jpg?t=1680272279",
];

const STYLE_ICON = {
  "&:hover": {
    cursor: "pointer",
  },
  "&:active": {
    transform: "scale(0.9)",
  },
};
