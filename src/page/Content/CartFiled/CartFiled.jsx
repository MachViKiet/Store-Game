import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import PaymentCard from "../Components/PaymentCard/PaymentCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function CartFiled(progs) {
  const cartInf = progs.user.cart

  const [total, setTotal] = useState(0)

  useEffect(()=>{
    cartInf.map((cart)=> {
      console.log(cart.price)
      setTotal((cur)=>{
        return cur + cart.price
      })
    })
  },[cartInf])
  return (
    <Box pt="20px">
      <Item>
        <Grid container spacing={2}>
          <Grid xs={8} p={2}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "start",
                py: 1.5,
              }}
            >
              <Typography variant="h5" fontWeight={600}>
                Your Cart ( {cartInf.length} product )
              </Typography>
            </Box>

            <Divider />

            <Box>
              {cartInf.map((product) => {
                return <PaymentCard key={product.id} progs={product} />;
              })}
            </Box>
          </Grid>
          <Grid xs={4} p={2}>
            <Divider />
            <Box
              sx={{
                py: 1.5,
              }}
            >
              <Typography pb={1.5} variant="body1" fontWeight={600}>
                Your contact phone number
              </Typography>

              <TextField id="outlined-disabled" label="" size="small" sx={{}} />
            </Box>
            <Divider />

            <Box
              sx={{
                py: 3,
              }}
            >
              <Typography variant="h6" pb={1.5}>
                Pay
              </Typography>
              <Box
                sx={{ pb: 1, display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="body2">Total product value</Typography>
                <Typography variant="body2">
                  {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VND' }
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Discount</Typography>
                <Typography variant="body2">0 VND</Typography>
              </Box>
              <Divider
                sx={{
                  my: 3,
                }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Total value to be paid</Typography>
                <Typography variant="body2" fontWeight={800} color={"#bebdff"}>
                  {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' VND' }
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                py: 1.5,
                display: 'flex',
                flexDirection: 'column',
                gap: 2
              }}
            >
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  bgcolor: "#2579f2",
                  height: '45px'
                }}
              >
                Buy super fast through Mobile Banking
              </Button>

              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  bgcolor: "#ae2070",
                  height: '45px',
                  '&:hover': {
                    bgcolor: "#d268d2",
                  }
                }}
              >
                Buy super fast with MoMo
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Item>
    </Box>
  );
}

export default CartFiled;
