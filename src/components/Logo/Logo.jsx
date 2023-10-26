import Logo from "~/assets/Logo.png";

function CustomLogo(progs) {
  return (
    <img
      src={Logo}
      alt=""
      style={{...{
        height: "70px",
        width: "230px",
      },...progs.sx}}
    />
  );
}

export default CustomLogo;
