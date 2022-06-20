import Calendar from './components/calendar/Calendar';

const App = () => {
	return (
		<div className="grid lg:grid-cols-2 w-full min-h-screen">
			<Calendar />
			<div></div>
		</div>
	);
};

export default App;
