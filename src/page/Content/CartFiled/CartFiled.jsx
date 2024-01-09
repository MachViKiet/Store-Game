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
import { Container } from "@mui/material";

import { getUserInf as user_api } from "~/apis/User";
import { cart_api } from "~/apis/Cart_api/Cart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function CartFiled(progs) {
  const [total, setTotal] = useState(0);
  const [cartInf, setCartInf] = useState(progs.user.cart);

  useEffect(() => {
    const getUserInf = (userID) =>
      user_api(userID)
        .then((res) => {
          if (res.status === "OK") {
            // XỬ lí data
            setCartInf(res.data.cart);
          }
        })
        .catch((error) => {
          console.error("There was an error:", error);
        });

    setTotal(0);
    getUserInf(progs.user.id);
  }, [progs, progs.user.id]);

  useEffect(() => {
    let sum = 0;
    cartInf.map((cart) => {
      sum = sum + cart.price;
    });
    setTotal(sum);
  }, [cartInf]);

  const HANDLEDELETE = (productID) => {
    console.log(progs);
    const productNeedRemove = cartInf.filter((product) => {
      const id = product.id || product._id;
      return id === productID;
    });
    const removeCart = () =>
      cart_api.removeCart(
        progs.user.id,
        productNeedRemove,
        localStorage.getItem("accessToken")
      );
    removeCart().then((res) => {
      if (res?.status && res.status == "OK") {
        const newCart = cartInf.filter((product) => {
          const id = product.id || product._id;
          return id !== productID;
        });
        setCartInf(newCart);
        progs.user.removeCart();
      }
    });
  };

  const HANDLEPAY = () => {
    const removeAllCart = () =>
      cart_api.removeAllCart(
        progs.user.id,
        localStorage.getItem("accessToken")
      );
      removeAllCart().then((res) => {
      if (res?.status && res.status == "OK") {
        alert(res.message)
        const newCart = []
        setCartInf(newCart);
        progs.user.removeAllCart();
      }
    });
  };

  return (
    <Container sx={{
      py: 4
    }}>
      <Item>
        <Grid container spacing={2}>
          <Grid xs={12} md={8.5} p={2}>
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
                return (
                  <PaymentCard
                    key={product?.id ? product.id : product._id}
                    progs={product}
                    func={{ deteleProduct: HANDLEDELETE }}
                  />
                );
              })}
            </Box>
          </Grid>
          <Grid xs={12} md={3.5} p={2}>
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
                  {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " VND"}
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
                  {total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
                    " VND"}
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Box
              sx={{
                py: 1.5,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
                <Button
                  variant="contained"
                  sx={{
                    color: "#fff",
                    bgcolor: "#007b0e",
                    height: "45px",
                  }}
                  onClick={HANDLEPAY}
                >
                  Transaction completed
                </Button>
              <Button
                variant="contained"
                sx={{
                  color: "#fff",
                  bgcolor: "#ae2070",
                  height: "45px",
                  "&:hover": {
                    bgcolor: "#d268d2",
                  },
                }}
              >
                  <a style = {{
                    color: '#fff',
                    fontWeight: '400',
                    textDecoration: 'none'
                  }}
                  href="https://sandbox.vnpayment.vn/paymentv2/Transaction/PaymentMethod.html?token=991be8591ad0416b8c7e7ae8665c832a">
                  Buy fast through Mobile Banking
              </a>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Item>
    </Container>
  );
}

export default CartFiled;
