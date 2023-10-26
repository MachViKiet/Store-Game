import { Box } from "@mui/material";
// import { Typography } from "@mui/material";
import StoreDialog from "../../Modal/Store/StoreDialog";


function CardMedia(progs) {
  const URL_IMAGE = progs.image;

  const disableMore = progs.disableMore ? {} : {
    "&:hover .MuiBox-root": {
      display: "flex",
      alignItems: 'center',
      justifyContent: 'center'
    },
  }

  return (
    <>
      <Box
        sx={{...{
          background: "cover.bg4",
          width: "100%",
          paddingTop: "50%",
          backgroundImage: `url(${URL_IMAGE})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",          
        },...disableMore}}
      >
        <Box
          sx={{
            display: "none",
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "#33333370",
            top: 0
          }}
        >

          <StoreDialog/>
        </Box>
      </Box>
    </>
  );
}

export default CardMedia;
