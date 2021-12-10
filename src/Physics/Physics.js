import React, { Component } from 'react'
import Physic from "../img/Physic.png"
import "./Physics.css"
import axios from 'axios'



export class Physics extends Component {
    state ={
        Physics:[]
    }

        componentDidMount(){
        axios.get('Data/Data.json')
        .then(resp=>{
            this.setState({Physics: resp.data.Physics})
            // console.log(resp.data)
        })
    }
   
    render() {
        
            const {Physics}=this.state;
           const  Physicslist =Physics.map(( pos) => {
              return(
                <div className="Physicsele ">
                <div className="Physics_lg"></div>
                <div className="Physics_st">{pos.title}</div>
            </div>
               

              )
           })
        
        return (
            <div>
            <div className="Physicslg">
                <div className="Physics">
                    <img src={Physic} alt="Physics"/>
                </div>
            </div>
                 <h2>Physics</h2>
            <div  className="col"> {Physicslist}</div>
            </div>
        )
    }
}

export default Physics
