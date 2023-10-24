// import React from 'react'

import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "cover.bg1",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "45px",
          bgcolor: "cover.bg2",
        }}
      ></Box>

      <Box
        sx={{
          width: "100%",
          height: "125px",
          bgcolor: "cover.bg3",
        }}
      >
      </Box>

      <Box
          sx={{
            width: "100%",
            height: "400px",
            bgcolor: "cover.bg4",
          }}
        ></Box>
    </Box>
  );
}

export default App;
