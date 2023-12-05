import { useDispatch } from "react-redux";
import { ClickButton } from "./ClickButton";
export const ButtonGroup = ({buttons, status}) => {

  const dispatch = useDispatch();

  const rows = Math.ceil(buttons.length / 3); // Calculate the number of rows

  const onClick = button => {
    console.log(button);
    if(status === 0){
      dispatch({
        type: "Year",
        payload: button,
      })
    }
    if(status === 1){
      dispatch({
        type: "Vehicle",
        payload: button,
      })
    }
    if(status === 2){
      dispatch({
        type: "Model",
        payload: button,
      })
    }
    if(status === 4){
      dispatch({
        type: "Year",
        payload: button,
      })
    }
    if(status === 5){
      dispatch({
        type: "Vehicle",
        payload: button,
      })
    }
    if(status === 6){
      dispatch({
        type: "Model",
        payload: button,
      })
    }
    dispatch({
      type: "Status",
      payload: status + 1,
    });
  }

  const buttonRows = Array.from({ length: rows }, (_, index) => (
    <div key={index} style={{ display: "flex" }}>
      {buttons.slice(index * 3, (index + 1) * 3).map((button, buttonIndex) => (

          <ClickButton key={buttonIndex} onClick={() => onClick(button)}>
            {button}
          </ClickButton>
      ))}
    </div>
  ));

  return <div>{buttonRows}</div>;
};