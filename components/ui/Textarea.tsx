import { TextareaProps } from '@/types/ui';

const Textarea = ({
	label,
	id,
	placeholder,
	value,
	className,
	required,
	onChange,
	rows = 5,
}: TextareaProps) => {
	return (
		<div>
			{label && (
				<label htmlFor={id} className='block mb-2 font-medium'>
					{label}
				</label>
			)}
			<textarea
				id={id}
				placeholder={placeholder}
				className={`w-full px-3 py-2 border border-border bg-surface text-text-bright rounded-md outline-none ${className}`}
				value={value}
				required={required}
				onChange={onChange}
				rows={rows}
			></textarea>
		</div>
	);
};

export default Textarea;
