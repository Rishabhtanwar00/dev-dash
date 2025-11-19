import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const Transducer = localFont({
	src: [{ path: '../fonts/Transducer.woff2', weight: '400' }],
	variable: '--font-transducer-local',
	display: 'swap',
});

const Poppins = localFont({
	src: [
		{ path: '../fonts/poppins-regular.woff2', weight: '400' },
		{ path: '../fonts/poppins-500.woff2', weight: '500' },
		{ path: '../fonts/poppins-600.woff2', weight: '600' },
		{ path: '../fonts/poppins-700.woff2', weight: '700' },
	],
	variable: '--font-poppins-local',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Dev Dash',
	description: 'A Developer Productivity Dashboard',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			data-scroll-behavior='smooth'
			className={`${Transducer.variable} ${Poppins.variable} antialiased dark`}
		>
			<body className='bg-background text-text'>{children}</body>
		</html>
	);
}
