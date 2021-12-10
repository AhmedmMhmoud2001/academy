
import React from 'react'
import { Link } from 'react-router-dom'
import "./Maine.css"
import images from "../img/257181926_4426730204071938_5118553826803449461_n.png"
export default function Maine() {
    return (
        <div>
            <main>
                <p> Academy Hamoud </p>
                <Link   to="/SignUp"><button >SignUp</button> </Link>
            </main>
            <div className="section2">
                <div className="section21">
                    <h2 > Academy Hamoud </h2>
                    <p >With their teachers' guidance,  Academy Hamoud  students learn to efficiently and confidently master their work at school. If you are looking for a well-rounded educational experience that will give your child the support and motivation he or she needs to succeed, please contact us today to</p>
                </div>
                <div>
                    <img src={images } width="400px" alt=""/>
                </div>
            </div>
        </div>
    )
}

