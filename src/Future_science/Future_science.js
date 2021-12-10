import React, { Component } from 'react'
import axios from 'axios'
import "./Future.css"
import Future_scien from "../img/future.png"

export class Future_science extends Component {
    state ={
        future:[]
    }

        componentDidMount(){
        axios.get('Data/Data.json')
        .then(resp=>{
            this.setState({future: resp.data.future})
            // console.log(resp.data)
        })
    }
   
    render() {
        
            const {future}=this.state;
           const  futurelist =future.map(( pos) => {
              return(
                
                 <div className="Futureele ">
                 <div className="Future_lg"></div>
                 <div className="Future_st">{pos.title}</div>
             </div>

              )
           })
        
        return (
            <div>
                <div  className="Futurelg">
                <div className="Future_science"><img src={Future_scien} alt="Future_science"/></div>
                </div>
                <h2>future science for kids</h2>
                <div className="col">{futurelist}</div>
            </div>
        )
    }
}
export default Future_science
