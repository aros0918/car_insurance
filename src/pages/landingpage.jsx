import { useState, useEffect } from "react";
import { Box } from "@mui/material"

import { ClickButton } from "../components";

import { useNavigate } from "react-router-dom";
export const LandingPage = () => {
  const [page, setPage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (page === "/comparison") {
      navigate("/comparison");
    }
  }, [page]);
  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: '0 24px 0 24px',
      }}
    >
      <p>Fair <b>Insurance</b></p>
      <p>Compare Cheap Car</p>
      <h1 style={{fontWeight: "bold"}}> Insurance Quotes!</h1>
      <ClickButton onClick={() => setPage("/comparison")}> GET STARTED!</ClickButton>
    </Box>
  )
}