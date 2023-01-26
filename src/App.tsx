import React from 'react';
import { Home } from './pages/Home/Home';
import './styles/globals.css';

export function App() {
	return (
		<div className="w-screen min-h-screen bg-background text-white">
			<Home />
		</div>
	);
}
