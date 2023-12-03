import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Header, ButtonGroup, ClickButton } from "../components";
import { Typography, Select } from "antd";

export const MainPage = () => {
  const [buttons, setButtons] = useState([]);
  const [buttons1, setButtons1] = useState([]);
  const [buttons2, setButtons2] = useState([]);
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [jsonData, setJsonData] = useState(null);
  const status = useSelector(state => state.status);
  const year = useSelector(state => state.year);
  const vehicle = useSelector(state => state.vehicle);
  const model = useSelector(state => state.model);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    if(status === 0){
      dispatch({
        type: "Year",
        payload: value,
      })
    }
    if(status === 1){
      dispatch({
        type: "Vehicle",
        payload: value,
      })
    }
    dispatch({
      type: "Status",
      payload: status + 1,
    });
  };
  
  useEffect(() => {
    if(status === 1){
      const generatedButtons = [];
      const generatedOptions = [];
      let data = require('./data/'+year.toString()+'.json');
      setJsonData(data);  
      for(let i = 0; i < data.length; i++){
        if(data[i].pop === true){
          generatedButtons.push(data[i].value);
        }
      }
      for(let i = 0; i < data.length; i++){
        generatedOptions.push({
          value: data[i].value,
          label: data[i].value,
        });
      }
      console.log(generatedButtons);
      setButtons1(generatedButtons);
      setOptions1(generatedOptions);
    }
    if(status === 2){
      const generatedButtons = [];
      for(let i = 0; i < jsonData.length; i++){
        if(jsonData[i].value === vehicle){
          console.log(jsonData[i].data.length)
          for(let j = 0; j < jsonData[i].data.length; j++){
            generatedButtons.push(jsonData[i].data[j].value);
          }
        }
      }
      console.log(generatedButtons);
      setButtons2(generatedButtons);
    }
  }, [status]);

  useEffect(() => {
    dispatch({
      type: "Status",
      payload: 0,
    });
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
      <Header percent={parseInt((status+1)/35*100)}/>
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
             options={options1}
           />
          </>
        )}
        {status === 2 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your model</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ButtonGroup buttons={buttons2} status={status}/>
           </div>
          </>
        )}
        {status === 3 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Add second vehicle?</b>
           </Typography>
           <Typography style={{marginTop: '10px', fontSize: '20px'}}>
              (Save Additional 20%)
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton>Yes</ClickButton>
             <ClickButton>No</ClickButton>
           </div>
           <div style={{marginTop: '20px'}}>
              1 : {year} &nbsp; {vehicle} &nbsp; {model}
           </div>
          </>
        )}
        
      </Box>
    </>
    
  )
}