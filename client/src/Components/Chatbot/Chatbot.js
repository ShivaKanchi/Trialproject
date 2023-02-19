import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Chatbot() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

    useEffect(() => {
        async function fetchData() {
            const result = await axios.post('https://api.chatgpt.com/v1/chat', {
                api_key: 'YOUR_API_KEY',
                message: input,
            });
            setResponse(result.data.message);
        }
        fetchData();
    }, [input]);

    return (

        <div>
            <div>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button onClick={() => setInput('')}>Send</button>
            </div>
            {response && <div>{response}</div>}
        </div>
    );
}

export default Chatbot;
