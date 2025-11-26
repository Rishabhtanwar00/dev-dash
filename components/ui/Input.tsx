import { InputProps } from '@/types/ui';

const Input
 = ({
	label,
	icon: Icon,
	type = 'text',
	id,
	placeholder,
	value,
	className,
	required = false,
	onChange,
	onKeyDown,
}: InputProps) => {
	return (
		<div className='w-full'>
			{label && (
				<label htmlFor={id} className='block mb-2 font-medium'>
					{label}
				</label>
			)}
			<div
				className={`relative border border-border bg-surface text-text-bright rounded-md w-full ${
					Icon && 'pl-9'
				}`}
			>
				{Icon && <Icon className='absolute left-3 top-1/2 -translate-y-1/2' />}
				<input
					type={type}
					name={id}
					id={id}
					placeholder={placeholder}
					className={`w-full px-3 py-2 outline-none border-none ${className}`}
					value={value}
					required={required}
					onChange={onChange}
					onKeyDown={onKeyDown}
				/>
			</div>
		</div>
	);
};

export default Input
;
