import React, { Component } from 'react'
// import Signin1 from '../SignIn/SignIn'
import "./SignUp.css"
import {  Link } from 'react-router-dom';

export class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state ={ 
            Name: "",
            email: '',
            password: '',
            Confirmpassword: '',
        }
        this.onInputChangeeName = this.onInputChangeeName.bind(this);
        this.onInputChangeemail = this.onInputChangeemail.bind(this);
        this.onInputChangepassword = this.onInputChangepassword.bind(this);
        this.onInputChangeConfirmpassword = this.onInputChangeConfirmpassword.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    //   account1=()=>{
    //     document.getElementById("signUp").style.display = "block";
    //     document.getElementById("signIn11").style.display = "none";
        
    //    }
    // account=()=>{
    //     document.getElementById("signUp").style.display = "none";
    //     document.getElementById("signIn11").style.display = "block";
    //    }

      button=()=>{
    
        if ( this.state.Name.length===0)   
          { alert(' your name is empty');}
    
        else if ( this.state.Name.length>7)   
          { alert('your name is very long ');}
    
        else if (this.state.email.length===0)
          {
            alert('your email is empty')
          }
        else if (this.state.email.length > 30)
          {
            alert('Email must be less than or equal 30 characters')
          }
        else if (!this.state.email.endsWith("@student.stc.edu"))
          {
            alert('Must end with in: @student.stc.edu"')
          }
        
       else if ( this.state.password.length===0)   
          { alert('A password: ' + this.state.password+'is empty');}
    
        else if ( this.state.password.length<6)   
          { alert('A password : ' + this.state.password+'is small');}
    
        else if ( this.state.password !==this.state.Confirmpassword)   
          { alert('Confirmpassword ');}
        
      
      else 
        {
        document.getElementById("hom").style.display ="block";
        document.getElementById("formsignup").style.display ="none";
          console.log(this.state)}
       }

       onInputChangeeName(Name){
        // console.log(Name.target.value);
        this.setState({Name: Name.target.value});
       }
       onInputChangeemail(email){
        // console.log(email.target.value);
        this.setState({email:email.target.value});
       }
       onInputChangepassword(password){
        // console.log(password.target.value);
        this.setState({password:password.target.value});
       }
       onInputChangeConfirmpassword(Confirmpassword){
        // console.log(Confirmpassword.target.value);
      this.setState({Confirmpassword: Confirmpassword.target.value});
       }
    
       
    render() {
        return (
           
                <div className="signUp" id="signUp" >
            <form >
               <div id="formsignup">
                <h2>SignUp:</h2>
                  {/* <p id="fff">{errors.Name}</p> */}
                  <label>Your Name</label>
                  <input type="text" placeholder="Enter Your Name"  onChange={this.onInputChangeeName} id="Name" required/>
                  <label>Email</label>
                  <input type="email" placeholder="Enter Your Email"  onChange={this.onInputChangeemail} required/>
                  <label>Password</label>
                  <input type="password" placeholder="Enter Your password" onChange={this.onInputChangepassword}required/>
                  <label> Confirm Password</label>
                  <input type="password" placeholder="Enter Your password"onChange={this.onInputChangeConfirmpassword} required/>

                  <input type="button"  onClick={this.button} className="button3"  value= "SignUp"/> 
                
               </div>
               <Link to="/Home" id="hom" className="hom " >
                  Go to Home
                </Link>
            </form>
               
          </div>
           
        )
    }
}

export default SignUp
