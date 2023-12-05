import { Box } from "@mui/material";
import { Progress } from "antd";
import logo from "../images/blacklogo.webp";
export const Header = (props) => {
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
            marginRight: "100px",
            marginTop: "15px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "right"
          }}
        >
          {/* <Typography style={{fontSize: 35}}>
            Fair <b>Insurance</b>
          </Typography> */}
          <img src={logo} width={150}></img>
        </Box>
        <Box
          sx={{
            flex: 4,
            marginRight: "auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start"
          }}
        >
          <Progress percent={percent} style={{ width: "80%" }}></Progress>
        </Box>
      </Box>
    </>
  );
};