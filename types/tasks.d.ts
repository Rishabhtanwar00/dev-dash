export type Task = {
	id: number;
	name: string;
	description: string;
	priority: 'High' | 'Medium' | 'Low';
	dueDate: string;
	createdAt: string;
	view?: 'list' | 'grid';
};

export type TaskListProps = {
	tasks: Task[];
	view: 'list' | 'grid';
};

interface formDataProps {
	title: string;
	description: string;
	priority: string;
	dueDate: Date | null;
	tags: string[];
}
interface TaskFormProps {
	formTitle: string;
	initialData?: formDataProps;
}
