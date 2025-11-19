'use client';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import useThemeStore from '@/store/useThemeStore';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
	const { showSidebar } = useThemeStore();
	return (
		<div className='flex'>
			<div
				className={`fixed ${
					showSidebar ? 'translate-x-0' : '-translate-x-full'
				} transition-all duration-300`}
			>
				<Sidebar />
			</div>
			<div
				className={`flex-1 ${
					showSidebar ? 'ml-20 md:ml-[250px]' : 'ml-0'
				} transition-all duration-300`}
			>
				<Navbar />
				<div className='p-5 font-poppins'>{children}</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
