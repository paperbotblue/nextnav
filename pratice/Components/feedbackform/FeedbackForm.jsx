import React from 'react';
import { useForm } from 'react-hook-form';

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
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Email Input */}
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                        Email:
                    </label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address',
                            },
                        })}
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    {errors.email && <p style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</p>}
                </div>

                {/* Feedback TextArea */}
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="feedback" style={{ display: 'block', marginBottom: '5px' }}>
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
                        style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
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
                    }}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;
