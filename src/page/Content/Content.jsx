// import SlideStore from "~/page/Content/Components/SlideStore";
// import ProductStore from "~/page/Content/Components/ProductStore";
import Box from "@mui/material/Box";


function Content( progs ) {

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        { progs.children }
      </Box>
    </>
  );
}

export default Content;
