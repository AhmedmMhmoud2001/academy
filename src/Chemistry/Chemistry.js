import React, { Component } from 'react'
import axios from 'axios'
import "./Chemistry.css"
import Chemist from "../img/Science.png"

export class Chemistry extends Component {
    state ={
        chemistry:[]
    }

        componentDidMount(){
        axios.get('Data/Data.json')
        .then(resp=>{
            this.setState({chemistry: resp.data.chemistry})
            // console.log(resp.data)
        })
    }
   
    render() {
        
            const {chemistry}=this.state;
           const  chemistrylist =chemistry.map(( pos) => {
              return(
            //     <div className="Chemistryele ">
            //     <div className="Chemistry_lg"></div>
            //     <div className="Chemistry_st">{pos.title}</div>
            // </div>
            <div>
                <div>
                         <iframe width="560" height="315" src={pos.photo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="Chemistry_st">{pos.title}</div>
            </div>
                

              )
           })
        
        return (
            <div>
                <div className="Chemistrylg">
                <div className="Chemistry"> <img src={Chemist} alt="Chemistry"/></div>
                </div>
                <h2>chemistry</h2>
                <div className="col">{chemistrylist}</div>
            </div>
        )
    }
}

export default Chemistry
