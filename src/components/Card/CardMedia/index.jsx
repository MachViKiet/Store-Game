import { Box } from "@mui/material"

function CardMedia(progs) {

  const URL_IMAGE = progs.image

  return (
    <Box sx = {{
        bgcolor: "cover.bg4",
        width: '100%',
        paddingTop: '60%',
        background: `url(${URL_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>

    </Box>
  )
}

export default CardMedia