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

import { getDetailProduct } from "~/apis/Product_api/DetailProduct/getDetailProduct";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

function ProductDetail(progs) {
  const [curImg, setCurImg] = useState(0);
  const [isFavor, setIsFavor] = useState(false);
  const [seeMoreButton, setSeeMoreButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [image, setImage] = useState([]);

  const [title, setTitle] = useState('')
  const [release_date, setRelease_date] = useState('')
  const [short_desc, setShort_desc] = useState('')
  const [desc, setDesc] = useState('')
  const [categories, setCategories] = useState('')
  // const [rating, setRating] = useState('')
  const [price, setPrice] = useState('')
  
  const [banner, setBanner] = useState('')

  const clickHandle = (num) => {
    setCurImg(num);
  };


  let userId = window.location.pathname.split('/')[3];

  useEffect(() => {
    localStorage.getItem("accessToken") ? setIsLogin(true) : "";

    getDetailProduct(userId).then((res) => {
      setBanner(res.banner_url)
      setImage(res.img_urls)
      setTitle(res.title)
      setRelease_date(res.release_date)
      setCategories(res.categories)
      // setRating(res.rating)
      setShort_desc(res.short_desc)
      setDesc(res.desc)
      setPrice(res.price)

      console.log(res.img_urls[14].includes("116x65"))
    })
  }, [userId]);

  const resizeImage = (image) =>{
    return image && image.includes("116x65") ? image.replace("116x65", "600x338") : image
  }

  const nexthandle = () => {
    setCurImg((prev) => {
      return prev + 1 >= image.length ? 0 : prev + 1;
    });
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
                    background: 'url(' + resizeImage(image[curImg]) + ')',
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
                    background: `url(${banner})`,
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
                    {title}
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
                    {short_desc}
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
                      {categories}
                    </Link>
                </Box>

{/* release_date */}
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
                  > Release Date
                  </Typography>
                  <Link
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      {release_date}
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
                  > Unit Price:
                  </Typography>
                  <Link
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} VND
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
          <Item sx = {{mt: 2, p: 5, }}>
            {!seeMoreButton ? (
              <Button endIcon = {<ExpandMoreIcon/>} variant = "text" onClick={()=> setSeeMoreButton((cur)=> !cur)}>More information</Button>
            ): (<Box sx = {{height: 'fit-content'}}>
                  {desc}
            </Box>)}
          </Item>
        </Box>
      </Container>
    </>
  );
}

export default ProductDetail;

