import React, { Component } from 'react'
import axios from 'axios'
import "./Biology.css"
import Biolog from "../img/Biolog.png"
export class Biology extends Component {
  state ={
    Biology:[]
}

    componentDidMount(){
    axios.get('Data/Data.json')
    .then(resp=>{
        this.setState({Biology: resp.data.Biology})
        // console.log(resp.data)
    })
}

render() {
    
        const {Biology}=this.state;
       const  Biologylist =Biology.map(( pos) => {
          return(
            <div className="Biologyele ">
            <div className="Biology_lg"></div>
            <div className="Biology_st"> {pos.title}</div>
        </div>

          )
       })
    
    return (
        <div>
            <div className="Biologylg">
            <div className="Biology"> <img src={Biolog} alt="Biology"/></div>
            </div>
            <h2> Biology</h2>
            <div className="col">{Biologylist}</div>
        </div>
    )
}
}
export default Biology
