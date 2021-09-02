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
			text: 'This is my third note!',
			date: '28/04/2021',
		},
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "16/09/2001"
    },
  ]);

  const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	};

  const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};


  return (
    <div className="container">
      <NotesList 
      notes={notes} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;