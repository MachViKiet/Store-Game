/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { useState } from "react";
// import MuiImageSlider from 'mui-image-slider';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function ProductDetail(progs) {
  const [curImg, setCurImg] = useState(0);
  const [isFavor, setIsFavor] = useState(false);
  const [seeMoreButton, setSeeMoreButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const clickHandle = (num) => {
    setCurImg(num);
  };

  useEffect(() => {
    localStorage.getItem("accessToken") ? setIsLogin(true) : "";
  }, []);

  const nexthandle = () => {
    setCurImg((prev) => {
      return prev + 1 >= image.length ? 0 : prev + 1;
    });
    // setTimeout(nexthandle, 2000)
  };

  const prehandle = () => {
    setCurImg((prev) => {
      return prev - 1 < 0 ? image.length : prev - 1;
    });
  };

  const HANDLEBUYPRODUCT = ()=>{
    // Xử lí cập nhật giỏ hàng
    // CHưa đăng nhập 
    // Nếu thất bại => báo lỗi
    // Nếu thành công => Tăng số lượng giỏ hàng lên 

    isLogin && progs.user.updateCart()
  }

  return (
    <>
      {console.log(progs)}
      <Container
        sx={{
          py: "10px",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Item>
                <Box
                  sx={{
                    width: "100%",
                    pt: "60%",
                    background: `url(${image[curImg]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>

                <Box
                  sx={{
                    maxWidth: "100%",
                    overflow: "auto",
                    py: 2,
                    "&::-webkit-scrollbar": {
                      mt: "50px",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: "fit-content",
                      display: "flex",
                      transition: "scroll 0.3s ease-in-out",
                    }}
                    gap={1}
                  >
                    {image.map((inf, index) => {
                      return (
                        <>
                          <Box
                            sx={{
                              width: "160px",
                              height: "80px",
                              bgcolor: "#fff",
                              background: `url(${inf})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              opacity: `${index == curImg ? "1" : "0.3"}`,
                            }}
                            onClick={() => clickHandle(index)}
                          ></Box>
                        </>
                      );
                    })}
                  </Box>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Box>
                    <ArrowBackIosIcon
                      fontSize="small"
                      sx={{
                        "&:hover": {
                          background: "#000",
                        },
                        transform: "translateY(-70%)",
                        ml: "5px",
                      }}
                      onClick={() => prehandle()}
                    />
                  </Box>
                  <Box>
                    <ArrowForwardIosIcon
                      fontSize="small"
                      sx={{
                        "&:hover": {
                          background: "#000",
                        },
                        transform: "translateY(-70%)",
                      }}
                      onClick={() => nexthandle()}
                    />
                  </Box>
                </Box>

              </Item>
            </Grid>
            <Grid item xs={12} md={5}>
              <Item sx = {{ height: '100%'}}>
                <Box
                  sx={{
                    width: "100%",
                    pt: "50%",
                    background: `url(${main_image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      textAlign: "start",
                      p: 2,
                      fontWeight: 700,
                      pb: 0,
                      lineHeight: "fit-content",
                    }}
                  >
                    Stardew Valley
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      px: 2,
                      py: 1,
                      opacity: 0.7,
                      "&.MuiTypography-root": {
                        wordBreak: "break-word",
                        overflow: "hidden",
                        "text-overflow": "ellipsis",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "4" /* number of lines to show */,
                        "-webkit-box-orient": "vertical !important",
                      },
                    }}
                  >
                    You've inherited your grandfather's old farm plot in Stardew
                    Valley. Armed with hand-me-down tools and a few coins, you
                    set out to begin your new life. Can you learn to live off
                    the land and turn these overgrown fields into a thriving
                    home?
                  </Typography>
                </Box>

{/* Type */}
                <Box sx = {{
                  display: 'flex',
                  width: 'fit-content',
                  px: 2,
                  pt: 0.5,
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      color: '#fff',
                      opacity: 0.5
                    }}
                  > TYPE:
                  </Typography>
                  <Link
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      Action
                    </Link>
                    <Link
                      variant="body2"
                      sx={{
                        textAlign: "justify",
                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      Single-player
                    </Link>
                </Box>

{/* Type */}
                <Box sx = {{
                  display: 'flex',
                  width: 'fit-content',
                  px: 2,
                  pt: 0.5,
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      color: '#fff',
                      opacity: 0.5
                    }}
                  > PRODUCT BY
                  </Typography>
                  <Link
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      Overwhelmingly Positive
                    </Link>
                </Box>

{/* Deverloper */}
                <Box sx = {{
                  display: 'flex',
                  width: 'fit-content',
                  px: 2,
                  pt: 0.5,
                }}>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "justify",
                      color: '#fff',
                      opacity: 0.5
                    }}
                  > DEVERLOPER:
                  </Typography>
                  <Link
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      ConcernedApe
                    </Link>
                </Box>

{/* Button */}
                <Box p = {2} sx = {{
                  display: 'flex',

                  pt: 4
                }}>
                  <Button onClick={HANDLEBUYPRODUCT} startIcon={<LocalGroceryStoreIcon />} variant="outlined" sx = {{width: '45%', height: '50px',  mr : 2}}>BUY PRODUCT</Button>
                  <Button onClick= {()=> {setIsFavor((cur)=> !cur)}}>
                    { isFavor ? <FavoriteIcon sx = {{color:"#ff6262"}} /> : <FavoriteBorderIcon/> }  </Button>
                </Box>
              </Item>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Item sx = {{mt: 2}}>
            {!seeMoreButton ? (
              <Button endIcon = {<ExpandMoreIcon/>} variant = "text" onClick={()=> setSeeMoreButton((cur)=> !cur)}>More information</Button>
            ): (<Box sx = {{height: '300px'}}>
                  No found
            </Box>)}
          </Item>
        </Box>
      </Container>
    </>
  );
}

export default ProductDetail;

const image = [
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_64d942a86eb527ac817f30cc04406796860a6fc1.600x338.jpg?t=1666917466",
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1666917466",
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_9ac899fe2cda15d48b0549bba77ef8c4a090a71c.600x338.jpg?t=1666917466",
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_6422d297347258086b389e3d5d9c0e0c698312e4.600x338.jpg?t=1666917466",
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_4fa0866709ede3753fdf2745349b528d5e8c4054.600x338.jpg?t=1666917466",
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.600x338.jpg?t=1666917466",
];

const main_image =
  "https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg?t=1666917466";
