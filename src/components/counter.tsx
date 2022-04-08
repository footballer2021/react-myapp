import React, {useEffect, useState} from 'react';
import '../Styles/Counter.css'

const Counter = () =>{
    const [count, setCount] = useState(0);

    const countUp = () => { setCount(prevState => prevState + 1)}

    const countDown = () => { setCount(prevState => prevState - 1)}

    useEffect(()=>{console.log('Current Count is...',count)},[count]);

    return <React.Fragment>
        <p>現在のカウント数:{count}</p>
        <div className='counter-wrapper'>
            <button onClick={countUp}>UP</button>
            <button onClick={countDown}>Down</button>
        </div> 
        </React.Fragment> 
}

export default Counter;