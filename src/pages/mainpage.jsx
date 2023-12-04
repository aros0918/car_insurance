import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { Header, ButtonGroup, ClickButton, Footer } from "../components";
import { Typography, Select, Input } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, HomeOutlined } from '@ant-design/icons';

export const MainPage = () => {
  const [buttons, setButtons] = useState([]);
  const [buttons1, setButtons1] = useState([]);
  const [buttons2, setButtons2] = useState([]);
  const [buttons3, setButtons3] = useState([]);
  const [buttons4, setButtons4] = useState([]);
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [options3, setOptions3] = useState([]);
  const [jsonData, setJsonData] = useState(null);
  const [month, setMonth] = useState(null);
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
      if(data !== null){
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
        setButtons1(generatedButtons);
        setOptions1(generatedOptions);
      }
    }
    if(status === 2){
      const generatedButtons = [];
      if(jsonData !== null){
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
    if(status === 23){
      const generatedButtons = [];
      if(month === "JUN"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "FEB"){
        for(let i = 1; i <= 29; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "MAR"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "APR"){
        for(let i = 1; i <= 30; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "MAY"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "JUN"){
        for(let i = 1; i <= 30; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "JUL"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "AUG"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "SEP"){
        for(let i = 1; i <= 30; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "OCT"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "NOV"){
        for(let i = 1; i <= 30; i++){
          generatedButtons.push(i.toString());
        }
      }
      if(month === "DEC"){
        for(let i = 1; i <= 31; i++){
          generatedButtons.push(i.toString());
        }
      }
      setButtons3(generatedButtons);
    }
    if(status === 24){
      const generatedButtons = [];
      for (let i = 2005; i >= 1982; i--) {
        generatedButtons.push(i.toString());
      }
      setButtons4(generatedButtons);
      const generatedOptions = [];
      
      for(let i = 1981; i >= 1906; i--){
        generatedOptions.push({
          value: i.toString(),
          label: i.toString(),
        });
      }
      setOptions3(generatedOptions);
    }
  }, [status]);
  useEffect(() => {
    setMonth(null);
    setFirstmodel(null);
    setFirstvehicle(null);
    setFirstyear(null);
    setSecondmodel(null);
    setSecondvehicle(null);
    setSecondyear(null);
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
      <Header percent={parseInt((status+1)/27*100)}/>
      <Box
        sx={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: '50px 24px 0 24px',
          minHeight: 'calc(100vh - 250px)',
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
              {model !== firstmodel && (<p>2 : {secondyear} &nbsp; {secondvehicle} &nbsp; {secondmodel}</p>)}
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
              {model !== firstmodel && (<p>2 : {secondyear} &nbsp; {secondvehicle} &nbsp; {secondmodel}</p>)}
           </div>
          </>
        )}
        {status === 11 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>How long have you continuously had auto insurance?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 12})}> Less Than Year </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 12})}> 1 To 2 Years </ClickButton>
           </div>
           <div> 
             <ClickButton onClick={() => dispatch({type: "Status", payload: 12})}> 2 To 3 Years </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 12})}> 4+ Years </ClickButton>
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
        {status === 13 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Married?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 14})}> Yes </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 14})}> No </ClickButton>
           </div>
          </>
        )}
        {status === 14 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>What is your credit score?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 15})}> Not Sure (That's Okay!) </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 15})}> Poor (Below 580) </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 15})}> Fair/Average (580-679) </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 15})}> Good (680-719) </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 15})}> Excellent (720+) </ClickButton>
           </div>
          </>
        )}
        {status === 15 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>What is your education level?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> Incomplete </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> High School </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> Some College </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> Assocaite Degree </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> Bachelors Degree </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> Masters Degree </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 16})}> PhD </ClickButton>
           </div>
          </>
        )}
        {status === 16 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Homeowner?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 17})}> Own </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 18})}> Rent </ClickButton>
           </div>
          </>
        )}
        {status === 17 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Want to bundle home and auto policies? (Save additional 20%)</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 18})}> Yes </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 18})}> No </ClickButton>
           </div>
          </>
        )}
        {status === 18 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Have you had claims, accidents or violations in the last 3 years?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 19})}> Yes </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 22})}> No </ClickButton>
           </div>
          </>
        )}
        {status === 19 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>When did the incident occur?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Accident: At Fault </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Accident: Not At Fault </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Claim: Theft </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Claim: Other </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Violation: Drunk Driving </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Violation: Speeding </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 20})}> Violation: Other Ticket </ClickButton>
           </div>
          </>
        )}
        {status === 20 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Amount paid by your insurance?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 21})}> Less Than Year </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 21})}> 1-2 Years Ago </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 21})}> 2-3 Years Ago </ClickButton>
           </div>
          </>
        )}
        {status === 21 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>What type of incident was it?</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 22})}> Less Than $1000 </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 22})}> $1001 To $5000 </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 22})}> $5001 - $10000 </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 22})}> More Than $10000 </ClickButton>
             <ClickButton onClick={() => dispatch({type: "Status", payload: 22})}> Unknown </ClickButton>
           </div>
          </>
        )}
        {status === 22 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your birth month</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('JAN')}}> JAN </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('FEB')}}> FEB </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('MAR')}}> MAR </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('APR')}}> APR </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('MAY')}}> MAY </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('JUN')}}> JUN </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('JUL')}}> JUL </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('AUG')}}> AUG </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('SEP')}}> SEP </ClickButton>
           </div>
           <div>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('OCT')}}> OCT </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('NOV')}}> NOV </ClickButton>
             <ClickButton onClick={() => {dispatch({type: "Status", payload: 23})
              setMonth('DEC')}}> DEC </ClickButton>
           </div>
          </>
        )}
        {status === 23 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your birth day</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ButtonGroup buttons={buttons3} status={status}/>
           </div>
          </>
        )}
        {status === 24 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>Select your birth year</b>
           </Typography>
           <div style={{marginTop: '20px'}}>
             <ButtonGroup buttons={buttons4} status={status}/>
           </div>
           <Select
             defaultValue="All years"
             size = 'large'
             style={{
               marginTop: '40px',
               width: 200,
               height: 50,
             }}
             onChange={handleChange}
             options={options3}
           />
          </>
        )}
        {status === 25 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>What Is Your Name?</b>
           </Typography>
           <Typography style={{marginTop: '10px', fontSize: '20px'}}>
             Your Information Is Safe & Secure
           </Typography>
           <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
                flexDirection: "column",
                width: '400px',
              }}
            >
              <Typography style={{marginTop: '20px', fontSize: '25px'}}>
                First Name
              </Typography>
              <Input style={{width: '400px'}} size="large" placeholder="First Name" prefix={<UserOutlined />} />
              <Typography style={{marginTop: '20px', fontSize: '25px'}}>
                Last Name
              </Typography>
              <Input style={{width: '400px'}} size="large" placeholder="Last Name" prefix={<UserOutlined />} />
           </Box>
           <ClickButton style={{marginTop: '10px'}} onClick={() => dispatch({type: "Status", payload: 26})}> Continue </ClickButton>
          </>
        )}
        {status === 26 && (
          <>
           <Typography style={{marginTop: '20px', fontSize: '35px'}}>
             <b>You Qualify For Major Discounts!</b>
           </Typography>
           <Typography style={{marginTop: '10px', fontSize: '20px'}}>
             Complete this final step to see how much you save!
           </Typography>
           <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "left",
                flexDirection: "column",
                width: '400px',
              }}
            >
              <Typography style={{marginTop: '20px', fontSize: '25px'}}>
                Street Address
              </Typography>
              <Input style={{width: '400px'}} size="large" placeholder="Street Address" prefix={<HomeOutlined />} />
              <Typography style={{marginTop: '20px', fontSize: '25px'}}>
                Email
              </Typography>
              <Input style={{width: '400px'}} size="large" placeholder="Email" prefix={<MailOutlined />} />
              <Typography style={{marginTop: '20px', fontSize: '25px'}}>
                Phone Number
              </Typography>
              <Input style={{width: '400px'}} size="large" placeholder="Phone Number" prefix={<PhoneOutlined />} />
           </Box>
           <ClickButton style={{marginTop: '10px'}}> Get My Quotes </ClickButton>
          </>
        )}
      </Box>
      <Footer />
    </>
    
  )
}