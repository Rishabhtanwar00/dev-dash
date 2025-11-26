'use client';
import { MultiSelectChipsProps } from '@/types/ui';
import InputIcon from './Input';
import { useEffect, useState } from 'react';
import Button from './Button';
import { X } from 'lucide-react';

const MultiSelectChips = ({
	label,
	id,
	placeholder,
	selectedItems,
	setSelectedItems,
}: MultiSelectChipsProps) => {
	const [items, setItems] = useState<string[]>(selectedItems || []);

	const handleEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			const input = event.currentTarget;
			const value = input.value.trim();
			if (value) {
				setItems([...items, value]);
				input.value = '';
			}
		}
	};

	const handleAddItem = () => {
		const input = document.getElementById(id) as HTMLInputElement;
		const value = input.value.trim();
		if (value) {
			setItems([...items, value]);
			input.value = '';
		}
		input.focus();
	};

	const handleRemoveItem = (value: string) => {
		const filteredItems = items.filter((item) => item !== value);
		setItems(filteredItems);
	};

	const handleRemoveAll = () => {
		setItems([]);
	};

	useEffect(() => {
		setSelectedItems?.(items);
	}, [items]);

	return (
		<div>
			<label htmlFor={id} className='block mb-2 font-semibold'>
				{label}
			</label>
			{items && items.length > 0 && (
				<div className='flex justify-between gap-2'>
					<div className='flex flex-wrap gap-2'>
						{items.map((item, index) => (
							<p
								onClick={() => handleRemoveItem(item)}
								key={index}
								className='flex items-center gap-1 bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-3.5 pr-2 py-1.5 rounded-full cursor-pointer'
							>
								{item}
								<button
									onClick={() => handleRemoveItem(item)}
									type='button'
									className='cursor-pointer'
								>
									<X size={14} />
								</button>
							</p>
						))}
					</div>
					<Button
						name='Clear all'
						className='w-[100px] shrink-0'
						variant='ghost'
						onClick={handleRemoveAll}
					/>
				</div>
			)}
			<div className={`flex gap-2 w-full ${items.length > 0 && 'mt-2'}`}>
				<InputIcon
					id={id}
					placeholder={placeholder}
					onKeyDown={handleEnterKey}
					className='grow'
				/>
				<Button name='Add' onClick={handleAddItem} />
			</div>
		</div>
	);
};

export default MultiSelectChips;
