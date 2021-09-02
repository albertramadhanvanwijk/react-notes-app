import NotesList from "./components/NotesList";
import { useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "02/09/2001"
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "09/09/2001"
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "16/09/2001"
    },
  ]);

  return <div className="container">
    <NotesList notes={notes}/>
  </div>;
};

export default App;