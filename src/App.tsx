import React, { useState } from 'react';
import Calendar from './components/Calendar';
import Tasks from './components/Tasks';
import Header from './components/Header';
import { startOfToday } from 'date-fns';

const App = () => {
	const today = startOfToday();
	const [selectedDay, setSelectedDay] = useState();

	const handleDateChange = (event: React.MouseEvent) => {
		setSelectedDay(event.target);
	};

	return (
		<>
			<Header />
			<div className="grid lg:grid-cols-2 w-full min-h-screen p-4 lg:p-12 gap-4 lg:gap-12">
				<Calendar today={today} />
				<Tasks today={today} />
			</div>
		</>
	);
};

export default App;
