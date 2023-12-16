/* eslint-disable react/no-unescaped-entities */
import { Container, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

export default function News() {
  return (
    <Container>
      <Grid container spacing={4} mt={1}>
        <Grid xs={4} direction="column">
          {dataEvent.map((inf, index) => {
            return (
              index % 3 == 0 && (
                <Card
                  key={index}
                  sx={{ maxWidth: "100%", bgcolor: "#2c2c36", mb: 4 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={inf.thumb_nail}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {inf.title}
                      </Typography>
                      <Box sx={{ pb: 1, color: inf.type == 'Events' ? "#e7f85c" : "#ffc0cd", fontWeight: "700" }}>
                      {inf.type}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {inf.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            );
          })}
        </Grid>
        <Grid xs={4} direction="column">
          {dataEvent.map((inf, index) => {
            return (
              index % 3 == 1 && (
                <Card
                  key={index}
                  sx={{ maxWidth: "100%", bgcolor: "#2c2c36", mb: 4 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={inf.thumb_nail}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {inf.title}
                      </Typography>
                      <Box sx={{ pb: 1, color: inf.type == 'Events' ? "#e7f85c" : "#ffc0cd", fontWeight: "700" }}>
                      {inf.type}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {inf.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            );
          })}
        </Grid>
        <Grid xs={4} direction="column">
          {dataEvent.map((inf, index) => {
            return (
              index % 3 == 2 && (
                <Card
                  key={index}
                  sx={{ maxWidth: "100%", bgcolor: "#2c2c36", mb: 4 }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={inf.thumb_nail}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {inf.title}
                      </Typography>
                      <Box sx={{ pb: 1, color: inf.type == 'Events' ? "#e7f85c" : "#ffc0cd", fontWeight: "700" }}>
                      {inf.type}
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {inf.desc}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              )
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

const dataEvent = [
  {
    title: "Screenshot Competition - Air Superiority!",
    desc: "We're ready to see your awesome screenshots!",
    thumb_nail:
      "https://clan.cloudflare.steamstatic.com/images/4649813/d66fbf64694823ff8108572f51a5f97fb097c0db_400x225.png",
      type: 'News'
  },
  {
    title:
      "Community Crunch 390: Winter Wonderland, Official ARK Merch, and More!",
    desc: "Download in full resolution Deck the halls with boughs of holly! Winter Wonderland will be making a triumphant return with new presents and goodies for ARK survivors.",
    thumb_nail:
      "https://clan.cloudflare.steamstatic.com/images/44719856/6972dcc7ee249b004def8b61f54aeea79a78d69f_400x225.png",
      type: 'News'
  },
  {
    title: "Prime Resurgence Event coming soon",
    desc: "Pick up your favorite Prime Warframes starting on December 21!",
    thumb_nail:
      "https://clan.cloudflare.steamstatic.com/images/4437469/3ffd5a3e6429bfcb87dfd537eddc92a3631f96b3_400x225.png",
      type: 'Events'
  },
  {
    title: "Winter Extreme: J9 Early",
    desc: "You’ll be able to get the J9 in the Winter Extreme event! This aircraft is a modified export variant of the American P-35 single-seat fighter operated by the Swedish Air Force...",
    thumb_nail:
      "https://clan.cloudflare.steamstatic.com/images/4649813/8737af803f1945d2d9c6eb8951025a893d86a77c_400x225.png",
    type: 'Events'
  },
];
