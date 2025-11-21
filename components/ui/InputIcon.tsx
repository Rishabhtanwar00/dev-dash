import { type LucideIcon } from 'lucide-react';

type InputTypes = 'text' | 'mail' | 'password';

interface InputIconProps {
	icon: LucideIcon;
	type?: InputTypes;
	id: string;
	placeholder: string;
	value?: string;
	className?: string;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputIcon = ({
	icon: Icon,
	type = 'text',
	id,
	placeholder,
	value,
	className,
	required = false,
	onChange,
}: InputIconProps) => {
	return (
		<div className='relative border border-border bg-surface text-text-bright rounded-md pl-9'>
			<Icon className='absolute left-3 top-1/2 -translate-y-1/2' />
			<input
				type={type}
				name={id}
				id={id}
				placeholder={placeholder}
				className={`px-3 py-2 outline-none border-none ${className}`}
				value={value}
				required={required}
				onChange={onChange}
			/>
		</div>
	);
};

export default InputIcon;
