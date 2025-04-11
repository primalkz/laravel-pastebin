import React, { useState } from "react";

export default function Contact() {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-gray-100">
            <div className="flex flex-row justify-center items-center h-screen">
                <div className="flex flex-col justify-center items-center border border-gray-200 p-4 rounded-lg shadow-sm w-1/4">
                    <h1 className="mb-4 px-4 py-2 rounded-md bg-white w-full shadow text-base"><span className='text-sm text-gray-600'>Under Construction:</span> {count}</h1>
                    <div className='flex flex-row justify-between w-full gap-2'>
                        <button className='flex-1 border-2 text-sm border-white rounded-md p-2 hover:bg-gray-200 focus:outline-1 focus:outline-offset-1 focus:outline-gray-500 shadow-md lowercase overflow-auto' onClick={() => setCount(count+1)}>Tap</button>
                    </div>
                </div>
            </div>
        </div>
    );
};  