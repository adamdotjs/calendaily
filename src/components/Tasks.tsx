import { startOfToday } from 'date-fns';

type Tasks = {
	category: string;
	description: string;
	start: string;
	status: 'open' | 'complete' | 'canceled' | 'priority';
};

const tasks: Tasks[] = [
	{
		category: 'Appointment',
		description: 'Meet with Dr. Gray',
		start: '8:30 AM',
		status: 'open',
	},
	{
		category: 'Todo Item',
		description: 'Stop at the post office',
		start: 'any time',
		status: 'canceled',
	},
	{
		category: 'Reminder',
		description: 'Meet with Dr. Gray',
		start: '10:00 AM',
		status: 'priority',
	},
	{
		category: 'Reminder',
		description: 'Meet with Dr. Gray',
		start: '10:00 AM',
		status: 'open',
	},
	{
		category: 'Reminder',
		description: 'Meet with Dr. Gray',
		start: '10:00 AM',
		status: 'complete',
	},
];

interface TasksProps {
	today: number | Date;
}

const Tasks = ({ today }: TasksProps) => {
	const statusClasses = {
		open: 'bg-blue-200 border-blue-300',
		complete: 'bg-green-200 border-green-200 opacity-50',
		canceled: 'bg-gray-200 border-gray-200 opacity-50',
		priority: 'bg-red-200 border-red-300',
	};

	return (
		<div>
			<h2 className="font-bold text-3xl">Tasks for {JSON.stringify(today)}</h2>
			<form action="">
				<input type="text" className="border p-2" />
				<button className="bg-orange-600 p-4 text-white">Add</button>
			</form>
			<ul className="grid gap-4 mt-4">
				{!!tasks &&
					tasks
						.sort((a, z) => a.start - z.start)
						.map((task) => (
							<li className={`p-4 rounded-lg border-2 ${statusClasses[task.status]}`}>
								<p>{task.category}</p>
								<h3 className="font-bold text-xl">{task.description}</h3>
								<p>
									Starts at <time>{task.start}</time>
								</p>
							</li>
						))}
			</ul>
		</div>
	);
};

export default Tasks;
