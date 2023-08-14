import React, { useState } from 'react';

//typescript is weird
const Calculator: React.FC = () => {

    // Setting input values
    const [input, setInput] = useState('');

    // Taking input + values
    const handleButtonClick = (value:string) => {
        setInput ((prevInput) => prevInput + value);
    };
    // Clearing inputs
    const clearInput = () => {
        setInput('');
    };

    return(
        <div className='calculator'>
            <input
            className='input'
            type='text'
            value={input}/>

        </div>

    );
};

export default Calculator;