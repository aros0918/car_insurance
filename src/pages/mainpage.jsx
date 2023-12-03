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
  const [firstyear, setFirstyear] = useState(null);
  const [firstvehicle, setFirstvehicle] = useState(null);
  const [firstmodel, setFirstmodel] = useState(null);
  const [secondyear, setSecondyear] = useState(null);
  const [secondvehicle, setSecondvehicle] = useState(null);
  const [secondmodel, setSecondmodel] = useState(null);
  let second = null;
  const options2 = [
    { value: 'No', label: 'Not Currently Insured' },
    { value: '21st Century', label: '21st Century' },
    { value: 'AIG', label: 'AIG' },
    { value: 'Allstate', label: 'Allstate' },
    { value: 'American Family', label: 'American Family' },
    { value: 'Country Financial', label: 'Country Financial' },
    { value: 'Esurance', label: 'Esurance' },
    { value: 'Farmers', label: 'Farmers' },
    { value: 'Geico', label: 'Geico' },
    { value: 'Liberty Mutual', label: 'Liberty Mutual' },
    { value: 'MetLife', label: 'MetLife' },
    { value: 'Nationwide', label: 'Nationwide' },
    { value: 'Progressive', label: 'Progressive' },
    { value: 'State Farm', label: 'State Farm' },
    { value: 'Travelers', label: 'Travelers' },
  ]

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
    if(status === 4){
      dispatch({
        type: "Year",
        payload: value,
      })
    }
    if(status === 5){
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
  const handleChange1 = (value) => {
    console.log(value)
  }
  const onSubmit3yes = () => {
    second = 'done';
    dispatch({
      type: "Status",
      payload: 4,
    });
  }
  const onSubmit3no = () => {
    dispatch({
      type: "Status",
      payload: 7,
    });
  }
  const onSubmit7yes = () => {
    dispatch({
      type: "Status",
      payload: 8,
    });
  }
  const onSubmit7no = () => {
    dispatch({
      type: "Status",
      payload: 8,
    });
  }
  const onSubmit8yes = () => {
    dispatch({
      type: "Status",
      payload: 9,
    });
  }
  const onSubmit8no = () => {
    dispatch({
      type: "Status",
      payload: 9,
    });
  }
  const onSubmit9yes = () => {
    dispatch({
      type: "Status",
      payload: 10,
    });
  }
  const onSubmit9no = () => {
    dispatch({
      type: "Status",
      payload: 12,
    });
  }
  const onSubmit10continue = () => {
    dispatch({
      type: "Status",
      payload: 11,
    });
  }
  const onSubmit12male = () => {
    dispatch({
      type: "Status",
      payload: 13,
    });
  }
  const onSubmit12female = () => {
    dispatch({
      type: "Status",
      payload: 13,
    });
  }
  const onSubmit12nonbinary = () => {
    dispatch({
      type: "Status",
      payload: 13,
    });
  }
  
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
    if(status === 3){
      setFirstmodel(model);
      setFirstvehicle(vehicle);
      setFirstyear(year);
    }
    if(status === 4){
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
    }
    if(status === 5){
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
    if(status === 6){
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
    if(status === 7){
      setSecondmodel(model);
      setSecondvehicle(vehicle);
      setSecondyear(year);
    }
    
  }, [status]);

  useEffect(() => {
    setFirstmodel(null);
    setFirstvehicle(null);
    setFirstyear(null);
    setSecondmodel(null);
    setSecondvehicle(null);
    setSecondyear(null);
    second = null;
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
             <ClickButton onClick={onSubmit3yes}> Yes </ClickButton>
             <ClickButton onClick={onSubmit3no}> No </ClickButton>
           </div>
           <div style={{marginTop: '20px'}}>
              <p>1 : {firstyear} &nbsp; {firstvehicle} &nbsp; {firstmodel}</p>
              {second === 'done' && (<p>2 : {secondyear} &nbsp; {secondvehicle} &nbsp; {secondmodel}</p>)}
           </div>
          </>
        )}
        {status === 4 && (
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
        {status === 5 && (
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
        {status === 6 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your model</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ButtonGroup buttons={buttons2} status={status}/>
           </div>
          </>
        )}
        {status === 7 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Do you have a valid drivers license?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={onSubmit7yes}> Yes </ClickButton>
             <ClickButton onClick={onSubmit7no}> No </ClickButton>
           </div>
          </>
        )}
        {status === 8 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Do you need an SR-22?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={onSubmit8yes}> Yes </ClickButton>
             <ClickButton onClick={onSubmit8no}> No/Not Sure </ClickButton>
           </div>
          </>
        )}
        {status === 9 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Are You Currently Insured?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={onSubmit9yes}> Yes </ClickButton>
             <ClickButton onClick={onSubmit9no}> No/Not Sure </ClickButton>
           </div>
          </>
        )}
        {status === 10 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Current auto insurance</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
            <Select
              defaultValue="Other"
              size = 'large'
              style={{
                marginTop: '40px',
                width: 200,
                height: 50,
              }}
              onChange={handleChange1}
              options={options2}
            />
           </div>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={onSubmit10continue}> Continue </ClickButton>
           </div>
           <div style={{marginTop: '20px'}}>
              <p>1 : {firstyear} &nbsp; {firstvehicle} &nbsp; {firstmodel}</p>
              {second === 'done' && (<p>2 : {secondyear} &nbsp; {secondvehicle} &nbsp; {secondmodel}</p>)}
           </div>
          </>
        )}
        {status === 12 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Gender</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={onSubmit12male}> Male </ClickButton>
             <ClickButton onClick={onSubmit12female}> Female </ClickButton>
             <ClickButton onClick={onSubmit12nonbinary}> Non-Binary </ClickButton>
           </div>
          </>
        )}
        
      </Box>
    </>
    
  )
}