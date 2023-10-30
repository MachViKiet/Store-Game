import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

function index() {
  return (
    <Box
      component="footer"
      sx={{
  
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.color= '#1E90FF'
            : theme.palette.grey[600],
        p: 6,
      }}
      
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              <h3>About Us</h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We are The_Quad team, dedicated to providing the best service to our
              customers.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              <h3>Contact Us</h3>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              227 Nguyen Van Cu Street
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: info@example.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: plapla
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              <h3>Follow Us</h3>
            </Typography>
            <Link href="https://www.facebook.com/" color="inherit">
              <Facebook style={{ color: 'white' }} />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram style={{ color: 'white' }} />
            </Link>
            <Link href="https://www.twitter.com/" color="inherit">
              <Twitter style={{ color: 'white' }} />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://your-website.com/">
              Quad Store
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default index;