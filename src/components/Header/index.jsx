import Tutorial from "./Tutorial";
import Information from "./Information";
import Box from "@mui/material/Box";
import NavBar from "./NavBar/NavBar";

// import Grid from "@mui/material/Unstable_Grid2";

function index() {
  return (
    <Box
      sx={{
        background: (theme) => {
          return theme.palette.mode == "light"
            ? "url(https://clanmstatic.com/images/39049601/cb36e001573cdb0af9a2a2d4bad593b3e30add16.jpg)"
            : "url(https://divineshop.vn/static/0de2668c294edf9d5fd8a8647b2c65b6.png)";
        },

        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottom: "1px solid #cccccc7a",
      }}
    >
      {/* --- Header 1 --- */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          bgcolor: "cover.bg2",
        }}
      >
        <Tutorial />
      </Box>

      {/* --- Header 2 --- */}
      <Box
        sx={{
          bgcolor: "cover.bg3",
        }}
      >
        <Information />
      </Box>

      {/* --- Header 3 --- */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "flex",
          },
          bgcolor: "cover.bg3",
          color: 'text.secondary'
        }}
      >
        <NavBar />
      </Box>
    </Box>
  );
}

export default index;
