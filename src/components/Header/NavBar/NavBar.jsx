import { Container, Box, Typography } from "@mui/material";
// import FeedIcon from "@mui/icons-material/Feed";
// import HomeIcon from "@mui/icons-material/Home";
// import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import ModeButton from "~/components/Mode/Button";

// const STYLEICON = {
//   mr: "10%",
// };

function NavBar() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          pb: "10px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: "250px",
            }}
          >
            {[
              {
                key: "Home",
                value: "",
                // icon: <FeedIcon fontSize="large" sx={{ ...STYLEICON, ...{color: '#f2eefe'} }} />,
              },
              {
                key: "News",
                value: "",
                // icon: <HomeIcon fontSize="large" sx={{ ...STYLEICON, ...{color: '#f2eefe'} }} />,
              },
              {
                key: "WishList",
                value: "",
                // icon: <LocalOfferIcon fontSize="large" sx={{ ...STYLEICON, ...{color: '#f2eefe'} }} />,
              },
            ].map((inf) => {
              return (
                <>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      display: "flex",
                      alignItems: "center",
                      "&:hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                    }}
                  >
                    {inf?.icon}
                    {inf.key}
                  </Typography>
                </>
              );
            })}
          </Box>

          <Box>
            <ModeButton Title />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default NavBar;
