'use client';
import Button from '@/components/ui/Button';
import Dropdown from '@/components/ui/Dropdown';
import { Grid, List, Plus } from 'lucide-react';
import TaskList from './components/TaskList';
import { Task } from '@/types/tasks';
import { useEffect, useState } from 'react';

const TASKS: Task[] = [
	{
		id: 1,
		name: 'Design Homepage UI',
		description: 'Create the initial wireframe and UI layout for the homepage.',
		priority: 'High',
		dueDate: '2025-11-30',
		createdAt: '2025-11-20T10:15:00Z',
	},
	{
		id: 2,
		name: 'Fix Login Bug',
		description:
			'Resolve the issue where users cannot log in with Google OAuth.',
		priority: 'Medium',
		dueDate: '2025-11-28',
		createdAt: '2025-11-19T14:20:00Z',
	},
	{
		id: 3,
		name: 'Write API Documentation',
		description: 'Document all endpoints for the user module.',
		priority: 'Low',
		dueDate: '2025-12-05',
		createdAt: '2025-11-18T09:40:00Z',
	},
	{
		id: 4,
		name: 'Database Index Optimization',
		description: 'Add missing indexes to improve query performance.',
		priority: 'High',
		dueDate: '2025-11-29',
		createdAt: '2025-11-20T07:10:00Z',
	},
	{
		id: 5,
		name: 'Create Notification Service',
		description: 'Implement email and in-app notifications using Node.js.',
		priority: 'Medium',
		dueDate: '2025-12-10',
		createdAt: '2025-11-21T12:00:00Z',
	},
	{
		id: 6,
		name: 'Update Landing Page Content',
		description: 'Rewrite copy and add optimized SEO keywords.',
		priority: 'Low',
		dueDate: '2025-12-01',
		createdAt: '2025-11-17T08:30:00Z',
	},
	{
		id: 7,
		name: 'Add Payment Gateway',
		description: 'Integrate Stripe for card and UPI payments.',
		priority: 'High',
		dueDate: '2025-12-03',
		createdAt: '2025-11-20T16:45:00Z',
	},
	{
		id: 8,
		name: 'Write Unit Tests',
		description: 'Add Jest tests for authentication and dashboard modules.',
		priority: 'Medium',
		dueDate: '2025-12-07',
		createdAt: '2025-11-18T11:00:00Z',
	},
	{
		id: 9,
		name: 'Refactor Sidebar Component',
		description: 'Improve performance and simplify state management.',
		priority: 'Low',
		dueDate: '2025-12-02',
		createdAt: '2025-11-21T09:15:00Z',
	},
	{
		id: 10,
		name: 'Deploy Staging Environment',
		description: 'Push latest features to AWS staging with CI/CD pipeline.',
		priority: 'High',
		dueDate: '2025-11-27',
		createdAt: '2025-11-19T13:05:00Z',
	},
];

const TasksPage = () => {
	const [view, setView] = useState<'list' | 'grid'>('list');
	const [priority, setPriority] = useState<string | null>(null);
	const [sort, setSort] = useState<string | null>(null);
	const [filteredTasks, setFilteredTasks] = useState<Task[]>(TASKS);

	const handleViewChange = (newView: 'list' | 'grid') => {
		setView(newView);
	};

	const handleFilterChange = (priority: string | null) => {
		if (!priority) {
			setFilteredTasks(TASKS);
			return;
		}
		const filtered = TASKS.filter((task) => task.priority === priority);
		setFilteredTasks(filtered);
	};

	useEffect(() => {
		handleFilterChange(priority);
	}, [priority, sort]);

	return (
		<div>
			<div className='flex justify-between items-center mb-4'>
				<Button name='Add Task' icon={Plus} className='w-[150px]'></Button>
				<div className='flex gap-2'>
					<Dropdown
						name='Priority'
						options={['High', 'Medium', 'Low']}
						className={'w-[150px]'}
						value={priority || null}
						setValue={setPriority}
					/>
					<Dropdown
						name='Sort'
						options={['Name', 'Date Created', 'Due Date']}
						className={'w-[180px]'}
						value={sort || null}
						setValue={setSort}
					/>
					<Button
						onClick={() => handleViewChange('list')}
						variant={view === 'list' ? 'primary' : 'secondary'}
						icon={List}
					/>
					<Button
						onClick={() => handleViewChange('grid')}
						variant={view === 'grid' ? 'primary' : 'secondary'}
						icon={Grid}
					/>
				</div>
			</div>
			<TaskList tasks={filteredTasks} view={view} />
		</div>
	);
};

export default TasksPage;
