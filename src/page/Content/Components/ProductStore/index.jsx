import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import EmptyIcon from "~/assets/Empty.png";
import Card from '~/components/Card';

function ProductStore(progs) {

    const [CARDMEDIA, setCARDMEDIA ] = useState([])
    const [TITLE, setTITLE ] = useState([])
    const [DESC, setDESC ] = useState([])

  // const CARDMEDIA = progs.progs?.cardMedia ? progs.progs.card : [];
  // const TITLE = progs.progs?.title ? progs.progs.title : "";
  // const DESC = progs.progs?.desc ? progs.progs.desc : "";

  const getProduct = progs.progs.getProduct
  const title = progs.progs.title
  const desc = progs.progs.desc ? progs.progs.desc : ''

  useEffect(()=>{
    setTITLE(title)
    setDESC(desc)
    getProduct.then((res)=> {
      setCARDMEDIA(res)
      console.log('card ', res)
    })

  }, [title, desc, getProduct])

  const SHOW_PRODUCT_COUNT = 8;

  const [ProductCount, SetProductCount] = useState(SHOW_PRODUCT_COUNT);

  const SeeMoreProductHandle = () => {
    SetProductCount(CARDMEDIA.length);
  };
  const HiddenProductHandle = () => {
    SetProductCount(SHOW_PRODUCT_COUNT);
  };
  return progs.progs === "empty" ? (
    <Box sx = {{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        width: '100%',
        bgcolor: '#ffffff57'
    }}>
      <img
        src={EmptyIcon}
        alt=""
        style={{
          ...{
            height: "250px",
            width: "260px",
          },
          ...progs.sx,
        }}
      />
    </Box>
  ) : (
    <Box sx={{ width: "100%", bgcolor: "cover.bg1" }}>
      <Container sx={{ paddingBottom: "20px" }}>
        {/* Information Card  */}
        <Box
          sx={{
            padding: "20px 0",
          }}
        >
          <Typography variant="h5" component="h2">
            {TITLE}
          </Typography>
          <Typography variant="body1" component="h2" color={'#ccc'}>
            {DESC}
          </Typography>
        </Box>
        {/* Container Card  */}
        <Grid container spacing={2}>
          {CARDMEDIA != [] &&
            CARDMEDIA.map((imageInf, index) => {
              let url = imageInf.banner_url;
              let key = imageInf.id;
              let inf = imageInf
              return (
                index < ProductCount && (
                  <>
                    <Grid key={key} xs={6} sm={6} md={3} lg={3}>
                      <Card id={key} image={url} inf = {inf}/>
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
      </Container>
    </Box>
  );
}

export default ProductStore;
