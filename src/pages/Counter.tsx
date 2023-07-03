import React, {useState} from 'react';
import { Navigation } from '../components/Nav';

export function Counter(){
    const [counter, setCounter] = useState<number>(0)
    const [userText, setUserText] = useState<string>('')
    return(
        <>
            <Navigation name_page = 'google' way = '/'/>
            <div>
                <button onClick={() => setCounter(counter + 1)}>-</button>
                <span>{counter}</span>
                <button onClick={() => setCounter(counter + 1)}>+</button>
            </div>
            <div>
                <span>{userText}</span>
            </div>
            <div className='search_bar'>
                <input type="text" value={userText} onChange={event => setUserText(event.target.value)} />
            </div> 
        </>
    );
}