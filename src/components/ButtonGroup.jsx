import { useDispatch } from "react-redux";
import { ClickButton } from "./ClickButton";
export const ButtonGroup = ({buttons, status}) => {

  const dispatch = useDispatch();

  const rows = Math.ceil(buttons.length / 4); // Calculate the number of rows

  const onClick = button => {
    console.log(button);
    if(status === 0){
      dispatch({
        type: "Year",
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
      {buttons.slice(index * 4, (index + 1) * 4).map((button, buttonIndex) => (
        <div style={{margin: "10px 10px 0 10px"}}>
          <ClickButton key={buttonIndex} onClick={() => onClick(button)}>
            {button}
          </ClickButton>
        </div>
      ))}
    </div>
  ));

  return <div>{buttonRows}</div>;
};