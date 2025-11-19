'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Link from 'next/link';
import { useState } from 'react';

const RegisterPage = () => {
	const [formData, setFormData] = useState({
		name: '',
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
			<div className='flex flex-col gap-5 items-center p-5 min-w-[300px] bg-foreground text-background'>
				<h1 className='text-xl'>Register Now</h1>
				<form className='flex flex-col gap-5 w-[400px]' onSubmit={handleSubmit}>
					<Input
						label='Name'
						id='name'
						type='text'
						placeholder='Enter your name'
						value={formData.name}
						onChange={handleChange}
					/>
					<Input
						label='Email'
						id='email'
						type='mail'
						placeholder='Enter your email'
						value={formData.email}
						onChange={handleChange}
					/>
					<Input
						label='Password'
						id='password'
						type='password'
						placeholder='Enter your password'
						value={formData.password}
						onChange={handleChange}
					/>
					<div className='flex flex-col gap-2'>
						<Button type='submit' className='mt-5'>
							Register
						</Button>
						<Link
							href='/login'
							className='text-[12px] font-poppins text-right underline cursor-pointer'
						>
							Login to existing account
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default RegisterPage;
