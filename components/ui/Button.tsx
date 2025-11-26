import { ButtonProps, ButtonSizes, ButtonVariants } from '@/types/ui';

const variantClasses: Record<ButtonVariants, string> = {
	primary: 'bg-primary text-text-bright',
	secondary: 'bg-surface text-text-text-bright',
	outline: 'bg-transparent border border-border text-text-text-bright',
	ghost: 'bg-red-600 text-white',
};

const sizeClasses: Record<ButtonSizes, string> = {
	sm: 'px-2 py-1.5 text-sm',
	md: 'px-3 py-2 text-base',
	lg: 'px-4 py-3 text-lg',
};

const Button = ({
	variant = 'primary',
	size = 'md',
	type = 'button',
	className,
	disabled = false,
	name,
	icon: Icon,
	onClick,
}: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`h-fit flex items-center justify-center gap-2 font-medium rounded active:scale-95 transition-all duration-100 ${
				sizeClasses[size]
			} ${variantClasses[variant]} ${
				disabled
					? 'opacity-50 cursor-not-allowed'
					: 'hover:opacity-90 cursor-pointer'
			} ${className}`}
			onClick={onClick}
		>
			{Icon && <Icon size={size === 'sm' ? 20 : size === 'md' ? 24 : 26} />}
			{name}
		</button>
	);
};

export default Button;
