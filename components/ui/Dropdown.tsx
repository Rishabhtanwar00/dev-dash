'use client';

import useOutsideClick from '@/hooks/useOutsideClick';
import { DropdownProps } from '@/types/ui';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useRef, useState } from 'react';

const Dropdown = ({
	label,
	name,
	className,
	options,
	value,
	setValue,
}: DropdownProps) => {
	const [showOptions, setShowOptions] = useState(false);
	const [selectedOption, setSelectedOption] = useState<string | null>(
		value || null
	);

	const popupRef = useRef<HTMLDivElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	useOutsideClick([popupRef, buttonRef], () => setShowOptions(false));

	const handleToggleOptions = () => {
		setShowOptions(!showOptions);
	};

	const handleOptionClick = (option: string) => {
		setShowOptions(false);
		setSelectedOption(option);
		setValue?.(option);
	};

	return (
		<div className={`relative ${className || 'w-full'}`}>
			{label && <label className='block mb-1 font-semibold'>{label}</label>}
			<button
				ref={buttonRef}
				type='button'
				className={`relative w-full flex items-center justify-center gap-2 bg-surface text-text-bright/90 border border-border rounded ${
					showOptions && 'border-b-0'
				} px-3 py-2 cursor-pointer`}
				onClick={handleToggleOptions}
			>
				{selectedOption ? selectedOption : name}
				<span className='flex items-center'>
					{showOptions ? (
						<ChevronUp size={15} className='text-text-bright/80' />
					) : (
						<ChevronDown size={15} className='text-text-bright/80' />
					)}
				</span>
			</button>
			{showOptions && (
				<div
					ref={popupRef}
					className={`absolute w-full left-0 flex flex-col bg-surface rounded-bl rounded-br border border-border`}
				>
					{options?.map((option: string, index: number) => (
						<button
							type='button'
							key={index}
							className='cursor-pointer px-3 py-2 hover:bg-border hover:text-text-bright'
							onClick={() => handleOptionClick(option)}
						>
							{option}
						</button>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
