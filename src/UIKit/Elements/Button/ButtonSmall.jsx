import Center from "../../Layouts/Center/Center";
import LinesTop from "../../Layouts/LinesTop/LinesTop";
import "./ButtonSmall.css";

export const ButtonSmall = (props) => {
  return (
    <button className="BtnSmall" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default ButtonSmall;
