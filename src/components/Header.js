import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Catatanmu</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				<img src="https://img.icons8.com/material-outlined/24/000000/quick-mode-on--v1.png"/>
			</button>
		</div>
	);
};

export default Header;