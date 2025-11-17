type InputTypes = 'text' | 'mail' | 'password';

interface InputProps {
	label?: string;
	id?: string;
	type?: InputTypes;
	placeholder?: string;
	value?: string;
	className?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
	label,
	id,
	type = 'text',
	placeholder,
	value,
	className,
	onChange,
}: InputProps) => {
	return (
		<div>
			<label htmlFor={id} className="text-[12px]">{label}</label>
			<input
				id={id}
				name={id}
				type={type}
				placeholder={placeholder}
				value={value}
				className={`w-full text-sm border-2 px-3 py-1 placeholder:text-xs placeholder:text-secondary/60 bg-background text-primary ${className}`}
				onChange={onChange}
				
			/>
		</div>
	);
};

export default Input;
