// import React from 'react'

import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2';
// import Container from '@mui/material/Container';
import SlideStore from './page/SlideStore'


function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "cover.bg1",
      }}
    >
      {/* --- Header 1 --- */}
      <Box
        sx={{
          width: "100%",
          height: "35px",
          bgcolor: "cover.bg2",
        }}
      ></Box>

      {/* --- Header 2 --- */}
      <Box
        sx={{
          width: "100%",
          height: "125px",
          bgcolor: "cover.bg3",
        }}
      >

      </Box>

      {/*  ---- Body ---- */}
      <Box
        sx = {{
          width: '100%',
        }}
        >
          <SlideStore/>
        </Box>
    </Box>

  );
}

export default App;


