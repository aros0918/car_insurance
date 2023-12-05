import { useState, useEffect } from "react";
import './landingpage.css';
import { Button, Space, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo from '../images/car.webp';
export const LandingPage = () => {
  const [page, setPage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (page === "/comparison") {
      navigate("/comparison");
    }
  }, [page]);
  return(
    <div>
        <img src={logo} className="logo"/>
        
        <div class="area" style={{marginTop: '-10px'}} >
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div >
        <div className="slogan" style={{top: '62%'}}> 
          Let’s drop your auto insurance rates today</div>
        <div className="slogan" style={{top: '75%'}}>
          Find out how much you can save in 1 minute.</div>
  
        <div className="inputbutton" style={{top: '44%'}}>
          please enter your zip code</div>
        <Space.Compact className="inputbutton" style={{top: '48%'}}>
          <Input placeholder=" zip code" />
          <Button type="primary" onClick={() => setPage("/comparison")}>Go!</Button>
        </Space.Compact>

    </div>
    
  )
}