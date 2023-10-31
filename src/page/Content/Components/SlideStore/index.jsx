import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import ImageSteper from "../ImageSteper";
import CardMedia from "~/components/Card/CardMedia";
import { useNavigate } from "react-router-dom";

const STYLEBOX = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

function SildeStore(progs) {
  const TYPEGAME = progs.progs.type;

  const POSTERS = progs.progs.poster;

  const CARDMEDIA = progs.progs.cardMedia;

  const navigate = useNavigate();
  const NAVHANDLE = (id) => {
    navigate('/store-game/product/' + id)
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
                          NAVHANDLE(inf.id);
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
                        {inf.value}
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
                  let url = image.image;
                  let key = image.key;
                  return (
                    index < 2 && (
                      <>
                        <Grid key={key} xs={6} sm={6} md={12} lg={12}>
                          <CardMedia image={url} />
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
            let url = image.image;
            let key = image.key;
            return (
              index > 1 && (
                <>
                  <Grid key={key} xs={6} sm={6} md={3} lg={3}>
                    <CardMedia image={url} />
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
