import React, {useState} from 'react';
import { Navigation } from '../components/Nav';
import { useDispatch, useSelector } from 'react-redux/es/exports';


export function Counter(){

    const dispatch = useDispatch()
    const counter2 = useSelector(state => state.counter)

    const Plus = () => {
        dispatch({type:'PLUS', payload: 1})
    }

    const Minus = () => {
        dispatch({type:'MINUS', payload: 1})
    }


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
                <button onClick={() => Plus()}>+</button>
                <h1>{counter2}</h1>
                <button onClick={() => Minus()}>-</button>
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