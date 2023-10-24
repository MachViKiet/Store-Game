import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
// import { Item } from "../../components/Items";
import Grid from "@mui/material/Unstable_Grid2";
import ImageSteper from "../ImageSteper";
import CardMedia from '~/components/Card/CardMedia';
const STYLEBOX = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

function SildeStore() {
  const TYPEGAME = [
    { key: "type-01", value: "Action", icon: "" },
    { key: "type-02", value: "Adventure", icon: "" },
    { key: "type-03", value: "Role_Playing", icon: "" },
    { key: "type-04", value: "Simulation", icon: "" },
    { key: "type-05", value: "Strategy", icon: "" },
    { key: "type-06", value: "Sports & Racing", icon: "" },
    { key: "type-07", value: "Horror", icon: "" },
    { key: "type-08", value: "Casual", icon: "" },
    { key: "type-09", value: "Role-Playing", icon: "" },
    { key: "type-10", value: "Survival", icon: "" },
  ];

  const POSTERS = [
    "https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg?t=1694608943",
    "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1695930392",
    "https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg?t=1695930392",
  ];

  const CARDMEDIA = [
    "https://cdn.akamai.steamstatic.com/steam/apps/667970/header_292x136.jpg?t=1680272279",
    "https://cdn.akamai.steamstatic.com/steam/apps/1133320/header_292x136.jpg?t=1683161706",
    "https://cdn.akamai.steamstatic.com/steam/apps/587430/header_292x136.jpg?t=1677003160",
    "https://cdn.akamai.steamstatic.com/steam/apps/2456960/header_292x136.jpg?t=1698066784",
    'https://cdn.akamai.steamstatic.com/steam/apps/611670/header_292x136.jpg?t=1564002443',
    'https://cdn.akamai.steamstatic.com/steam/apps/555160/header_292x136.jpg?t=1694029712'
  ];

  return (
    <Box sx={{ padding: "50px 0", flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
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
                        }}
                      >
                        {index + 1}.{" "}
                      </Typography>
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
              <Grid container spacing={[0,2]}>
                {CARDMEDIA.map((image, index) => {
                  return (
                    index < 2 && (
                      <>
                        <Grid key={image.split('/')[-1]} xs={6} sm={6} md={12} lg={12}>
                          <CardMedia image={image} />
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
            return (
              index > 1 && (
                <>
                  <Grid key={image.split('/')[-1]} xs={6} sm={6} md={3} lg={3}>
                    <CardMedia image={image} />
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
