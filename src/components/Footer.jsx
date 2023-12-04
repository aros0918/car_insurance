import { Box } from "@mui/material";
import { Typography } from "antd";
import { Link } from "react-router-dom";
export const Footer = (props) => {
  const {  } = props;
  return (
    <>
      <Box
        sx={{
          p: 0,
          // position: "fixed",
          bottom: 0,
          height: 100,
          width: "100%",
          zIndex: 1023,
          display: "flex",
          flexDirection: "row",
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