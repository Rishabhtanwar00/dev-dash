const page = () => {
	const CARDS_DATA = [
		{
			id: 1,
			title: 'Repositories',
			count: 15,
			gradient: 'bg-gradient-to-br from-blue-600 to-blue-700',
		},
		{
			id: 2,
			title: 'Tasks Completed',
			count: 5,
			gradient: 'bg-gradient-to-br from-purple-600 to-purple-700',
		},
		{
			id: 3,
			title: 'Tasks Pending',
			count: 3,
			gradient: 'bg-gradient-to-br from-pink-600 to-pink-700',
		},
		{
			id: 4,
			title: 'Total Notes',
			count: 10,
			gradient: 'bg-gradient-to-br from-orange-600 to-orange-700',
		},
	];
	return (
		<div className='bg-background text-foreground'>
			<h1 className='text-3xl lg:text-4xl font-semibold text-text-bright'>
				Welcome Rishabh<span className='ml-1 wave'>&#x1F44B;</span>
			</h1>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>
				{CARDS_DATA.map((card) => (
					<div
						key={card.id}
						className={`border border-border rounded p-5 w-full min-w-[150px] lg:min-w-[250px] flex flex-col items-center justify-center gap-3 text-center text-white ${card.gradient} transition-all duration-300 ease-in-out`}
					>
						<p className='text-base md:text-xl'>{card.title}</p>
						<p className='font-bold text-xl md:text-2xl'>{card.count}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default page;
