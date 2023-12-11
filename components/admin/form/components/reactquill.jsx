import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function ReactQuillCustom() {
    const [value, setValue] = useState('');
    return <div className="text-editor w-full h-1/2">
        <ReactQuill
            className="h-1/2"
            theme="snow"
            value={value}
            //   onChange={onChange}
            modules={{
                toolbar: [
                    [{ header: [1, 2, false] }],
                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    ['link', 'image'],
                    ['clean'],
                ],
            }}
        />
    </div>
}