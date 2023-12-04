import { Button } from "antd";
export const ClickButton = (props) => {
  const { children, onClick } = props;
  return (
    <>
      <Button 
        type="primary" 
        size="large" 
        style={{
          width: '200px', 
          height: '50px', 
          fontSize: '15px',
          margin: '10px 10px 0 10px',
        }}
        onClick={onClick}
      >
        { children }
      </Button>
    </>
  );
};