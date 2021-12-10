


import React from 'react'
import "./HomeN.css"
import {BrowserRouter,Link , Routes,Route} from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Call from '../Call/Call';
import Terms from '../Terms/Terms';
import Signin1 from '../SignIn/SignIn';
import Signup1 from '../SignUp/SignUp';
import Maine from '../Maine/Maine';

import Math from "../Math/Math";
import Science from "../Science/Science";
import Chemistry from "../Chemistry/Chemistry";
import Biology from "../Biology/Biology";
import Physics from "../Physics/Physics";
import Arabic from "../Arabic/Arabic";
import Futurescience from "../Future_science/Future_science";


export default function HomeN() {
    // function SignUp (){
    //     document.getElementById("HomeN1").style.display="none"
    //     document.getElementById("signup").style.display="block"
    // }
    // function SignIn (){
    //     document.getElementById("HomeN1").style.display="none"
    //     document.getElementById("signin").style.display="block"
    // }
    
    return (
        
      <BrowserRouter>
        <div className ="HomeN1" id="HomeN1">
            <header>
                <ul>
                    <li><p>Academy</p></li>
                    <Link to="/"></Link>
                    <li><Link  to="/Maine">Main </Link></li>
                    <li className='LIAbout'> <Link className="About" to="/About">AboutUs</Link></li>
                    <li className='LICall'> <Link className="Call" to="/Call">ContactUs</Link></li>
                    <li className='LITerms'>  <Link className="Terms" to="/Terms">Terms</Link></li>
                    <li> <Link  to="/SignUp"><button >SignUp</button></Link></li>
                    <li className='LISignIn'><Link  to="/SignIn"><button >SignIn</button></Link></li>
                    {/* onClick={SignUp}
                    onClick={SignIn} */}
                </ul>
                
            </header>
                < Routes>
                    <Route path="/" element={<Maine/>} exact/>
                    <Route path="/Maine" element={<Maine/>} exact/>
                    <Route path="/Home" element={<Home/>} exact/>
                    
                    <Route path="/About" element={<About/>} exact/>
                    <Route path="/Call" element={<Call/>} exact/>
                    <Route path="/Terms" element={<Terms/>} exact/>
                    <Route path="/SignUp" element={<Signup1/>} exact/>
                    <Route path="/SignIn" element={<Signin1/>} exact/>
                    
                    <Route path="/Math"  element={<Math/>}  exact/>
                    <Route path="/Science"  element={<Science/>}  exact/>
                    <Route path="/Chemistry"  element={<Chemistry/>} exact/>
                    <Route path="/Biology"  element={<Biology/>} exact/>
                    <Route path="/Physics" element={<Physics/>} exact/>
                    <Route path="/Arabic"  element={<Arabic/>} exact/>
                    <Route path="/Future_science"  element={<Futurescience/>} exact/>
                    <Route path="/Home"  element={<Home/>} exact/>
                </ Routes>
            <footer>
            <div className="footerlink">
                    <div>
                        <div>FAQ</div>
                        <div>Investor Relations</div>
                        <div>Investor Relations</div>
                        <div>Speed Test</div>
                        <div>Help Center</div>
                    </div>
                    <div>
                        <div>Jobs</div>
                        <div>Cookie Preferences</div>
                        <div>Legal Notices</div>
                        <div>Account</div>
                        <div>Ways to Watch</div>
                    </div>
                    <div>
                        <div>Corporate Information</div>
                        <div>Only on Netflix</div>
                        <div>Media Center</div>
                        <div>Terms of Use</div>
                        <div>Contact Us</div>
                    </div>
                    <div>
                        <div><p>Ways to Watch</p></div>
                        <div>Legal Notices</div>
                        <div>Jobs</div>
                        <div>Corporate Information</div>
                        <div>Media Center</div>
                    </div>
            </div>
            <div className="copyright">
            copyright ©2021 all right reserved | this template is made width By <span>Ahmed Mahmoud Mohammed</span>
            </div>
            </footer>
        
        </div>

        {/* <div className="signup" id="signup">
        <Signup1/>
        </div>

        <div className="signin" id="signin">
        <Signin1/>
        </div> */}

         
      </BrowserRouter>
       
    )
}
