import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const Transducer = localFont({
	src: [{ path: '../fonts/Transducer.woff2', weight: '400' }],
	variable: '--font-transducer-local',
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
			className={`${Transducer.variable} antialiased`}
		>
			<body className='bg-background text-foreground'>{children}</body>
		</html>
	);
}
