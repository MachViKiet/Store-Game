import { Box, Typography } from "@mui/material";
import CardMedia from "./CardMedia";
import CampaignIcon from '@mui/icons-material/Campaign';

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
        <Typography variant="body1" color={'#f5f5f5'} pt={1} sx={{
                      fontWeight: '750',
            '&.MuiTypography-root':{
                'wordBreak': 'break-word',
                'overflow': 'hidden',
                'text-overflow': 'ellipsis',
                'display': '-webkit-box',
                'max-height': '72px', /* fallback */
                '-webkit-line-clamp': '1', /* number of lines to show */
                '-webkit-box-orient': 'vertical !important'
            }
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
                'min-height': '66px', /* fallback */
                'max-height': '72px', /* fallback */
                '-webkit-line-clamp': '3', /* number of lines to show */
                '-webkit-box-orient': 'vertical !important'
            }
        }}>
            {inf.short_desc || 'No decriptions'}
        </Typography>
      </Box>

      <Box style = {{
        // display: 'flex',
        width: '100%',
        // justifyContent: 'space-between',
        // alignItems: 'center'
      }} pt={0.5}>
        <Typography variant="body1" pt={1} color={inf.price == 0 ? '#a4dda4' : '#a2a9cf' } style={{
            fontWeight: '600',
            width: '100%',
            textAlign: 'start',
            display: 'flex',
            alignItems: 'center',
            gap: 2
        }}>
            {inf.price == 0 && <CampaignIcon/>}  
            {inf.price == 0 ? 'Free  '  : ( inf.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VND' )}
        </Typography>
      </Box>
    </>
  );
}

export default Card;
