import React from 'react';
import { useForm } from 'react-hook-form';
import FeedbackBg from '../../assets/feedback2.jpg';

const FeedbackForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Feedback submitted successfully!');
    };

    return (
        <div className='overflow-hidden relative h-[35rem] max-w-[120em] flex justify-center items-center mx-auto bg-[#111827]  w-full'>
        <div 
        className='min-w-[200px] w-1/2 text-white h-[85%] shadow-lg border-[1px] border-gray-500  p-8 overflow-hidden rounded-2xl'>
            <h2 className='w-full h-[8%] text-center text-xl font-semibold tracking-wide mb-8'>Feedback Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <div className='w-full h-[98%] flex gap-2 justify-center items-center'>
                <div className='flex w-1/2 h-full flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email" className='text-sm'>
                        Email:
                    </label>
                    <input
                        className={`px-3 py-3 w-full text-black rounded-lg outline-0 right-1 border border-gray-500 focus:border-0 ${errors.email ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                        placeholder='Entern your email'
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address',
                            },
                        })}
                    />
                    {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
                </div>

                {/* Feedback TextArea */}
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="feedback" className='relative text-sm'>
                        Feedback:
                    </label>
                    <textarea
                    placeholder='Enter your feedback'
                        id="feedback"
                        rows="4"
                        {...register('feedback', {
                            required: 'Feedback is required',
                            maxLength: {
                                value: 2000,
                                message: 'Feedback must not exceed 2000 characters',
                            },
                            minLength: {
                                value: 100,
                                message: 'Feedback at least 100 characters',
                            },
                        })}
                        className={`px-3 py-3 w-full text-black rounded-lg outline-0 right-1 border border-gray-500 focus:border-0 ${errors.email ? 'focus:ring-1 focus:ring-red-500 border-red-500' : 'focus:ring-1 focus:ring-green-500'}`}
                        
                    />
                    {errors.feedback && <p style={{ color: 'red', fontSize: '12px' }}>{errors.feedback.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '25%',
                        alignSelf: 'center',
                    }}
                >
                    Submit
                </button>
                </div>
                <div className=' w-1/2 h-full flex justify-center '>
                    <img src={FeedbackBg} className='w-4/5 h-80 object-cover rounded-2xl border-[1px] border-gray-400'/>
                </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default FeedbackForm;

