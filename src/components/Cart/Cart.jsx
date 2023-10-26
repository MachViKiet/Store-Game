import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

function Cart(progs) {
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ pt: "5px", pb: "5px", fontSize: "18px" }}
      >
        <LocalGroceryStoreOutlinedIcon fontSize="medium" />
        <Box sx={{ margin: "0 20px 0 10px", fontSize: "16px" }}>Cart</Box>
        <Box
          sx={{
            width: "20px",
            height: "25px",

            borderRadius: "10px",
            background: "yellow",
            color: "#000",
            fontWeight: "700",
            fontSize: "15px",
            lineHeight: "25px",
          }}
        >
          {progs.value}
        </Box>
      </Button>
    </>
  );
}

export default Cart;
