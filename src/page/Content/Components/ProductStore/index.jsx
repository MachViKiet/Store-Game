import Grid from "@mui/material/Unstable_Grid2";
import CardMedia from "~/components/Card/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import EmptyIcon from "~/assets/Empty.png";

function ProductStore(progs) {
  const CARDMEDIA = progs.progs?.cardMedia ? progs.progs.cardMedia : [];
  const TITLE = progs.progs?.title ? progs.progs.title : "";
  const DESC = progs.progs?.desc ? progs.progs.desc : "";

  const SHOW_PRODUCT_COUNT = 8;

  const [ProductCount, SetProductCount] = useState(SHOW_PRODUCT_COUNT);

  const SeeMoreProductHandle = () => {
    SetProductCount(CARDMEDIA.length);
  };
  const HiddenProductHandle = () => {
    SetProductCount(SHOW_PRODUCT_COUNT);
  };
  return progs.progs === "empty" ? (
    <Box sx = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        width: '100%',
        bgcolor: '#ffffff57'
    }}>
      <img
        src={EmptyIcon}
        alt=""
        style={{
          ...{
            height: "250px",
            width: "260px",
          },
          ...progs.sx,
        }}
      />
    </Box>
  ) : (
    <Box sx={{ width: "100%", bgcolor: "cover.bg1" }}>
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
          {CARDMEDIA != [] &&
            CARDMEDIA.map((image, index) => {
              let url = image.image;
              let key = image.key;
              return (
                index < ProductCount && (
                  <>
                    <Grid key={index} xs={6} sm={6} md={3} lg={3}>
                      <CardMedia id={key} image={url} />
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
              <Button
                sx={{ color: "text.primary" }}
                onClick={SeeMoreProductHandle}
                endIcon={<KeyboardArrowDownIcon />}
              >
                See more
              </Button>
            </Box>
          )}
          {CARDMEDIA.length == ProductCount &&
            ProductCount > SHOW_PRODUCT_COUNT && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10px",
                }}
              >
                <Button
                  sx={{ color: "text.primary" }}
                  onClick={HiddenProductHandle}
                  endIcon={<KeyboardArrowUpIcon />}
                >
                  Hidden
                </Button>
              </Box>
            )}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductStore;
