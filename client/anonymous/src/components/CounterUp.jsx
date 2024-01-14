import React,{useState} from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import "../css files/CounterUp.css";

const CounterUp = () =>{
    const [counton,setCount]=useState(false);


    return(
        <ScrollTrigger onEnter={()=>setCount(true)} onExit={()=>setCount(false)}>
        {counton && <div className="numdiv">
            <div className="row">
                <div className="col-md-3 num-bx">
                    <h1><CountUp start={0} end={100} duration={4} delay={0.5}></CountUp>K+</h1>
                    <p>Happy Customers</p>
                </div>
                <div className="col-md-3 num-bx">
                    <h1><CountUp start={0} end={50} duration={4} delay={0.5}></CountUp>K+</h1>
                    <p>Top Rated Professionals</p>
                </div>
                <div className="col-md-3 num-bx">
                    <h1><CountUp start={0} end={200} duration={4} delay={0.5}></CountUp>K+</h1>
                    <p>Total Users</p>
                </div>
                <div className="col-md-3 num-bx">
                    <h1><CountUp start={0} end={15} duration={4} delay={0.5}></CountUp>+</h1>
                    <p>Years in Business</p>
                </div>
            </div>
        </div>}
        </ScrollTrigger>
    )
}

export default CounterUp;