import useOutsideClick from '@/hooks/useOutsideClick';
import { formatDate } from '@/utils/formatDate';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useRef, useState } from 'react';

interface DatePickerProps {
	label?: string;
	dueDate?: Date | null;
	setDueDate?: (date: Date) => void;
}

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const DatePicker = ({ label, dueDate, setDueDate }: DatePickerProps) => {
	const [show, setShow] = useState(false);
	const [currentDate, setCurrentDate] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState<Date | null>(
		dueDate || null
	);
	const popupRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const month = currentDate.getMonth();
	const year = currentDate.getFullYear();

	const firstDayOfMonth = new Date(year, month, 1).getDay();
	const daysInMonth = new Date(year, month + 1, 0).getDate();

	const handleInputClick = (e: React.MouseEvent<HTMLInputElement>) => {
		e.stopPropagation();
		setShow(!show);
	};

	const handlePrevMonth = () => {
		setCurrentDate(new Date(year, month - 1, 1));
	};

	const handleNextMonth = () => {
		setCurrentDate(new Date(year, month + 1, 1));
	};

	const handleSelectDate = (day: number) => {
		const selected = new Date(year, month, day);
		setSelectedDate(selected);
		setDueDate?.(selected);
		setShow(false);
	};

	useOutsideClick([popupRef, inputRef], () => setShow(false));

	return (
		<div>
			{label && <label className='block mb-1 font-semibold'>{label}</label>}
			<div
				className={`relative border border-border bg-surface text-text-bright rounded-md w-full`}
			>
				<input
					ref={inputRef}
					readOnly
					type='text'
					placeholder='Select Date'
					value={selectedDate ? formatDate(selectedDate) : ''}
					className={`w-full px-3 py-2 outline-none border-none`}
					onClick={handleInputClick}
				/>
				<Calendar className='absolute right-3 top-1/2 -translate-y-1/2 text-text' />
				{show && (
					<div
						ref={popupRef}
						className='absolute w-[350px] top-full left-0 mt-1 bg-surface border border-border rounded-md p-4 shadow-lg z-10'
					>
						<div className='flex justify-between gap-2 items-center mb-4'>
							<button
								type='button'
								className='cursor-pointer'
								onClick={handlePrevMonth}
							>
								<ChevronLeft size={20} />
							</button>
							<div>
								{currentDate.toLocaleDateString('default', {
									month: 'long',
									year: 'numeric',
								})}
							</div>
							<button
								type='button'
								className='cursor-pointer'
								onClick={handleNextMonth}
							>
								<ChevronRight size={20} />
							</button>
						</div>
						<div className='grid grid-cols-7 gap-1'>
							{days.map((day) => (
								<div key={day} className='h-8 w-8 text-center font-medium'>
									{day}
								</div>
							))}
						</div>
						<div className='grid grid-cols-7 gap-1 mt-4'>
							{Array.from({ length: firstDayOfMonth - 1 }).map((_, index) => (
								<div key={index}></div>
							))}
							{Array.from({ length: daysInMonth }).map((_, index) => {
								const day = index + 1;
								const isSelected =
									selectedDate &&
									selectedDate.getDate() === day &&
									selectedDate.getMonth() === month &&
									selectedDate.getFullYear() === year;

								const today = new Date();
								const isToday =
									day === today.getDate() &&
									month === today.getMonth() &&
									year === today.getFullYear();

								return (
									<button
										type='button'
										key={day}
										className={`h-8 w-8 rounded-full cursor-pointer hover:bg-border ${
											!selectedDate
												? isToday && 'bg-blue-600'
												: isSelected && 'bg-blue-600'
										}`}
										onClick={() => handleSelectDate(day)}
									>
										{day}
									</button>
								);
							})}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default DatePicker;
