import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

function Tag(progs) {
  const VALUE = progs.value ? progs.value : "#";
  const COLOR = progs.color ? progs.color : "#ccc";

  const navigate = useNavigate();

  const ONCLICKHANDLE = (value) => {
    window.scrollTo(0, 0);
    navigate("/store-game/" + value);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          pt: "50%",
          position: "relative",
          background: COLOR,
        }}
      >
        <Box
            onClick={() => ONCLICKHANDLE(VALUE)}
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#4b4b4b6e",
            "&:hover": {
              background: "#cfcfcf38",
              cursor: 'pointer'
            },
            "&:active": {
              transform: "scale(0.95)",
            }
          }}
        >
          <Box

            sx={{
              fontSize: "16px",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            {VALUE}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Tag;
