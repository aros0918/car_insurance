import { Box } from "@mui/material";
import { Link } from "react-router-dom";
export const Footer = (props) => {
  const {  } = props;
  return (
    <>
      <Box
        sx={{
          p: 0,
          bottom: 0,
          height: 70,
          width: "100%",
          zIndex: 1023,
          display: "flex",
          flexDirection: "row",
          backgroundColor: 'rgb(208,147,215)',
        }}
        component="footer"
      >
        <Box
          sx={{
            flex: 3,
            marginRight: "100px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "right"
          }}
        >
          <Link to="/privacy" style={{textDecoration: "none", color: "inherit"}}>Privacy Policy</Link>
        </Box>
        <Box
          sx={{
            flex: 3,
            marginRight: "auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          <Link to="/terms" style={{textDecoration: "none", color: "inherit"}}>Terms of Use</Link>
        </Box>
      </Box>
    </>
  );
};