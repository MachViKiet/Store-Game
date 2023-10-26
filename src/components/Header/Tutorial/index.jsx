import { Container, Box, Button, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useState } from "react";

const BUTTONSTYLE = {
  width: "fit-content",
  padding: "0",
  minWidth: "0",
};

const TIPS = [
  { title: "Cheap Game Start account" },
  { title: "GearUp Booster reduces lag when playing games" },
  { title: "Make money on Divine Shop" },
];

const TUTORIALS = [
  {
    title: "Shopping guide",
    icon: "https://cdn.divineshop.vn/image/catalog/fontawesome/far%20fa-book.svg?hash=1635136430",
  },
  {
    title: "Customer incentives",
    icon: "https://cdn.divineshop.vn/image/catalog/fontawesome/far%20fa-badge-percent.svg?hash=1635136430",
  },
  {
    title: "Contact Info",
    icon: "	https://cdn.divineshop.vn/image/catalog/fontawesome/far%20fa-phone-alt.svg?hash=1635136430",
  },
];

function Tutorial() {
  const [Inf, setInf] = useState(0);

  const NextHandle = () => {
    const numShow = Inf + 1 > TIPS.length - 1 ? 0 : Inf + 1;
    return setInf(numShow);
  };

  const BackHandle = () => {
    const numShow = Inf - 1 < 0 ? TIPS.length - 1 : Inf - 1;
    return setInf(numShow);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "45px",
          bgcolor: "cover.bg2",
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
            }}
          >
            <Button sx={BUTTONSTYLE} onClick={BackHandle}>
              <NavigateBeforeIcon />
            </Button>
            <Button sx={BUTTONSTYLE} onClick={NextHandle}>
              <NavigateNextIcon />
            </Button>

            <Typography sx={{ pl: 1 }} variant="body2">
              {TIPS[Inf].title}
            </Typography>
          </Box>

          <Box>
            {TUTORIALS &&
              TUTORIALS.map((inf) => {
                return (
                  <>
                    <Button key={inf.title}>
                      <Box sx={{
                        height: '1.25rem',
                        width: '1.2rem',
                        background: `url(${inf.icon})`,
                        filter: 'invert(100%)',
                        mr: 2,
                      }}/>
                      {inf.title}
                    </Button>
                  </>
                );
              })}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Tutorial;
