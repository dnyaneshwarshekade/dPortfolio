import { useEffect, useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Journey from './components/Journey';
import Skills from './components/Skills';

function App() {

	const [theme, setTheme] = useState('light');

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.add(storedTheme)
		}
	}, []);

	// Update the document class when the theme changes
	// useEffect(() => {
	// 	document.documentElement.classList.remove("light", "dark");
	// 	document.documentElement.classList.add(theme);
	// 	localStorage.setItem("theme", theme);
	// }, [theme]);

	// defining toggle switch for dark and light mode portfolio
	const toggleSwitch = () => {
		const newTheme = (theme === 'light') ? 'dark' : 'light';
		setTheme(newTheme);
		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<>
			<BrowserRouter>
				<NavBar toggleTheme={toggleSwitch} />
				<Routes>
					<Route path="/" element={<Home/>}></Route>
					<Route path="/journey" element={<Journey/>}></Route>
					<Route path="/skills" element={<Skills/>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
