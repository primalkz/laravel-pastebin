import React, { useState } from 'react';
// importing axios to submit form and get api data
import axios from 'axios';

export default function Home() {
    // these are coming from the controller that will give different error 
    const [errors, setErrors] = useState(null);  // For storing validation errors
    const [message, setMessage] = useState('');  // For displaying a success message
    const [link, setLink] = useState('');  // For displaying a success message
    const [copied, setCopied] = useState(false);  // For displaying a success message

    // text form functions
    const [text, setText] = useState('');
    const handleTextAreaChange = (e) => {
        setText(e.target.value);
        // console.log(text);
    };
    const clearText = () => {
        document.querySelector('.PasteArea').value = '';
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                // If copy is successful, you can optionally show an alert or message
                // alert('Link copied to clipboard!');
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);  // Reset after 2 seconds
            })
            .catch((error) => {
                // Handle error if copying fails
                console.error('Failed to copy link: ', error);
            });
    }

    // axios submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send form data to the Laravel API
            const response = await axios.post('/paste', { text });
            
            // If successful, set the success message
            setMessage(response.data.message);
            setLink(response.data.link);
            // console.log(response.data.message);
            setErrors(null);  // Clear any previous errors
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Handle validation errors from the backend
                setErrors(error.response.data.errors);
            } else {
                // Handle other errors
                setMessage('An error occurred. Please try again.');
            }
        }
    };
    
    return (
        <div className="bg-gray-100">
            <div className="flex flex-row justify-center items-center h-[86vh]">
                <form onSubmit={handleSubmit} className="ContentMobile overflow-auto flex flex-col justify-center items-center border border-gray-200 p-4 rounded-lg border-gray-200 shadow-sm w-[98%] h-[96%]">
                    <div className='flex flex-row justify-between items-center w-[100%]'>
                        <div className='flex flex-shrink flex-row gap-2'>
                            <button type='button' className='border-2 text-sm border-white rounded-md p-2 py-1 hover:bg-gray-200 focus:outline-1 focus:outline-offset-1 focus:outline-gray-500 shadow-md overflow-auto' onClick={()=>clearText()}>Clear</button>
                            <button type='submit' className='text-white text-sm border-2 border-white rounded-md p-2 py-1 bg-violet-500 hover:bg-violet-600 focus:outline-1 focus:outline-offset-1 focus:outline-violet-500 shadow-md overflow-auto'>Paste</button>                        
                        </div>

                        <div className='w-[100%] flex-wrap overflow-x-auto py-0.5'>
                            {/* Display errors if any */}
                            {errors && (
                                <div className="text-red-500 mt-2 text-sm">
                                    <ul>
                                        {Object.keys(errors).map((key) => (
                                            <li key={key}>{errors[key][0]}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Display success message */}
                            {message && (
                                <div className="ml-2 font-semibold text-green-600 text-sm">{message} <span className='bg-gray-200 p-2 py-1.5 border-green-400 rounded-md text-green-600 font-mono'>{link}<button type="button" className='p-1 py-0 border border-gray-300 shadow-sm bg-gray-100 rounded-md ml-2 hover:bg-gray-50 hover:shadow-md focus:outline-1 focus:outline-offset-1' onClick={handleCopyLink}>{copied ? 'Copied!' : 'Copy'}</button></span></div>
                            )}
                        </div>
                    </div>
                    <textarea
                        className="PasteArea flex-1 overflow-auto mt-4 px-4 py-2 rounded-md bg-white w-full shadow text-sm resize-none focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        onChange={handleTextAreaChange}
                        value={text}
                        name="text"
                    ></textarea>
                </form>
            </div>
        </div>
    );
}