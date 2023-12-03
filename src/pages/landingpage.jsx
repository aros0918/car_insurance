import { Box } from "@mui/material"
import LandingPicture from "../assets/images/landing.png";
import { Button } from "antd";

export const LandingPage = () => {
  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "left",
        flexDirection: "column",
        margin: '0 24px 0 24px',
      }}
    >
      <h1>LeaveFeedback</h1>
      <Button>Hello</Button>
      <p>Welcome to LeaveFeedback. Our mission is to bridge the gap between customers and businesses, providing a platform where consumer opinions are not only heard but also make a real impact.</p>
      <p>Whether you've experienced exceptional customer service, or faced challenges that need improvement, LeaveFeedback is here to help you voice your thoughts and empower businesses to serve you better.</p>
      <p>Join us in this journey of improving customer-business relationships and enhancing the products and services you love. Your feedback matters, and we're here to make sure it's heard.</p>
      <img src={LandingPicture} style={{width: '100%'}} alt="group-of-people-standing-in-front-of-food-stall-counter" />
    </Box>
  )
}