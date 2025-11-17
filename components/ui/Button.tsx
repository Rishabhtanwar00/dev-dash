type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
	variant?: ButtonVariants;
	size?: ButtonSizes;
	type?: ButtonType;
	className?: string;
	disabled?: boolean;
	children: React.ReactNode;
}

const variantClasses: Record<ButtonVariants, string> = {
	primary: 'bg-btn-primary text-btn-primary-text',
	secondary: 'bg-btn-secondary text-btn-secondary-text',
	outline:
		'bg-btn-outline text-btn-outline-text border border-btn-outline-border',
	ghost: 'bg-transparent text-btn-ghost-text',
};

const sizeClasses: Record<ButtonSizes, string> = {
	sm: 'px-2 py-1 text-sm',
	md: 'px-3 py-2 text-base',
	lg: 'px-4 py-3 text-lg',
};

const Button = ({
	variant = 'primary',
	size = 'md',
	type = 'button',
	className,
	disabled = false,
	children,
}: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`font-medium rounded transition-all duration-200 ${
				sizeClasses[size]
			} ${variantClasses[variant]} ${
				disabled
					? 'opacity-50 cursor-not-allowed'
					: 'hover:opacity-90 cursor-pointer'
			} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
