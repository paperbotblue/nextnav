import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const FeedbackForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios({
              method: 'POST',
              url: 'http://localhost:3000/crud/sendFeedback.php',
              headers: {
                'Content-Type': 'multipart/form-data',
              },
              data: data,
            });
            
            alert("feedback sent");
      
          } catch (error) {
      
          }
    };

    return (
        <div className='overflow-hidden relative h-[35rem] max-w-[120em] flex justify-center items-center mx-auto bg-[#111827]  w-full'>
        <div 
        className='min-w-[200px] w-1/2 text-white h-[80%] shadow-lg border-[1px] border-gray-500  p-8 rounded-2xl'>
            <h2 className='w-full text-center text-xl font-semibold tracking-wide mb-8'>Feedback Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <div>
                <div className='flex w-1/2 flex-col gap-3'>
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
                    <label htmlFor="feedback" className=''>
                        Feedback:
                    </label>
                    <textarea
                        id="feedback"
                        rows="4"
                        {...register('feedback', {
                            required: 'Feedback is required',
                            maxLength: {
                                value: 150,
                                message: 'Feedback must not exceed 150 characters',
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
                <div className='w-1/2'>
                    <img src="" />
                </div>
                </div>
            </form>
        </div>
        </div>
    );
};

export default FeedbackForm;

