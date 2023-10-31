// import SlideStore from "~/page/Content/Components/SlideStore";
// import ProductStore from "~/page/Content/Components/ProductStore";
import Box from "@mui/material/Box";
// import TagList from "./Components/TagList/TagList";

// import { Home } from "@mui/icons-material";

function Content( progs ) {

  return (
    <>
      <Box
        sx={{
          width: "100%",
        }}
      >
        {/* <SlideStore />
        <ProductStore />
        <TagList />
        <ProductStore />
        <ProductStore />
        <ProductStore />  */}
        { progs.children }
      </Box>
    </>
  );
}

export default Content;
