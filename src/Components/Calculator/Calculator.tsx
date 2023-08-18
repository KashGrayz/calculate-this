import React, { useState } from 'react';
import '../Calculator/Calculator.css'

//typescript is weird
const Calculator: React.FC = () => {

    // Setting input values
    const [input, setInput] = useState('');

    // Taking input + values
    const handleButtonClick = (value:string) => {
        setInput ((prevInput) => prevInput + value);
    };

    //Backspace button
    const handleBackButtonClick = () => {
        setInput((prevInput) => prevInput.slice(0, -1));
    };

    // Clearing inputs
    const clearInput = () => {
        setInput('');
    };

    return(
        <div className='calculator'>
            <form>
                <input
                className='input'
                type='text'
                value={input}
                readOnly
                />
            </form>
            <div className='keypad'>
                <div>
                    <button className='button' onClick={clearInput}>C</button>
                    <button className='button' onClick={() => handleButtonClick('+/-')}>+/-</button>
                    <button className='button' onClick={() => handleButtonClick('%')}>%</button>
                    <button className='button' onClick={() => handleButtonClick('/')}>/</button>
                    <button className='button' onClick={() => handleButtonClick('7')}>7</button>
                    <button className='button' onClick={() => handleButtonClick('8')}>8</button>
                    <button className='button' onClick={() => handleButtonClick('9')}>9</button>
                    <button className='button' onClick={() => handleButtonClick('*')}>x</button>
                    <button className='button' onClick={() => handleButtonClick('4')}>4</button>
                    <button className='button' onClick={() => handleButtonClick('5')}>5</button>
                    <button className='button' onClick={() => handleButtonClick('6')}>6</button>
                    <button className='button' onClick={() => handleButtonClick('-')}>-</button>
                    <button className='button' onClick={() => handleButtonClick('3')}>3</button>
                    <button className='button' onClick={() => handleButtonClick('2')}>2</button>
                    <button className='button' onClick={() => handleButtonClick('1')}>1</button>
                    <button className='button' onClick={() => handleButtonClick('+')}>+</button>
                    <button className='button' onClick={() => handleButtonClick('0')}>0</button>
                    <button className='button' onClick={() => handleButtonClick('.')}>.</button>
                    <button className='button' onClick={handleBackButtonClick}>&lt;</button>
                    <button className='button' onClick={() => handleButtonClick('=')}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;