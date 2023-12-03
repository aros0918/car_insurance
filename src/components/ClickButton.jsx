import { Button } from "antd";
export const ClickButton = (props) => {
  const { children, onClick } = props;
  return (
    <>
      <Button 
        type="primary" 
        size="large" 
        style={{
          width: '150px', 
          height: '50px', 
          fontSize: '20px',
        }}
        onClick={onClick}
      >
        { children }
      </Button>
    </>
  );
};