import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// importing axios to submit form and get api data

export default function PastePage() {
    // these are coming from the controller that will give different error 
    const {id} = useParams();
    const [paste, setPaste] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);
    const [edit, setEdited] = useState(false);

    useEffect(() => {
        const fetchPaste = async () => {
            try {
                const response = await axios.post(`/paste/${id}`);
                setPaste(response.data.data.text);
                console.log(response);
                setLoading(false);
            } catch (err) {
                setError('Failed to load paste.');
                setLoading(false);
            }
        };
        fetchPaste();
    }, [id]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(paste)
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

    const handleEdited = () => {
        setEdited(!edit);
        setTimeout(() => setEdited(false), 2000);
    }

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error}</div>
    return (
        <div className="bg-gray-100">
            <div className="flex flex-row justify-center items-center h-[86vh]">
                <div className="ContentMobile overflow-auto flex flex-col justify-center items-center border border-gray-200 p-4 rounded-lg border-gray-200 shadow-sm w-[98%] h-[96%]">
                    <div className='flex flex-row w-full gap-2'>
                        <button type='button' className='border-2 text-sm border-white rounded-md p-2 py-1 hover:bg-gray-200 focus:outline-1 focus:outline-offset-1 focus:outline-gray-500 shadow-md overflow-auto' onClick={handleEdited}>{ edit ? 'Under Construction!' : 'Edit' }</button>
                        <button type='submit' className='text-white text-sm border-2 border-white rounded-md p-2 py-1 bg-violet-500 hover:bg-violet-600 focus:outline-1 focus:outline-offset-1 focus:outline-violet-500 shadow-md overflow-auto' onClick={handleCopyLink}>{ copied ? 'Copied!' : 'Copy' }</button>                        
                    </div>
                    
                    <textarea
                        className="font-mono PasteArea flex-1 overflow-auto mt-4 px-4 py-2 rounded-md bg-white w-full shadow text-sm resize-none focus:border-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                        name="text"
                        value={paste}
                        readOnly
                    ></textarea>
                </div>
            </div>
        </div>
    );
}