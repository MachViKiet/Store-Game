import Tutorial from "./Tutorial";
import Information from "./Information";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Unstable_Grid2";

function index() {
  return (
    <>
      {/* --- Header 1 --- */}
      <Box sx = {{
        display: {
          xs: 'none',
          md: 'block'
        }
      }}>
        <Tutorial />
      </Box>

      {/* --- Header 2 --- */}
      <Box>
        <Information />
      </Box>
    </>
  );
}

export default index;
