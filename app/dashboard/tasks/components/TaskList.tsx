import { TaskListProps } from '@/types/tasks';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, view }: TaskListProps) => {
	return (
		<div className={view === 'grid' ? 'grid grid-cols-4 gap-4' : ''}>
			{tasks.map((task) => (
				<TaskCard
					key={task.id}
					id={task.id}
					name={task.name}
					description={task.description}
					priority={task.priority}
					dueDate={task.dueDate}
					createdAt={task.createdAt}
					view={view}
				/>
			))}
		</div>
	);
};

export default TaskList;
