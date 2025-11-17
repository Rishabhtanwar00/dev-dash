'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
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
			<div className='flex flex-col gap-5 items-center p-5 min-w-[300px] bg-foreground text-background'>
				<h1 className='text-xl'>Login</h1>
				<form className='flex flex-col gap-5 w-[400px]' onSubmit={handleSubmit}>
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
					<Button type='submit'>Login</Button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
