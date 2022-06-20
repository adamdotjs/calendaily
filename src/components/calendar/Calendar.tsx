import { useState } from 'react';
import { IoChevronForwardSharp, IoChevronBackSharp } from 'react-icons/io5';
import {
	add,
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	format,
	getDay,
	isEqual,
	isSameDay,
	isSameMonth,
	isToday,
	parse,
	parseISO,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns';

const Calendar = () => {
	const today = startOfToday();
	const days = eachDayOfInterval({
		start: startOfWeek(startOfMonth(today)),
		end: endOfWeek(endOfMonth(today)),
	});

	return (
		<div className="p-4">
			<div className="flex justify-between items-center">
				<h2 className="font-bold text-3xl">{format(today, 'MMM yyyy')}</h2>
				<div className="flex">
					<IoChevronBackSharp />
					<IoChevronForwardSharp />
				</div>
			</div>
			<div className="grid grid-cols-7 mt-4 grid-rows-7 border text-center bg-blue-400">
				<span>Sunday</span>
				<span>Monday</span>
				<span>Tuesday</span>
				<span>Wednesday</span>
				<span>Thursday</span>
				<span>Friday</span>
				<span>Saturday</span>
			</div>
			<div className="grid grid-cols-7 mt-4 grid-rows-7 border bg-blue-400">
				{days.map((day) => (
					<button
						key={day.toString()}
						className="bg-gray-100 border aspect-square border-black flex items-center justify-center hover:bg-gray-200"
					>
						<time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
					</button>
				))}
			</div>
		</div>
	);
};

export default Calendar;
