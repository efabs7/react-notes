import "./Header.css";
import Center from "../UIKit/Layouts/Center/Center";
import Rows from "../UIKit/Layouts/Rows/Rows";
import Line from "../UIKit/Layouts/Line/Line";
import Between from "../UIKit/Layouts/Between/Between";
import { useState } from "react";
import LinesTop from "../UIKit/Layouts/LinesTop/LinesTop";
import Note from "./Note";
import Button from "../UIKit/Elements/Button/Button";
import { ButtonSmall } from "../UIKit/Elements/Button/ButtonSmall";
import NotesGrid from "../UIKit/Layouts/NotesGrid/NotesGrid";

const noteList = [];
const options = {
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

export const Header = (props) => {
  const [showNote, setShowNote] = useState(noteList);
  const handleClick = () => {
    const createNote = {
      id: crypto.randomUUID(),
      display: (
        <Note
          date={new Date().toLocaleString("en-US", options)}
          onClick={() => handleDelete(createNote.id)}
        ></Note>
      ),
    };
    setShowNote([...showNote, createNote]);
  };

  function handleDelete(idToDelete) {
    if (
      window.confirm("are you sure you want to delete? you have stuff to do!")
    ) {
      const newList = showNote.filter((item) => item.id !== idToDelete);

      setShowNote([...newList]);
    }
  }

  const renderNotes = () => {
    return showNote.map((i) => {
      return <li key={i.id}>{i.display}</li>;
    });
  };

  return (
    <div className="Header">
      <Center>
        <Line>
          <h1>{props.title}</h1>
          <h1>{props.joke}</h1>
          <Button onClick={handleClick}>new note!</Button>
          {props.children}
        </Line>
      </Center>
      <div className="Notes">
        <NotesGrid>{renderNotes()}</NotesGrid>
      </div>
    </div>
  );
};

export default Header;
