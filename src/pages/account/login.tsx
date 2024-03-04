import React, { useState } from 'react';
import { useRouter } from 'next/router';
import '../../app/globals.css'

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const router = useRouter();

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (validateForm()) {

            try {
                const response = await fetch('/api/account/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (response.ok) {
                    console.log('User registered successfully');
                    // Redirect to a success page or any other page
                    router.push('/success');
                } else {
                    console.error('Failed to register user');
                }
            } catch (error) {
                console.error('Error during form submission:', error);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Login Page</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
                        <input type="text" id="username" name="username" onChange={handleChange}
                            className={`p-2 border border-gray-300 rounded-md ${errors.username ? 'border-red-500' : ''}`}
                        />
                        {errors.username && <p className="text-red-500">{errors.username}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
                        <input type="password" id="password" name="password" onChange={handleChange}
                            className={`p-2 border border-gray-300 rounded-md ${errors.password ? 'border-red-500' : ''}`} />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                    </div>

                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                </form>
            </div>
        </div>
    );
}
