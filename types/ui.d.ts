import { type LucideIcon } from 'lucide-react';

type ButtonVariants = 'primary' | 'secondary' | 'outline' | 'ghost';
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

type InputTypes = 'text' | 'mail' | 'password' | 'date';

interface InputProps {
	label?: string;
	icon?: LucideIcon;
	type?: InputTypes;
	id: string;
	placeholder: string;
	value?: string;
	className?: string;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

interface DropdownProps {
	label?: string;
	name: string;
	className?: string;
	options?: string[];
	value?: string | null;
	setValue?: (value: string) => void;
}

interface TextareaProps {
	label?: string;
	id: string;
	placeholder: string;
	value?: string;
	className?: string;
	required?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	rows?: number;
}

interface MultiSelectChipsProps extends InputProps {
	selectedItems?: string[];
	setSelectedItems?: (items: string[]) => void;
}
