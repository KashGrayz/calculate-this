import React, { useState } from 'react';

//typescript is weird
const Calculator: React.FC = () => {

    // Setting input values
    const [input, setInput] = useState('');

    // Taking input + values
    const handleButtonClick = (value:string) => {
        setInput ((prevInput) => prevInput + value);
    };

    return(
        <div>

        </div>

    );
};

export default Calculator;