import {useState,useEffect} from "react";


const Home=()=>{

    const [showText,setShowText] = useState(true);
    const changeText = ()=>setShowText(false);

    const [count,setCount] = useState(0);
    const increment = () =>{
        setCount(count+1);
    }
    const decrement = () =>{
        setCount(count-1);
    }
const reset = ()=>{
    setCount(0);
}

const [seconds,setSeconds] = useState(0)
const[isRunning,setIsRunning] = useState(false)


useEffect(()=>{
    if(isRunning){
        const id = window.setInterval(()=>{
            setSeconds(seconds=>seconds + 1);
        },1000);
        return ()=>window.clearInterval(id)
    }
    return undefined;
} , [isRunning]);

    
    return(
        
        <div className="container">
        <div className="counter-app">
        <div className="counter">{count}</div>
        <div className="button-box">
        <button className="button" onClick={increment}>Increment</button>
        <button className="button" onClick={reset}>Reset</button>
        <button className="button" onClick={decrement}>Decrement</button>
        </div>
        </div>
        <div className="top-row"><p>{showText?"Number":"Not True"}</p>
        <button className="button" onClick={changeText}>Click me</button>
        </div>
        
        <div className="timer-app">
        <div className="display">
        <div className="time">{seconds}</div>
        </div>
        <div className="timer-button-box">
        <button disabled={isRunning} className="timer-btn" onClick={()=>{setIsRunning(true);}}><i className="fa fa-play fa-2x"/></button>
        <button className="timer-btn" onClick={()=>{setIsRunning(false);setSeconds(0)}}><i class="fa fa-stop fa-2x"></i></button>
        <button className="timer-btn" onClick={()=>{setIsRunning(false);}}><i className="fa fa-pause fa-2x"/></button>
        
        </div>

        </div>
            
        </div>
       
    )
}
export default Home

