import Header from "~/components/Header";
import Footer from "~/components/Footer/Footer";

function DefaultLayout(progs) {
  return (
    <>
      <Header />
      {progs.children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
