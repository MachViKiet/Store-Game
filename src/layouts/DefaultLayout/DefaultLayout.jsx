import Header from "~/components/Header";
import Footer from "~/components/Footer/Footer";
// import Container from '@mui/material/Container';
import { Box } from "@mui/material";

function DefaultLayout(progs) {
  return (
    <>
      <Header progs={progs.progs} />
      <Box sx = {{
        minHeight: '55vh',
      }}>{progs.children}
      </Box>
      <Footer />
    </>
  );
}

export default DefaultLayout;
