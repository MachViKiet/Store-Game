/* eslint-disable react/no-unescaped-entities */
import { Button, Container, Typography } from "@mui/material";
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
import Rating from '@mui/material/Rating';
import { getDetailProduct } from "~/apis/Product_api/DetailProduct/getDetailProduct";
import StarIcon from '@mui/icons-material/Star';
import { wishlist_api } from "~/apis/Wishlist_api/Wishlist";
import { cart_api } from "~/apis/Cart_api/Cart";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

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
  const [rating, setRating] = useState('')

  const [price, setPrice] = useState('')

  const [banner, setBanner] = useState('')
  const [review, setReview] = useState('')
  const [video, setVideo] = useState('')

  const [product, setProduct] = useState({})

  const clickHandle = (num) => {
    setCurImg(num);
  };


  let productId = window.location.pathname.split('/')[3];
   

  useEffect(() => {
    localStorage.getItem("accessToken") ? setIsLogin(true) : "";

    getDetailProduct(productId).then((res) => {
      setBanner(res.banner_url)
      setImage(res.img_urls)
      setTitle(res.title)
      setRelease_date(res.release_date)
      setCategories(res.categories)
      setRating(res.rating)
      setShort_desc(res.short_desc)
      setDesc(res.desc)
      setReview(res.reviews_count)
      setPrice(res.price)
      setVideo(res.vid_urls[0])
      setProduct(res)
    })
  }, [productId]);

  const resizeImage = (image) =>{
    return image && image.includes("116x65") ? image.replace("116x65", "1920x1080") : image
  }

  const resizeImage2 = (image) =>{
    return image && image.includes("116x65") ? image.replace("116x65", "600x338") : image
  }

  const nexthandle = () => {
    setCurImg((prev) => {
      return prev + 1 >= image.length ? 0 : prev + 1;
    });
  };

  const favorHandle = ()=>{
    const removeWishlist = () => wishlist_api.removeWishlist(progs.user.id, product, localStorage.getItem("accessToken"))
    const addWishlist = () => wishlist_api.addWishlist(progs.user.id, product, localStorage.getItem("accessToken"))
    
    isFavor ? removeWishlist().then((res)=>{
      console.log('Remove wishlist ', res)
      if(res.status === "OK"){
        setIsFavor(false)
      }
    }).catch((error) => {
      console.error("There was an error:", error);
    }) : addWishlist().then((res)=>{
      console.log('Add wishlist ', res)
      if(res.status === "OK"){
        setIsFavor(true)
      }
    }).catch((error) => {
      console.error("There was an error:", error);
    })
  }



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

    const addToCart = () => cart_api.addToCart(progs.user.id, product, localStorage.getItem("accessToken"))

    isLogin && progs.user.updateCart()

    isLogin && addToCart().then((res)=>{
      console.log(res)
      if (res.status == 'OK'){
        progs.user.updateCart()
      }
      else{
        // Hiện thông báo đã tồn tại trong giỏ hàng
      }
    })

  }

  return (
    <>
      <Container
        sx={{
          py: "10px",
          px: '0px !important'
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>

            <Grid item xs={12} md={7}>
              <Item sx = {{ height: '100%'}}>
                {             
                curImg == 0? (<Grid item xs={12}>
                  { video != '' && <video width="100%" controls autoPlay >
                    <source src= {video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> }
                </Grid>) : (
                <Box
                  sx={{
                    width: "100%",
                    pt: "56%",
                    background: 'url(' + resizeImage(image[curImg - 1]) + ')',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></Box>
                )
             }


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

                    <Box
                         sx={{
                           width: "140px",
                           height: "79px",
                           bgcolor: "#fff",
                           background: "url(https://cdn.pixabay.com/photo/2015/09/15/17/18/vector-video-player-941434_1280.png)",
                           backgroundSize: "cover",
                           backgroundPosition: "center",
                           backgroundRepeat: "no-repeat",
                           opacity: `${curImg == 0 ? "1" : "0.3"}`,
                         }}
                         onClick={() => clickHandle(0)}
                       ></Box>

                    {image.map((inf, index) => {
                      return (
                        <>
                          <Box
                            sx={{
                              width: "140px",
                              height: "79px",
                              bgcolor: "#fff",
                              background: `url(` + resizeImage2(inf) + ')',
                              backgroundSize: "cover",
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              opacity: `${index == curImg - 1 ? "1" : "0.3"}`,
                            }}
                            onClick={() => clickHandle(index + 1)}
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
                    pt: "56%",
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
                        overflow: "auto",
                        "text-overflow": "ellipsis",
                        height: '80px',
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
                  > Type :
                  </Typography>

                  <Typography
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      {categories}
                    </Typography>
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
                  > Release Date :
                  </Typography>
                  <Typography
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      {release_date}
                    </Typography>
                </Box>

{/* review */}
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
                  > Review :
                  </Typography>
                  <Typography
                      variant="body2"
                      sx={{
                        textAlign: "justify",

                        pl: 1,
                        color: '#67c1f5'
                      }}
                    >
                      {review} followers
                    </Typography>
                </Box>

{/* Rating */}
<Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        pl: 1.5,
        pt: 1,
      }}
    >
      <Rating
        name="hover-feedback"
        value={rating}
        size="large"
        precision={1}
        getLabelText={getLabelText}
        readOnly 
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {rating !== null && (
        <Box sx={{ ml: 2, fontSize: '16px', color: '#ccc' }}>{labels[rating]}</Box>
      )}
    </Box>

    {/* Price */}
<Box sx = {{
                  display: 'flex',
                  px: 2,
                  pt: 1,
                  width: '100%'
                }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: '700',
                      width: '100%',
                      textAlign: 'end',
                      pr: 2.5,
                      color: price == 0 ? '#a4dda4' :'#bebdff',
                    }}
                  > { price == 0 ? "Free" : price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')+ ' VND'}
                  </Typography>
                </Box>

{/* Button */}
                <Box p = {2} sx = {{
                  display: 'flex',
                  justifyContent: 'space-between',
                  pt: 2
                }}>
                  <Button onClick= {favorHandle}>
                    { isFavor ? <FavoriteIcon sx = {{color:"#ff6262"}} fontSize= 'large' /> : <FavoriteBorderIcon fontSize= 'large' /> }  </Button>
                  <Button onClick={HANDLEBUYPRODUCT} startIcon={<LocalGroceryStoreIcon />} variant="outlined" sx = {{width: '45%', height: '50px',  mr : 2}}>BUY PRODUCT</Button>
                </Box>
              </Item>
            </Grid>

            <Grid item xs={12}>
              { video != '' && <video width="100%" controls >
                <source src= {video} type="video/mp4" />
                Your browser does not support the video tag.
              </video> }
            </Grid>

          </Grid>
        </Box>

        <Box>
          <Item sx = {{mt: 2, p: 5}}>
            {!seeMoreButton ? (
              <Button sx = {{width: '100%' , textAlign: 'center'}} endIcon = {<ExpandMoreIcon/>} variant = "text" onClick={()=> setSeeMoreButton((cur)=> !cur)}>More information</Button>
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

