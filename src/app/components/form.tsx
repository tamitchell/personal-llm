'use client';
import { useEffect, useState } from "react";
import Message from "@/icons/Message";

export default function Form({ className }: {
  className?: string;
}): JSX.Element {
    const [input, setInput] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    useEffect(() => {
        console.log("form state", input);
    }, [input]);


    return <form className={className} onSubmit={(e): void => handleSubmit(e)}>
       <input title="ask" className='bg-black text-grey rounded-sm w-full h-full p-3 border border-slate-50 text-slate-50' defaultValue='Ask a question' value={input} onChange={(e): void => handleChange(e)} type="text" />
        <button title="submit" className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Message className="w-6 h-6" />
        </button>
    </form>;
}
