import { Box } from "@mui/material";
import logo from "../images/blacklogo.webp";
export const HeaderClone = (props) => {
  const { percent } = props;
  return (
    <>
      <Box
        sx={{
          p: 0,
          height: 100,
          width: "100%",
          zIndex: 1023,
          display: "flex",
          flexDirection: "row",
          boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)",
          backgroundColor: 'rgb(208,147,215)',
        }}
        component="header"
      >
        <Box
          sx={{
            flex: 2,
            marginTop: "15px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <img src={logo} width={150}></img>
        </Box>
        
      </Box>
    </>
  );
};