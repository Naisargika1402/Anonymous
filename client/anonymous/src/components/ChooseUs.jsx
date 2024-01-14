import React,{useState} from "react";
import ScrollTrigger from 'react-scroll-trigger';
import flxb from "../assets/flxb.png";
import optns from "../assets/optns.png";
import prof from "../assets/prof.png";
import qlty from "../assets/qlty.png";
import "../css files/ChooseUs.css";

const ChooseUs = () => {
    const[anmtn,setAnmtn] = useState(false);
    return(
        <ScrollTrigger onEnter={()=>setAnmtn(true)}>
        <h2 style={{textAlign:"center"}}>Why Choose Us</h2>
        {anmtn && <div className="timeline">
            <div className="mycontnr left-cntr">
                <img src={flxb}></img>
                <div className="txt-bx">
                <h3>Flexible Schedule</h3>  
                <p>Sem in eget faucibus massa arcu et elementum sed massa nulla dolor felis dictumst malesuada non.</p>
                <span className="left-arrow"></span>
                </div>
            </div>
            <div className="mycontnr right-cntr">
                <img src={optns}></img>
                <div className="txt-bx">
                <h3>Multiple Options</h3>  
                <p>Sem in eget faucibus massa arcu et elementum sed massa nulla dolor felis dictumst malesuada non.</p>
                <span className="right-arrow"></span>
                </div>
            </div>
            <div className="mycontnr left-cntr">
                <img src={prof}></img>
                <div className="txt-bx">
                <h3>Top Quality Service</h3>  
                <p>Sem in eget faucibus massa arcu et elementum sed massa nulla dolor felis dictumst malesuada non.</p>
                <span className="left-arrow"></span>
                </div>
            </div>
            <div className="mycontnr right-cntr">
                <img src={qlty}></img>
                <div className="txt-bx">
                <h3>Licensed Professional</h3>  
                <p>Sem in eget faucibus massa arcu et elementum sed massa nulla dolor felis dictumst malesuada non.</p>
                <span className="right-arrow"></span>
                </div>
            </div>
            <div className="mycontnr left-cntr">
                <img src={qlty}></img>
                <div className="txt-bx">
                <h3>Monthly Servies Subscriptions</h3>  
                <p>Sem in eget faucibus massa arcu et elementum sed massa nulla dolor felis dictumst malesuada non.</p>
                <span className="left-arrow"></span>
                </div>
            </div>
            <div className="mycontnr right-cntr">
                <img src={qlty}></img>
                <div className="txt-bx">
                <h3>Best Price Packages</h3>  
                <p>Sem in eget faucibus massa arcu et elementum sed massa nulla dolor felis dictumst malesuada non.</p>
                <span className="right-arrow"></span>
                </div>
            </div>
        </div>}
        </ScrollTrigger>
    )
}

export default ChooseUs;