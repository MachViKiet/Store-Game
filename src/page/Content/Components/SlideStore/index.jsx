/* eslint-disable no-unused-vars */
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import ImageSteper from "../ImageSteper";
import CardMedia from "~/components/Card/CardMedia";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const STYLEBOX = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

function SildeStore(progs) {
  // const TYPEGAME = progs.progs.type;

  // const POSTERS = progs.progs.poster;

  // const CARDMEDIA = progs.progs.cardMedia;

  const getTypegameAPI = progs.progs.getListOfCategory
  const getCardMediaAPI = progs.progs.getTopRatedProduct
  

  const [TYPEGAME, setTYPEGAME] = useState([])
  const [POSTERS, setPOSTERS] = useState([])
  const [CARDMEDIA, setCARDMEDIA] = useState([])

  useEffect(()=>{
    getTypegameAPI().then((res)=>{
      setTYPEGAME(res)
    })

    getCardMediaAPI().then((res)=>{
      setCARDMEDIA(res)
    })

    const poster = [
    "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg?t=1694608943",
    "https://cdn.akamai.steamstatic.com/steam/clusters/frontpage/8ad799076d8330ab5503472c/page_bg_english.jpg?t=1698557339",
    "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1695930392",
  ]
    setPOSTERS(poster)


  }, [getTypegameAPI, getCardMediaAPI])

  const navigate = useNavigate();
  const NAVHANDLE = (id) => {
    window.scrollTo(0, 0);
    navigate('/store-game/' + id)
  };

  return (
    <Box sx={{ padding: "20px 0", flexGrow: 1, bgcolor: "cover.bg1" }}>
      <Container maxWidth="lg">
        <Grid container pb={2} spacing={2}>
          {/* grid-1 */}
          <Grid
            xs={0}
            sm={0}
            md={2.5}
            lg={2.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box
              sx={{
                ...STYLEBOX,
                ...{
                  padding: "10px",
                  bgcolor: "cover.bg4",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                },
              }}
            >
              {TYPEGAME.map((inf, index) => {
                return (
                  <>
                    <Box key={index}>
                      <Typography
                        variant="h6"
                        sx={{
                          minWidth: "35px",
                          display: "inline-block",
                          textAlign: "center",
                          "&:hover": {
                            cursor: "pointer",
                          },
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {index + 1}.{" "}
                      </Typography>
                      <Typography
                        onClick={() => {
                          NAVHANDLE(inf.cateName);
                        }}
                        variant="h6"
                        sx={{
                          minWidth: "35px",
                          display: "inline-block",
                          textAlign: "center",
                          "&:hover": {
                            cursor: "pointer",
                            textDecoration: "underline",
                          },
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {inf.cateName}
                      </Typography>
                    </Box>
                  </>
                );
              })}
            </Box>
          </Grid>

          {/* grid-2 */}
          <Grid xs={12} sm={12} md={6.5} lg={6.5}>
            <Box sx={STYLEBOX}>
              <ImageSteper image={POSTERS} />
            </Box>
          </Grid>

          {/* grid-3 */}
          <Grid xs={12} sm={12} md={3} lg={3}>
            <Box sx={STYLEBOX}>
              <Grid container spacing={[0, 2]}>
                {CARDMEDIA.map((image, index) => {
                  let url = image.banner_url;
                  let key = image.id;
                  return (
                    index < 2 && (
                      <>
                        <Grid key={key} xs={6} sm={6} md={12} lg={12}>
                          <CardMedia image={url} id = {key} />
                        </Grid>
                      </>
                    )
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          {CARDMEDIA.map((image, index) => {
            let url = image.banner_url;
            let key = image.id;
            return (
              index > 1 && (
                <>
                  <Grid key={key} xs={6} sm={6} md={3} lg={3}>
                    <CardMedia image={url} id = {key} />
                  </Grid>
                </>
              )
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default SildeStore;
