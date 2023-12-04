import Box from "@mui/material/Box";

import { Button } from "@mui/material";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart(progs) {
  const [isLogin, setIsLogin] = useState(false);
  // const [amountInCart, setAmountInCart] = useState(0)

  useEffect(() => {
    localStorage.getItem("accessToken") ? setIsLogin(true) : "";
   // console.log(localStorage.getItem("accessToken"));
  }, []);

  const navigate = useNavigate();
  const HandleClick = ()=>{
    isLogin ?  navigate("/store-game/:id/cart" ) : navigate("/store-game/login" );
  }
  return (
    <>
      <Button
        variant="outlined"
        size="small"
        sx={{ pt: "5px", pb: "5px", fontSize: "18px" }}

        onClick={() => HandleClick()}
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
