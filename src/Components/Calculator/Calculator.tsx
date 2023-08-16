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
            value={input}
            readOnly
            />
            <div>
                <div>
                    <button className='button' onClick={clearInput}>C</button>
                    <button className='button' onClick={() => handleButtonClick('+/-')}>+/-</button>
                    <button className='button' onClick={() => handleButtonClick('%')}>%</button>
                    <button className='button' onClick={() => handleButtonClick('/')}>/</button>
                </div>
                <div>
                    <button className='button' onClick={() => handleButtonClick('7')}>7</button>
                    <button className='button' onClick={() => handleButtonClick('8')}>8</button>
                    <button className='button' onClick={() => handleButtonClick('9')}>9</button>
                    <button className='button' onClick={() => handleButtonClick('*')}>x</button>
                </div>
                <div>
                    <button className='button' onClick={() => handleButtonClick('4')}>4</button>
                    <button className='button' onClick={() => handleButtonClick('5')}>5</button>
                    <button className='button' onClick={() => handleButtonClick('6')}>6</button>
                    <button className='button' onClick={() => handleButtonClick('-')}>-</button>
                </div>
                <div>
                    <button className='button' onClick={() => handleButtonClick('3')}>3</button>
                    <button className='button' onClick={() => handleButtonClick('2')}>2</button>
                    <button className='button' onClick={() => handleButtonClick('1')}>1</button>
                    <button className='button' onClick={() => handleButtonClick('+')}>+</button>
                </div>
                <div>
                    <button className='button' onClick={() => handleButtonClick}></button>
                    <button className='button' onClick={() => handleButtonClick}></button>
                    <button className='button' onClick={() => handleButtonClick}></button>
                    <button className='button' onClick={() => handleButtonClick}></button>
                </div>
            </div>

        </div>

    );
};

export default Calculator;