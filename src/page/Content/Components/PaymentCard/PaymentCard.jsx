import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";
import CampaignIcon from '@mui/icons-material/Campaign';

function PaymentCard(progs) {
  console.log(progs)
  const banner_url = progs.progs.banner_url
  const price = progs.progs.price
  const short_desc = progs.progs.short_desc
  const title = progs.progs.title


  return (
    <Box
      sx={{
        background: "#393a40",
        my: 1,
        width: "100%",
        height: "150px",
        borderRadius: "10px",
        p: 1,
        display: "flex",
        gap: 1,
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "290px",
          borderRadius: "10px",
          background:
            `url(${banner_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      <Box sx={{ py: 1, width: "calc(100% - 290px)" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1
          }}
        >
          {/* Name */}
          <Typography
            maxWidth={"calc(100% - 100px)"}
            variant="h6"
            sx={{
              textAlign: "start",
              fontWeight: "700",
              px: 2,
              color: '#d2d2d2',
              fontSize: '18px'
            }}
          >
            {title}
          </Typography>

          {/* Price */}
          <Typography
            maxWidth={"calc(100%)"}
            sx={{
              textAlign: "start",
              pt: 0.5,
              width: "fit-content",
              px: 2,
              fontWeight: "700",
              display: 'flex',
              alignItems: 'center',
              color: price == 0 ? '#a4dda4' : "#c3d4ff",
            }}
            variant="body2"
          >
            {price == 0 && <CampaignIcon/>}  
            {price == 0 ? 'Free  '  : ( price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VND' )}
          </Typography>
         
        </Box>

        <Box>
        <Typography variant="body2" align="justify" sx={{
            color: '#ccc',
            px: 2,
            '&.MuiTypography-root':{
                'wordBreak': 'break-word',
                'overflow': 'auto',
                'text-overflow': 'ellipsis',
                'display': '-webkit-box',
                'min-height': '66px', /* fallback */
                'max-height': '68px', /* fallback */
                '-webkit-line-clamp': '3', /* number of lines to show */
                '-webkit-box-orient': 'vertical !important'
            }
        }}>
            {short_desc || 'No decriptions'}
        </Typography>
      </Box>


        {/* Delete button */}
        <Box sx= {{
              display: "flex",
              justifyContent: "end",
        }}>
          <Button
            maxWidth={"calc(100%)"}
            sx={{
              pt: 0.5,
              px: 2,
              color: "#c69dfb",
            }}
            variant="body2"
          >
            Delete
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentCard;
