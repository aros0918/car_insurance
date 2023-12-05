import { Button } from "antd";
import './button.css';
export const ClickButton = (props) => {
  const { children, onClick, type, className } = props;
  const buttonType = type || "primary";
  const name = className || "buttonstyle";
  return (
    <>
      <Button 
        type={buttonType}
        size="large"
        className={name}
        onClick={onClick}
      >
        { children }
      </Button>
    </>
  );
};