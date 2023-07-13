import React, {useState, useEffect} from 'react';
import { Navigation } from '../components/Nav';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import axios from 'axios';
import { error } from 'console';
import Item from 'antd/es/list/Item';


//     return (
//       <div>
//         {data.map(item => (
//           <div key={item.id}>
//             <h3>{item.title}</h3>
//             <p>{item.description}</p>
//           </div>
//         ))}
//       </div>
//     );
// //  };




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


//стучу в сервер

    const[data, setData] = useState<number>()
    
  
    axios.get('https://api.binance.com/api/v3/ticker/24hr?symbol=BNBBTC')
    .then(response => {
        console.log(response)
        console.log(response.data.lastPrice)
        setData(response.data.lastPrice)})
    .catch((error) => {
        console.error(error)
    })
            

    return(
        <>
            <span>последняя цена</span>
            <span>{data}</span>
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