import React, { Component } from 'react'
import axios from 'axios'
import Scien from "../img/Scien.png"
import "./Science.css"

export class Science extends Component {
    state ={
        science:[]
    }

        componentDidMount(){
        axios.get('Data/Data.json')
        .then(resp=>{
            this.setState({science: resp.data.science})
            // console.log(resp.data)
        })
    }
   
    render() {
        
            const {science}=this.state;
           const  sciencelist =science.map((science) => {
              return(
                <div>
                    <div>
                         <iframe width="560" height="315" src={science.photo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    {/* // <div className="scienceele "> */}
                    {/* <div className="science_lg"></div> */}
                    <div className="science_st">{science.title}</div>
                {/* // </div> */}
                </div>

              )
           })
        
        return (
            <div>
                <div className="Sciencelg">
                    <div className="Science">
                        <img src={Scien} alt="Science"/>
                    </div>
                </div>
                     <h2>general science</h2>
                <div  className="col">{sciencelist}</div>
                
            </div>
        )
    }
}
export default Science
