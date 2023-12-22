import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import MenuIcon from "@mui/icons-material/Menu";
import SearchField from "../../SearchField/SearchField";
import MenuDrawer from "../../Drawer/Drawer";

import CustomLogo from "../../Logo/Logo";
import SignInButton from "../../Author/SignIn/SignInButton";
import Cart from "../../Cart/Cart";
import ModeButton from "~/components/Mode/Button";
import { useEffect, useState } from "react";
import UserInfor from "../../Author/UserInfor.jsx/UserInfor";

function Information(progs) {
  const [isLogin, setIsLogin] = useState(false);
  //const [amountInCart] = useState(progs.progs.amountInCart)


  useEffect(() => {

    localStorage.getItem("accessToken") ? setIsLogin(true)  : "";

  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "100%",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                Padding: "10px",
                display: { xs: "none", md: "block" },
              }}
            >
              <CustomLogo
                sx={{
                  height: "70px",
                  width: "230px",
                }}
              />
            </Box>

            {/* Menu */}
            <MenuDrawer
              sx={{
                display: { sm: "block", md: "none" },
              }}
              value={<MenuIcon fontSize="large" />}
            />

            {/* Search Field */}
            <Box
              sx={{
                flexGrow: "1",
                width: "100%",
                maxWidth: {
                  md: "500px",
                },
                ml: "10px",
                mr: "10px",
                color: "text.secondary",
              }}
            >
              <SearchField />
            </Box>

            {/* Mode button */}
            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: "fit-content",
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <ModeButton />
            </Box>

            {/* Sign In Button */}

            <Box
              sx={{
                alignItems: "center",
                justifyContent: "center",
                minWidth: "fit-content",
                display: {
                  xs: "none",
                  md: "flex",
                },
                color: "text.secondary",
              }}
            >
              {isLogin ? (
                <>
                  <UserInfor username = {progs.progs.userName} role = {progs.progs.role} /> {" "}
                </>
              ) : (
                <SignInButton />
              )}
            </Box>

            {/* Cart */}
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
              }}
            >
              <Cart value={progs.progs.amountInCart} />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Information;
