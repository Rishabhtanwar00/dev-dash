import { Task } from '@/types/tasks';

const priorityColors: { [key: string]: string } = {
	High: 'border-red-600',
	Medium: 'border-orange-600',
	Low: 'border-green-600',
};

const TaskCard = ({
	id,
	name,
	description,
	priority,
	dueDate,
	createdAt,
	view,
}: Task) => {
	return (
		<>
			{view === 'list' ? (
				<div key={id} className='border p-4 mb-2 rounded-md'>
					<h3 className='text-lg font-semibold'>{name}</h3>
					<p className='text-sm text-gray-600'>{description}</p>
					<div className='mt-2 text-sm'>
						<span className='mr-4'>Priority: {priority}</span>
						<span className='mr-4'>Due: {dueDate}</span>
						<span>Created: {createdAt}</span>
					</div>
				</div>
			) : (
				<div
					key={id}
					className={`border p-4 rounded-md min-w-48 ${priorityColors[priority]}`}
				>
					<h3 className='text-lg font-semibold mb-2'>{name}</h3>
					<p className='text-sm text-gray-600 mb-2'>{description}</p>
					<div className='text-sm'>
						<span className='block'>Priority: {priority}</span>
						<span className='block'>Due: {dueDate}</span>
						<span className='block'>Created: {createdAt}</span>
					</div>
				</div>
			)}
		</>
	);
};

export default TaskCard;
