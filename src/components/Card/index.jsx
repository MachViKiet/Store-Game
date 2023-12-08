import { Box, Typography } from "@mui/material";
import CardMedia from "./CardMedia";

function Card(progs) {
  const url = progs.image;
  const key = progs.id;
  const inf = progs.inf
  return (
    <>
      <div>
        <CardMedia id={key} image={url}></CardMedia>
      </div>
      <Box style = {{
        // display: 'flex',
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center'
      }} pt={0.5} pb = {0.5}>
        <Typography variant="body1" pt={1} color={'#f5f5f5'} style={{
            fontWeight: '750'
        }}>
            {inf.title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="body2" align="justify" pt={1} sx={{
            color: '#ccc',
            '&.MuiTypography-root':{
                'wordBreak': 'break-word',
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
                'display': '-webkit-box',
                'max-height': '72px', /* fallback */
                '-webkit-line-clamp': '3', /* number of lines to show */
                '-webkit-box-orient': 'vertical !important'
            }
        }}>
            {inf.short_desc}
        </Typography>
      </Box>

      <Box style = {{
        // display: 'flex',
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center'
      }} pt={0.5}>
        <Typography variant="body2" pt={1} color={'#a2a9cf'} style={{
            fontWeight: '600',
            width: '100%',
            textAlign: 'start'
        }}>
            {inf.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
        </Typography>
      </Box>
    </>
  );
}

export default Card;
