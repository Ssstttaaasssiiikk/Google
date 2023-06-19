import React, {useState} from 'react';
import { Navigation } from '../components/Nav';

export function Counter(){
    const [counter, setCounter] = useState(0);
    const plus = () => {
        setCounter(counter + 1);
    };
    const minus = () => {
        setCounter(counter - 1);
    };
    return(
        <body>
            <Navigation />
            <div>
                <button onClick={minus}>-</button>
                <span>{counter}</span>
                <button onClick={plus}>+</button>
            </div>
            
        </body>
    );
}