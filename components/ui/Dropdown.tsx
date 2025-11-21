'use client';

import { ChevronDown, ChevronUp, ChevronUpCircle } from 'lucide-react';
import { useState } from 'react';

interface DropdownProps {
	name: string;
	className?: string;
	options?: string[];
	value?: string | null;
	setValue?: (value: string) => void;
}

const Dropdown = ({
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

	const handleToggleOptions = () => {
		setShowOptions(!showOptions);
	};

	const handleOptionClick = (option: string) => {
		setShowOptions(false);
		setSelectedOption(option);
		setValue?.(option);
	};

	return (
		<div>
			<button
				className={`relative flex items-center justify-center gap-2 bg-surface text-text-bright/90 border border-border rounded ${
					showOptions && 'border-b-0'
				} px-3 py-2 cursor-pointer ${className}`}
				onClick={handleToggleOptions}
			>
				{selectedOption ? selectedOption : name}
				{showOptions ? (
					<ChevronUp size={15} className='text-text-bright/80' />
				) : (
					<ChevronDown size={15} className='text-text-bright/80' />
				)}
			</button>
			<div
				className={`absolute flex flex-col bg-surface rounded-bl rounded-br border border-border ${
					!showOptions ? 'hidden' : 'flex'
				} ${className}`}
			>
				{options?.map((option: string, index: number) => (
					<button
						key={index}
						className='cursor-pointer px-3 py-2 hover:bg-border hover:text-text-bright'
						onClick={() => handleOptionClick(option)}
					>
						{option}
					</button>
				))}
			</div>
		</div>
	);
};

export default Dropdown;
