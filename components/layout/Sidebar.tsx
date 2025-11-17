'use client';
import { DashboardIcon, NoteIcon, ProfileIcon, TaskIcon } from '@/utils/Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const SIDE_LINKS = [
	{
		id: 1,
		name: 'Dashboard',
		href: '/dashboard',
		icon: <DashboardIcon size={15} />,
	},
	{
		id: 2,
		name: 'Notes',
		href: '/dashboard/notes',
		icon: <NoteIcon size={15} />,
	},
	{
		id: 3,
		name: 'Tasks',
		href: '/dashboard/tasks',
		icon: <TaskIcon size={15} />,
	},
	{
		id: 4,
		name: 'Profile',
		href: '/dashboard/profile',
		icon: <ProfileIcon size={15} />,
	},
];

const Sidebar = () => {
	const pathname = usePathname();

	useEffect(() => {
		console.log(pathname);
	}, [pathname]);

	return (
		<section className='min-h-screen w-[250px] flex flex-col items-left justify-center text-left shadow-xs shadow-secondary text-sm bg-background text-foreground relative'>
			<Link
				href='/'
				className='absolute top-5 left-[50%] translate-x-[-50%] text-[26px] tracking-wider font-bold text-pink-600'
			>
				DEV<span className='ml-1'>DASH</span>
			</Link>
			{SIDE_LINKS.map((link) => (
				<Link
					key={link.id}
					href={link.href}
					className={`flex items-center gap-2 px-2 py-3 pl-5 tracking-wide ${
						pathname === link.href
							? 'bg-linear-to-r from-foreground/0 via-secondary/50 to-backfrom-foreground/0 text-pink-600'
							: ''
					}`}
				>
					{link.icon}
					{link.name}
				</Link>
			))}
		</section>
	);
};

export default Sidebar;
