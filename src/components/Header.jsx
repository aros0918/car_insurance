import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Button, Progress } from "antd";

export const Header = (props) => {
  const { } = props;

  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[0]
              : theme.palette.grey[0],
          p: 0,
          height: 50,
          width: "100%",
          zIndex: 1023,
          display: "flex",
          marginTop: '20px'
        }}
        component="header"
      >
        <Typography margin="auto" variant="body2" color="text.secondary" align="center" >
            Fair Insurance
        </Typography>
        <Button> Apple </Button>
        <Progress percent={50}></Progress>
      </Box>
    </>
  );
};
