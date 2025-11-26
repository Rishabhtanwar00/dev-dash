'use client';
import Button from '@/components/ui/Button';
import DatePicker from '@/components/ui/DatePicker';
import Dropdown from '@/components/ui/Dropdown';
import InputIcon from '@/components/ui/Input';
import MultiSelectChips from '@/components/ui/MultiSelectChips';
import Textarea from '@/components/ui/Textarea';
import { TaskFormProps } from '@/types/tasks';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const TaskForm = ({ formTitle, initialData }: TaskFormProps) => {
	const router = useRouter();
	const [formData, setFormData] = useState({
		title: initialData?.title || '',
		description: initialData?.description || '',
		priority: initialData?.priority || '',
		dueDate: initialData?.dueDate || null,
		tags: initialData?.tags || ([] as string[]),
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	};

	const handleBack = () => {
		router.push('/dashboard/tasks');
	};

	const handleSubmit = (e: React.FormEvent<SubmitEvent>) => {
		e.preventDefault();
		console.log(JSON.stringify(formData));
	};

	return (
		<div className='px-10'>
			<div className='relative border-b mb-6'>
				<h2 className='text-3xl font-semibold mb-4 text-center'>{formTitle}</h2>
				<div className='absolute left-0 top-0'>
					<Button
						icon={MoveLeft}
						variant='secondary'
						size='sm'
						className='px-4'
						onClick={handleBack}
					/>
				</div>
			</div>
			<form onSubmit={() => handleSubmit} className='space-y-4'>
				<InputIcon
					label='Task Title'
					id='title'
					placeholder='Add task title'
					onChange={handleChange}
				/>
				<Textarea
					label='Description'
					id='description'
					placeholder='Add task description'
					onChange={handleChange}
				/>
				<div className='grid grid-cols-2 gap-4'>
					<Dropdown
						label='Priority'
						name='Select Priority'
						options={['Low', 'Medium', 'High']}
						className='w-full z-100'
						value={formData.priority}
						setValue={(priority) =>
							setFormData((prev) => ({ ...prev, priority: priority }))
						}
					/>
					<DatePicker
						label='Due Date'
						dueDate={formData.dueDate ? new Date(formData.dueDate) : null}
						setDueDate={(date) =>
							setFormData((prev) => ({ ...prev, dueDate: date }))
						}
					/>
				</div>
				<div>
					<MultiSelectChips
						id='tags'
						label='Tags'
						placeholder='Add Tag'
						selectedItems={formData.tags}
						setSelectedItems={(tags) =>
							setFormData((prev) => ({ ...prev, tags: tags }))
						}
					/>
					<p className='text-[12px] mt-1 ml-1 text-text/50'>
						You can also use Enter button to add tags.
					</p>
				</div>
				<Button name='Create Task' type='submit' size='lg' className='w-full' />
			</form>
		</div>
	);
};

export default TaskForm;
