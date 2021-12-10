import React, { Component } from 'react'
import axios from 'axios'
import mathematics from "../img/Math.png"
import "./Math.css"

export class Math extends Component {
    state ={
        Maths:[]
    }

        componentDidMount(){
        axios.get('Data/Data.json')
        .then(resp=>{
            this.setState({Maths: resp.data.Maths})
            // console.log(resp.data)
        })
    }

    
   
    render() {
        
            const {Maths}=this.state;
           const  Mathslist =Maths.map(( Math) => {
              return(
                <div className="Math_ele">
                    <div>
                         <iframe width="560" height="315" src={Math.photo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    {/* <div className="Mathele "> */}
                        {/* <div className="Math_lg"></div> */}
                        <div className="Math_st">{Math.title}</div>
                   {/* </div> */}
                </div>

              )
           })
        
        return (
            <div> 
                <div className="mathemat">
                    <div className="mathematics"><img src={mathematics} alt="Math"/></div>
                </div>
                <h2>mathematics</h2>
                <div className="col">{Mathslist}</div>
            </div>
        )
    }
}

export default Math
