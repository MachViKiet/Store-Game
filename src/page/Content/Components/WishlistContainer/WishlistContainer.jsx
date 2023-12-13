import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "~/components/Card";

import { getUserInf as user_api } from "~/apis/User";

function WishlistContainer(progs) {
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    localStorage.getItem("accessToken") ? setIslogin(true) : setIslogin(false);
  }, [isLogin]);

  const [CARDMEDIA, setCARDMEDIA] = useState(progs.user.wishlist);
//   const [TITLE] = useState("Your wishlist");

  const SHOW_PRODUCT_COUNT = 8;
  const [ProductCount, SetProductCount] = useState(SHOW_PRODUCT_COUNT);
  
  const SeeMoreProductHandle = () => {
    SetProductCount(CARDMEDIA.length);
  };
  const HiddenProductHandle = () => {
    SetProductCount(SHOW_PRODUCT_COUNT);
  };

  useEffect(() => {
    const getUserInf = (userID) => user_api(userID).then((res)=>{
        if (res.status === "OK") {
          // XỬ lí data
          setCARDMEDIA(res.data.wishlist)
        } 
      }).catch((error) => {
        console.error("There was an error:", error);
      });

    getUserInf(progs.user.id)
  }, [progs.user.id, progs.user.wishlist]);

  return (
    isLogin && (
      <Box
        sx={{
          width: "100%",
          height: "fit-content",
          bgcolor: "#fff",
          minHeight: "720px",
          background: "url(https://wallpaperaccess.com/full/5495850.png)",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
          backgroundRepeat: "no-repeat",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx = {{
             position: "absolute",
             height: "100%",
             bgcolor: '#000000a1',
             width: '100%'
        }}>
          <Container
            sx={{
              
            }}
          >
            <Box>
              {/* Information Card  */}
              <Box pt= {3} >
                <Typography
                  variant="h4"
                  component="h2"
                  fontWeight={600}
                >
                </Typography>
              </Box>

              {/* Container Card  */}
              <Grid container spacing={2}>
                {CARDMEDIA != [] &&
                  CARDMEDIA.map((imageInf, index) => {
                    let url = imageInf.banner_url;
                    let key = imageInf.id ? imageInf.id : imageInf._id;
                    let inf = imageInf;
                    return (
                      index < 6 && index < ProductCount && (
                        <>
                          <Grid key={key} xs={6} sm={6} md={4} lg={4}>
                            <Card id={key} image={url} inf={inf} />
                          </Grid>
                        </>
                      )
                    );
                  })}

                {CARDMEDIA.length > ProductCount && (
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      padding: "10px 0",
                    }}
                  >
                    <Button
                      sx={{ color: "text.primary" }}
                      onClick={SeeMoreProductHandle}
                      endIcon={<KeyboardArrowDownIcon />}
                    >
                      See more
                    </Button>
                  </Box>
                )}
                {CARDMEDIA.length == ProductCount &&
                  ProductCount > SHOW_PRODUCT_COUNT && (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: "10px",
                      }}
                    >
                      <Button
                        sx={{ color: "text.primary" }}
                        onClick={HiddenProductHandle}
                        endIcon={<KeyboardArrowUpIcon />}
                      >
                        Hidden
                      </Button>
                    </Box>
                  )}
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    )
  );
}

export default WishlistContainer;
