import "./Note.css";
import Rows from "../UIKit/Layouts/Rows/Rows";
import { LinesTop } from "../UIKit/Layouts/LinesTop/LinesTop";
import { Button } from "../UIKit/Elements/Button/Button";
import { Line } from "../UIKit/Layouts/Line/Line";
import { ButtonSmall } from "../UIKit/Elements/Button/ButtonSmall";
import { Between } from "../UIKit/Layouts/Between/Between";
import { Center } from "../UIKit/Layouts/Center/Center";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root");

const options = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export const Note = (props) => {
  const [note, setNote] = useState("what ya got?");
  const [title, setTitle] = useState("Title");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [changedNote, setChangedNote] = useState(false);
  const [changedTitle, setChangedTitle] = useState(true);
  const [dateEdited, setDateEdited] = useState(``);

  function handleChangedNote() {
    setChangedNote(true);
  }
  function handleChangedTitle() {
    setChangedTitle(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    console.log("it is open");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleNote(e) {
    handleChangedNote();
    setNote(e.target.value);
    setDateEdited(
      `(Last edit: ${new Date().toLocaleString("en-US", options)})`
    );
  }
  function handleTitle(e) {
    handleChangedTitle();
    setTitle(e.target.value);
  }

  const isTitle = () => {
    setTitle("");
  };

  function saveUserText() {
    {
      changedTitle && isTitle();
    }

    {
      changedNote
        ? closeModal()
        : window.alert(
            "you don't need a title but add a note please- I KNOW you have stuff to do!"
          );
    }
  }

  return (
    <div className="Note">
      <Rows>
        <Between>
          <p>{props.date}</p>
          <p>{dateEdited}</p>
          <Button onClick={props.onClick}>delete</Button>
        </Between>
        <Between>
          <h3 className="userTitle">{title}</h3>
          <Button onClick={openModal}>Edit</Button>
        </Between>
        <p className="userInput">{note}</p>
      </Rows>
      {props.children}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Note Modal"
      >
        <div className="Modal">
          <Between>
            <p>
              {`Note created at: ${new Date().toLocaleString(
                "en-US",
                options
              )}`}
            </p>
            <Button onClick={saveUserText}>close</Button>
          </Between>
          <Center>
            <Rows>
              <form>
                <input
                  className="modalTitle"
                  value={title}
                  onChange={handleTitle}
                ></input>

                <input
                  type="text"
                  className="modalInput"
                  value={note}
                  onChange={handleNote}
                ></input>
              </form>

              <Button type="submit" onClick={saveUserText}>
                Create Note
              </Button>
              <p>{dateEdited}</p>
            </Rows>
          </Center>
        </div>
      </Modal>
    </div>
  );
};

export default Note;
