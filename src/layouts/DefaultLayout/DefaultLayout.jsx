import Header from "~/components/Header";
import Footer from "~/components/Footer/Footer";
import Container from '@mui/material/Container';

function DefaultLayout(progs) {
  return (
    <>
      <Header progs={progs.progs} />
      <Container sx = {{
        minHeight: '55vh'
      }}>{progs.children}</Container>
      <Footer />
    </>
  );
}

export default DefaultLayout;
