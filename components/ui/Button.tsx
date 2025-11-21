import { type LucideIcon } from 'lucide-react';

type ButtonVariants = 'primary' | 'secondary' | 'outline';
type ButtonSizes = 'sm' | 'md' | 'lg';
type ButtonType = 'button' | 'submit';

interface ButtonProps {
	variant?: ButtonVariants;
	size?: ButtonSizes;
	type?: ButtonType;
	className?: string;
	disabled?: boolean;
	name?: string;
	icon?: LucideIcon;
	onClick?: () => void;
}

const variantClasses: Record<ButtonVariants, string> = {
	primary: 'bg-primary text-text-bright',
	secondary: 'bg-surface text-text-text-bright',
	outline: 'bg-transparent border border-border text-text-text-bright',
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
	name,
	icon: Icon,
	onClick,
}: ButtonProps) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className={`flex items-center justify-center gap-2 font-medium rounded active:scale-95 transition-all duration-100 ${
				sizeClasses[size]
			} ${variantClasses[variant]} ${
				disabled
					? 'opacity-50 cursor-not-allowed'
					: 'hover:opacity-90 cursor-pointer'
			} ${className}`}
			onClick={onClick}
		>
			{Icon && <Icon />}
			{name}
		</button>
	);
};

export default Button;
