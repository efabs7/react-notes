import Rows from "../UIKit/Layouts/Rows/Rows";
import { LinesTop } from "../UIKit/Layouts/LinesTop/LinesTop";
import { Button } from "../UIKit/Elements/Button/Button";
import { ButtonSmall } from "../UIKit/Elements/Button/ButtonSmall";
import { Between } from "../UIKit/Layouts/Between/Between";
import { Center } from "../UIKit/Layouts/Center/Center";
import Modal from "react-modal";
import { useState } from "react";
import "./Modal.css";


//experimental component/don't need
const options = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

Modal.setAppElement(el);
let subtitle;

export const Modal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };
  isOpen = props.isOpen;
  onAfterOpen = props.onAfterOpen;
  onRequestClose = { closeModal };
  contentLabel = props.contentLabel;

  return (
    
  );
};
