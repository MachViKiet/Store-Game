import Box from "@mui/material/Box";
import { Typography, Button } from "@mui/material";

function PaymentCard() {
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
            "url(https://cdn.akamai.steamstatic.com/steam/apps/587430/header_292x136.jpg?t=1677003160)",
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
            sx={{
              textAlign: "start",
              fontWeight: "700",
              px: 2,
              color: '#d2d2d2'
            }}
            variant="h5"
          >
            I expext you to die
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
              color: "#c3d4ff",
            }}
            variant="body2"
          >
            200.000đ
          </Typography>
        </Box>

        {/* Type */}
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            px: 2,
            pt: 0.5,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              color: "#fff",
              opacity: 0.5,
            }}
          >
            {" "}
            Type:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",

              pl: 1,
              color: "#9eabf3",
            }}
          >
            Action
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              pl: 1,
              color: "#9eabf3",
            }}
          >
            Single-player
          </Typography>
        </Box>

        {/* Deverloper */}
        <Box
          sx={{
            display: "flex",
            width: "fit-content",
            px: 2,
            pt: 0,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              color: "#fff",
              opacity: 0.5,
            }}
          >
            {" "}
            Deverloper:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              pl: 1,
              color: "#9eabf3",
            }}
          >
            ConcernedApe
          </Typography>
        </Box>
         {/* Deverloper */}
         <Box
          sx={{
            display: "flex",
            width: "fit-content",
            px: 2,
            pt: 0,
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              color: "#fff",
              opacity: 0.5,
            }}
          >
            {" "}
            Rating:
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "justify",
              pl: 1,
              color: "#9eabf3",
            }}
          >
            500.000 following
          </Typography>
        </Box>

        {/* Delete */}
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
