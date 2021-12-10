import React, { Component } from 'react'
// import axios from 'axios'
import "./Call.css"

export class Call extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
    }
       

    render() {
        return (
            <div className="coll">
                 {/* {postliste} */}
                
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="button3">Submit</button>
        </form>
                
                 
            </div>
        );
     }

   
    
    onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
      handleSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
      }
    //   handleSubmit(e) {
    //     e.preventDefault();
      
    //     fetch('http://localhost:3000/send', {
    //         method: "POST",
    //         body: JSON.stringify(this.state),
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json'
    //         },
    //       }).then(
    //       (response) => (response.json())
    //         ).then((response)=> {
    //       if (response.status === 'success') {
    //         alert("Message Sent.");
    //         this.resetForm()
    //       } else if(response.status === 'fail') {
    //         alert("Message failed to send.")
    //       }
    //     })
   
}

export default Call
