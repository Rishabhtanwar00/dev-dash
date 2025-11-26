'use client';
import useThemeStore from '@/store/useThemeStore';
import { Menu, Moon, Search, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Input from '../ui/Input';
const Navbar = () => {
	const { theme, setTheme, toogleSidebar } = useThemeStore();
	const [isAnimating, setIsAnimating] = useState(false);

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const queryParams = searchParams.get('q') || '';
	const [searchQuery, setSearchQuery] = useState(queryParams);

	useEffect(() => {
		setTheme('dark');
	}, [setTheme]);

	const handletheme = () => {
		setIsAnimating(true);
		const htmlElement = document.documentElement;

		// Add transition to html element
		htmlElement.style.transition =
			'background-color 0.3s ease, color 0.3s ease';

		if (theme === 'dark') {
			setTheme('light');
			htmlElement.classList.remove('dark');
		} else {
			setTheme('dark');
			htmlElement.classList.add('dark');
		}

		setTimeout(() => setIsAnimating(false), 300);
	};

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		console.log(value);
		setSearchQuery(value);
		router.push(pathname + '?' + new URLSearchParams({ q: value }).toString());
	};

	return (
		<nav className='h-[70px] w-full flex items-center justify-between px-5 border-b border-border bg-surface text-text'>
			<button
				onClick={toogleSidebar}
				className='cursor-pointer active:scale-95 transition-transform duration-100'
			>
				<Menu size={24} />
			</button>
			<div className='flex gap-5'>
				<Input
					icon={Search}
					id='search'
					placeholder='Search tasks,notes...'
					className='w-[200px]'
					value={searchQuery}
					onChange={handleSearch}
				/>
				<button
					onClick={handletheme}
					className={`cursor-pointer transition-transform duration-100 active:scale-95 ${
						isAnimating ? 'rotate-360 scale-110' : 'rotate-0 scale-100'
					} hover:scale-110`}
				>
					{theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
