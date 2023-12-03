import { Box } from "@mui/material";
import { Typography, Progress } from "antd";
export const Header = (props) => {
  const { } = props;
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
           boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
   
        }}
        component="header"
      >
        <Box
          sx={{
            flex: 2,
            marginRight: "100px",
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            justifyContent: "right"
          }}
        >
          <Typography style={{fontSize: 35}}>
            Fair <b>Insurance</b>
          </Typography>
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
          <Progress percent={50} style={{ width: "70%" }}></Progress>
        </Box>
      </Box>
    </>
  );
};