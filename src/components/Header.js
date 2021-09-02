import React from 'react';

const Header = ({ handleToggleDarkMode,darkMode }) => {

    const handleDarkMode = () => {
        handleToggleDarkMode(!darkMode)         
		localStorage.setItem('react-note-theme-data',!darkMode)
    }
    return (
        <div className='header'>
            <h1>Catatanmu</h1>
            <button onClick={handleDarkMode} className='save'>
                <img src="https://img.icons8.com/material-outlined/24/000000/quick-mode-on--v1.png" />
            </button>
        </div>
    );
};

export default Header;