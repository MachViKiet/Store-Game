import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Logo from "~/assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import MenuIcon from '@mui/icons-material/Menu';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Information() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "125px",
          bgcolor: "cover.bg3",
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
              justifyContent: 'space-between',
              width: '100%'
            }}
          >
            <Box sx={{ Padding: "10px", display: { xs: "none", md: "block" } }}>
              <img
                src={Logo}
                alt=""
                style={{
                  height: "80px",
                  width: "250px",
                }}
              />
            </Box>

            <MenuIcon sx = {{fontSize: '40px', display: { xs :'none', sm: "block", md: "none"}}}/>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{width: '300px'}}
              />
            </Search>

          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Information;
