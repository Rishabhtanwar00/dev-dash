'use client';
import useThemeStore from '@/store/useThemeStore';
import { MenuIcon, MoonIcon, SunIcon } from '@/utils/Icons';

const Navbar = () => {
	const { theme, setTheme, toogleSidebar } = useThemeStore();

	const handletheme = () => {
		const htmlElement = document.documentElement;
		if (theme === 'dark') {
			setTheme('light');
			htmlElement.classList.remove('dark');
		} else {
			setTheme('dark');
			htmlElement.classList.add('dark');
		}
	};

	return (
		<nav className='h-[70px] w-full flex items-center justify-between px-5 shadow-xs shadow-secondary bg-background text-foreground'>
			<button
				onClick={toogleSidebar}
				className='p-1 rounded border cursor-pointer'
			>
				<MenuIcon size={24} />
			</button>
			<button onClick={handletheme} className='cursor-pointer'>
				{theme === 'dark' ? <SunIcon size={24} /> : <MoonIcon size={24} />}
			</button>
		</nav>
	);
};

export default Navbar;
