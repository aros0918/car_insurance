import { useState, useEffect } from "react";
import './landingpage.css';
import { Button } from "antd";
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
      <img src={logo} style={{width: '100%'}}/>
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
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", top:'calc(50% - 100px)', left: '50%', position: "fixed", transform: "translate(-50%, -50%"}}>
          <Button 
            type='link'
            size="large" 
            style={{
              width: 'auto', 
              height: 'auto', 
              fontSize: '30px',
              margin: '10px 10px 0 10px',
            }}
            onClick={() => setPage("/comparison")}
          >
            <p className="customizeFont1" >&nbsp;GET STARTED!&nbsp;</p>
          </Button>
        </div>
        
        
   
      
    </div>
    
  )
}