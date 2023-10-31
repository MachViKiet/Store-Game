import Tag from "~/components/Tag/Tag";
import Grid from "@mui/material/Grid";
import { Container, Box, Typography } from "@mui/material";

function TagList() {
  return (
    <Box sx={{ width: "100%", bgcolor: "cover.bg1" }}>
      <Container sx={{ pb: 4 }}>
        {/* Information Card  */}
        <Box
          sx={{
            padding: "20px 0",
          }}
        >
          <Typography variant="h5" component="h2">
            Popular keywords
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {[
            { key: "Action", color: "#3D5A80" },
            { key: "Role Playing", color: "#98C1D9" },
            { key: "Simulation", color: "#EE6C4D" },
            { key: "Horror", color: "#293241" },
            { key: "Casual", color: "#545B67" },
            { key: "Survial", color: "#767C85" },
          ].map((inf,index) => {
            return (
              <>
                <Grid key = {index} item xs={4} md={2}>
                  <Tag value={inf.key} color={inf.color} />
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default TagList;
