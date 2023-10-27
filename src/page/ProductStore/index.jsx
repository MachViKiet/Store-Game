import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "~/components/Card/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
function ProductStore() {
  const CARDMEDIA = [
    "https://cdn.akamai.steamstatic.com/steam/apps/667970/header_292x136.jpg?t=1680272279",
    "https://cdn.akamai.steamstatic.com/steam/apps/1133320/header_292x136.jpg?t=1683161706",
    "https://cdn.akamai.steamstatic.com/steam/apps/587430/header_292x136.jpg?t=1677003160",
    "https://cdn.akamai.steamstatic.com/steam/apps/2456960/header_292x136.jpg?t=1698066784",
    "https://cdn.akamai.steamstatic.com/steam/apps/611670/header_292x136.jpg?t=1564002443",
    "https://cdn.akamai.steamstatic.com/steam/apps/555160/header_292x136.jpg?t=1694029712",
    "https://cdn.akamai.steamstatic.com/steam/apps/667970/header_292x136.jpg?t=1680272279",
    "https://cdn.akamai.steamstatic.com/steam/apps/1133320/header_292x136.jpg?t=1683161706",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1957780/header_292x136.jpg?t=1693412431",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/546560/header_292x136.jpg?t=1673391297",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1265800/header_292x136.jpg?t=1691046818",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1947500/header_292x136.jpg?t=1680115970",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1358140/header_292x136.jpg?t=1686909128"
  ];

  const TITLE = "OutStanding Product";
  const DESC = "List of trending products you might like";
  const SHOW_PRODUCT_COUNT = 8;

  const [ProductCount, SetProductCount] = useState(SHOW_PRODUCT_COUNT);

  const SeeMoreProductHandle = () => {
    SetProductCount(CARDMEDIA.length);
  };
  const HiddenProductHandle = () => {
    SetProductCount(SHOW_PRODUCT_COUNT);
  };
  return (
    <Container sx={{ paddingBottom: "20px" }}>
      {/* Information Card  */}
      <Box
        sx={{
          padding: "20px 0",
        }}
      >
        <Typography variant="h5" component="h2">
          {TITLE}
        </Typography>
        <Typography variant="body1" component="h2">
          {DESC}
        </Typography>
      </Box>
      {/* Container Card  */}
      <Grid container spacing={2}>
        {CARDMEDIA.map((image, index) => {
          return (
            index < ProductCount && (
              <>
                <Grid key={image.split("/")[-1]} xs={6} sm={6} md={3} lg={3}>
                  <CardMedia image={image} />
                </Grid>
              </>
            )
          );
        })}

        {CARDMEDIA.length > ProductCount && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "10px 0",
            }}
          >
            <Button sx = {{color: 'text.primary'}} onClick={SeeMoreProductHandle}  endIcon= {<KeyboardArrowDownIcon/>}>See more</Button>
          </Box>
        )}
        {CARDMEDIA.length == ProductCount && ProductCount > SHOW_PRODUCT_COUNT && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              paddingTop: "10px",
            }}
          >
            <Button sx = {{color: 'text.primary'}} onClick={HiddenProductHandle} endIcon= {<KeyboardArrowUpIcon/>}>Hidden</Button>
          </Box>
        )}
      </Grid>
    </Container>
  );
}

export default ProductStore;
