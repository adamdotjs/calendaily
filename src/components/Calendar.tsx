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

interface CalendarProps {
	today: number | Date;
}

const Calendar = ({ today }: CalendarProps) => {
	const days = eachDayOfInterval({
		start: startOfWeek(startOfMonth(today)),
		end: endOfWeek(endOfMonth(today)),
	});

	return (
		<div>
			<div className="flex justify-between items-center">
				<h2 className="font-bold text-3xl">{format(today, 'MMM yyyy')}</h2>
				<div className="flex">
					<IoChevronBackSharp />
					<IoChevronForwardSharp />
				</div>
			</div>
			<div className="grid grid-cols-7 mt-4 grid-rows-7 font-bold text-center">
				<span>Sun</span>
				<span>Mon</span>
				<span>Tue</span>
				<span>Wed</span>
				<span>Thu</span>
				<span>Fri</span>
				<span>Sat</span>
			</div>
			<div className="grid grid-cols-7 mt-4 grid-rows-7 gap-2 lg:gap-4">
				{days.map((day) => (
					<button
						key={day.toString()}
						className={`bg-gray-100 border-2 aspect-square border-gray-200 text-2xl font-bold rounded-xl flex items-center justify-center hover:bg-gray-200 ${
							isToday(day) && `bg-blue-200`
						} ${!isSameMonth(day, today) && `opacity-30`}`}
					>
						<time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
					</button>
				))}
			</div>
		</div>
	);
};

export default Calendar;
