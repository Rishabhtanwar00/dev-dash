import Button from '@/components/ui/Button';
import { Task } from '@/types/tasks';
import { Pencil, Trash2 } from 'lucide-react';
import { redirect } from 'next/navigation';

const priorityColors: { [key: string]: string } = {
	High: 'border-red-500',
	Medium: 'border-orange-500',
	Low: 'border-green-500',
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
	const handleEditTask = () => {
		redirect(`/dashboard/tasks/${id}`);
	};
	return (
		<>
			{view === 'list' ? (
				<div
					key={id}
					className={`flex items-center justify-between border p-4 mb-2 rounded-md ${priorityColors[priority]}`}
				>
					<div className=''>
						<h3 className='text-lg font-semibold'>{name}</h3>
						<p className='text-sm text-gray-600'>{description}</p>
						<div className='mt-2 text-sm'>
							<span className='mr-4'>Priority: {priority}</span>
							<span className='mr-4'>Due: {dueDate}</span>
							<span>Created: {createdAt}</span>
						</div>
					</div>
					<div className='flex'>
						<Button
							icon={Pencil}
							variant='secondary'
							size='sm'
							className='mr-2'
							onClick={handleEditTask}
						/>
						<Button icon={Trash2} variant='primary' size='sm' />
					</div>
				</div>
			) : (
				<div
					key={id}
					className={`border p-4 rounded-md min-w-48 ${priorityColors[priority]}`}
				>
					<div className=''>
						<h3 className='text-lg font-semibold mb-2'>{name}</h3>
						<p className='text-sm text-gray-600 mb-2'>{description}</p>
						<div className='text-sm'>
							<span className='block'>Priority: {priority}</span>
							<span className='block'>Due: {dueDate}</span>
							<span className='block'>Created: {createdAt}</span>
						</div>
						<div className='flex justify-end mt-5'>
							<Button
								icon={Pencil}
								variant='secondary'
								size='sm'
								className='mr-2'
								onClick={handleEditTask}
							/>
							<Button icon={Trash2} variant='primary' size='sm' />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default TaskCard;
