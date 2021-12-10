import React from 'react'
import {Link } from 'react-router-dom';

import "./Home.css"
import mathematics from "../img/Math.png"
import Scien from "../img/Scien.png"
import Chemist from "../img/Science.png"
import Biolog from "../img/Biolog.png"
import Physic from "../img/Physic.png"
import Arab from "../img/arabic.png"
import Future_scien from "../img/future.png"


import car1 from "../img/car1.jpg"
import car2 from "../img/car2.jpg"
import car3 from "../img/car3.jpg"

export default function Home() {
    return (
        <div >
            <div className="Home-bg">
                   <div className="input-learning">
                       <input type="text" placeholder="What do you want to learning"/>
                   </div>
                   
                   <div className="Link-main Link-main1111 .Link-main11">
                        <div>
                        <Link to="/Home"></Link>
                        <Link to="/"></Link>
                        <Link to="/Math">
                            <div className="mathematics"><img src={mathematics} alt="Math"/></div>
                            <div>mathematics</div>
                        </Link>
                        <Link to="/Science">
                           <div className="Science"><img src={Scien} alt="Science"/></div>
                            general science
                        </Link>
                        <Link to="/Chemistry">
                        <div className="Chemistry"> <img src={Chemist} alt="Chemistry"/></div>
                            chemistry
                        </Link>
                        <Link to="/Biology">
                        <div className="Biology"> <img src={Biolog} alt="Biology"/></div>
                            Biology
                        </Link>
                        <Link to="/Physics">
                        <div className="Physics">  <img src={Physic} alt="Physics"/></div>
                            Physics
                        </Link>
                        <Link to="/Arabic">
                        <div className="Arabic"> <img src={Arab} alt="Arabic"/></div>
                            Arabic
                        </Link>
                        <Link to="/Future_science">
                        <div className="Future_science"> <img src={Future_scien} alt="Future_science"/></div>
                            future science for kids
                            
                        </Link>
                        
                        </div>
                        
                    </div>
                  
                   
            </div>
            <div className="Main">
                <div  className="Distinguished">Distinguished</div>
                <div className="Main1">
                    <div> 
                        <div>
                            <img src={car1} alt="car1"/>
                        </div>
                        <p>Mohamed Mahmoud </p>
                        <p>99.9%</p>
                    </div>
                    <div> 
                        <div>
                            <img src={car2} alt="car1"/>
                        </div>
                        <p>Ahmed Mahmoud</p>
                        <p>99.5%</p>
                    </div>
                    <div> 
                        <div>
                            <img src={car3} alt="car1"/>
                        </div>
                        <p>Abdo Mahmoud</p>
                        <p>99%</p>
                    </div>
                </div>
            </div>
                        
        </div>
    )
}
