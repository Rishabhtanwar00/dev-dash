import { CheckSquare, Code2, StickyNote, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SIDE_LINKS = [
	{
		id: 1,
		name: 'Dashboard',
		href: '/dashboard',
		icon: <TrendingUp size={20} />,
	},
	{
		id: 2,
		name: 'Notes',
		href: '/dashboard/notes',
		icon: <CheckSquare size={20} />,
	},
	{
		id: 3,
		name: 'Tasks',
		href: '/dashboard/tasks',
		icon: <StickyNote size={20} />,
	},
	{
		id: 4,
		name: 'Snippets',
		href: '/dashboard/snippets',
		icon: <Code2 size={20} />,
	},
];

const Sidebar = () => {
	const pathname = usePathname();

	return (
		<aside className='min-h-screen w-20 md:w-[250px] flex flex-col items-center justify-start border-r border-border bg-surface text-text p-2 py-4 md:p-4'>
			<div className='flex items-center gap-3'>
				<div className='bg-linear-to-br from-purple-500 to-pink-600 p-2 rounded-lg text-text-bright'>
					<Code2 size={25} className='text-white' />
				</div>
				<h1 className='hidden md:block text-2xl font-bold'>Dev Dash</h1>
			</div>
			<nav className='mt-8 w-full space-y-2'>
				{SIDE_LINKS.map((link) => (
					<Link
						key={link.id}
						href={link.href}
						className={`w-full flex items-center justify-center md:justify-start gap-3 px-4 py-3 md:py-3 tracking-wide ${
							pathname === link.href
								? 'bg-linear-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg'
								: ''
						}`}
					>
						{link.icon}
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				))}
			</nav>
		</aside>
	);
};

export default Sidebar;
