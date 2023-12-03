import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Header, ButtonGroup } from "../components";
import { Typography, Select } from "antd";
export const MainPage = () => {
  const [buttons, setButtons] = useState([]);
  const [buttons1, setButtons1] = useState([]);
  const [buttons2, setButtons2] = useState([]);
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const status = useSelector(state => state.status);
  const year = useSelector(state => state.year);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  useEffect(() => {
    console.log("Year : ", year);
    if(status === 1){
      
    }
  })
  useEffect(() => {
    const generateButtons = () => {
      const generatedButtons = [];
      for (let i = 2024; i >= 2001; i--) {
        generatedButtons.push(i.toString());
      }
      setButtons(generatedButtons);
    };
    const generateOptions = () => {
      const generatedOptions = [];
      for (let i = 2000; i >= 1983; i--) {
        generatedOptions.push({
          value: i.toString(),
          label: i.toString(),
        });
      }
      setOptions(generatedOptions);
    };
    generateButtons();
    generateOptions();
  }, []);

  return(
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: '50px 24px 0 24px',
        }}
      >
        {status === 0 && (
          <>
           <Typography style={{fontSize: '35px'}}>
             <b>New York</b> Drivers Can Save Up To <b>$500</b>/Year
           </Typography>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your vehicle year</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ButtonGroup buttons={buttons} status={status}/>
           </div>
           <Select
             defaultValue="Prior Years"
             size = 'large'
             style={{
               marginTop: '40px',
               width: 200,
               height: 50,
             }}
             onChange={handleChange}
             options={options}
           />
          </>
        )}
        {status === 1 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your vehicle make</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ButtonGroup buttons={buttons1} status={status}/>
           </div>
           <Select
             defaultValue="All makes"
             size = 'large'
             style={{
               marginTop: '40px',
               width: 200,
               height: 50,
             }}
             onChange={handleChange}
             options={options}
           />
          </>
        )}
       
        
      </Box>
    </>
    
  )
}