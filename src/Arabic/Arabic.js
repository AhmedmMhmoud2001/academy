import React, { Component } from 'react'
import axios from 'axios'
import Arab from "../img/arabic.png"
import "./Arabic.css"

export class Arabic extends Component {
    state ={
        Arabic:[]
    }

        componentDidMount(){
        axios.get('Data/Data.json')
        .then(resp=>{
            this.setState({Arabic: resp.data.Arabic})
            // console.log(resp.data)
        })
    }
   
    render() {
        
            const {Arabic}=this.state;
           const  Arabiclist =Arabic.map(( pos) => {
              return(
                <div className="Arabicele ">
                <div className="Arabic_lg"></div>
                <div className="Arabic_st"> {pos.title}</div>
            </div>

              )
           })
        
        return (
            
        <div>
             <div className="Arabiclg">
                 <div className="Arabic">
                     <img src={Arab} alt="Arabic"/>
                 </div>
             </div>
                  <h2>Arabic</h2>
             <div  className="col">  {Arabiclist}</div>
             
         </div>
        )
    }
}

export default Arabic
