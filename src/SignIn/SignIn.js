import React, { Component } from 'react'
// import SignUP11 from '../SignUp/SignUp'

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state ={ 
           
            email1: '',
            password1: '',  
        }
        this.onInputChangeemail1 = this.onInputChangeemail1.bind(this);
        this.onInputChangepassword1 = this.onInputChangepassword1.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    
    button1=()=>{
        alert("you don`t have account")
       // document.getElementById("sign").style.display = "none";
       // var element = document.getElementById("Headermain");
       // element.classList.remove("Headermain");
      }
   
      
      onInputChangeemail1(email1){
       // console.log(email1.target.value);
       this.setState({email1:email1.target.value});
      }
      onInputChangepassword1(password1){
       console.log(password1.target.value);
       this.setState({password1:password1.target.value});
      }
   
    render() {
        return (
           <div>
                <div className="signIn" id="signIn"  onLoad={this.sign}>
            <form>
                <h2>SignIn:</h2>
                <label>Email</label>
                <input type="email" placeholder="Enter Your Email" onChange={this.onInputChangeemail1}/>
                <label>Password</label>
                <input type="password" placeholder="Enter Your Password" onChange={this.onInputChangepassword1}/>
                <input type="button"  onClick={this.button1} className="button3" value="SignIn" />
                {/* <p onClick={this.account1}>I don't have account?</p> */}
            </form>
          </div>
                {/* <div id="signUp11" >
                    <SignUP11/>
                </div> */}
           </div>
        )
    }
}

export default SignIn
