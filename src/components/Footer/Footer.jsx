
import { Box, Typography } from '@mui/material'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Project © '}
        Software Engineering 
      {'  '}
      {new Date().getFullYear()}.
    </Typography>
  )
}

function Footer() {
  return (
    <>
      <Box sx={{
        mt: '20px',
        bgcolor: "#2e2f35",
        height: "80px",
        width: "100%",
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>
          <Copyright/>
      </Box>
      {/* <Box sx={{
        bgcolor: "#2e2f35",
        height: "50px",
        width: "100%"
      }}>
        <Container
          sx={{
            pt: '50px',
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
        </Container>
      </Box> */}
    </>
  )
}

export default Footer