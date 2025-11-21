'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import InputIcon from '@/components/ui/InputIcon';
import { Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(JSON.stringify(formData));
	};

	return (
		<div className='min-w-full min-h-screen flex items-center justify-center bg-background'>
			<div className='flex flex-col gap-5 items-center p-5 min-w-[300px] bg-surface text-text-bright rounded shadow'>
				<h1 className='text-xl'>Login</h1>
				<form className='flex flex-col gap-5 w-[400px]' onSubmit={handleSubmit}>
					<InputIcon
						icon={Mail}
						id='email'
						type='mail'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
						className='w-full'
						required={true}
					/>
					<InputIcon
						icon={Lock}
						id='password'
						type='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
						className='w-full'
						required={true}
					/>
					<div className='flex flex-col gap-2'>
						<Button name='Login' type='submit' className='mt-5' />
						<Link
							href='/register'
							className='text-[12px] font-poppins text-right underline cursor-pointer'
						>
							Create new account
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
