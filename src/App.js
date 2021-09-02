import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const initialData = [
	{
		id: nanoid(),
		text: 'This is my first note!',
		date: '15/04/2021',
	},
	{
		id: nanoid(),
		text: 'This is my second note!',
		date: '21/04/2021',
	},
	{
		id: nanoid(),
		text: 'This is my third note!',
		date: '28/04/2021',
	},
	{
		id: nanoid(),
		text: 'This is my new note!',
		date: '30/04/2021',
	},
]

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState([]);

	useEffect(() => {
		const savedTheme = JSON.parse(
    localStorage.getItem('react-note-theme-data')
    );
		
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

    console.log(savedTheme)

    if (savedTheme)  {             
      setDarkMode(savedTheme)      
    } else {             
      setDarkMode(false)          
    }

		if (savedNotes) {
			setNotes(savedNotes);
		} else {
			setNotes(initialData)
		}
	}, []);

	const saveNewNotesData = (data) => {
		setNotes(data);
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(data)
		);
	}

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		};
		const newNotes = [...notes, newNote];
		saveNewNotesData(newNotes);
	};

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		saveNewNotesData(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} darkMode={darkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;