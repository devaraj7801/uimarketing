import { Component } from "react";

import "./index.css"


class Signup extends Component{
    state = {Username:"",phnNum:"",email:"",password:"",error:false,errorMsg:""}

    onSuccess = () => {
        const{history} = this.props
        history.push("/")

    }

    onSubmitDetails = e => {
        e.preventDefault()
        
        const{Username,password,email,phnNum} = this.state
        if(Username === ""){
            const msg = "Please Enter the username"
            this.setState({error:true,errorMsg:msg})
            console.log("if caled") 
        }
        else if(phnNum===""){
            const msg = "Please Enter the PhnNumber"
            this.setState({errorMsg:msg})
            console.log("elseif caled") 
        }
        else if(email === ""){
            const msg = "Please Enter the email"
            this.setState({errorMsg:msg})
        }
        else if(password === ""){
            const msg = "Please Enter the password"
            this.setState({errorMsg:msg})
        }
        else{
        console.log("else called")
        this.setState(prev => ({error:!prev.error,errorMsg:""}))
        return this.onSuccess()
        }
    }

    onChangeUserName = e => {
        this.setState({Username:e.target.value})
    }

    onChangePassword = e => {
        this.setState({password:e.target.value})
    }

    onChangeEmail = e => {
        this.setState({email:e.target.value})
    }

    onChangePhnNum = e => {
        this.setState({phnNum:e.target.value})
    }

    render(){
        const{Username,password,email,phnNum,error,errorMsg} = this.state
        return(
            <div className="main-container">
            <div className="signup-container">
                <h1 className="form-head">Create Account</h1>
                <form onSubmit={this.onSubmitDetails} className="form-container">
                    <div>
                    <input type="text"  placeholder="Full Name" value={Username} onChange={this.onChangeUserName}/>
                    </div>
                    <div>
                    <input type="number" placeholder="Phn Num" value={phnNum} onChange={this.onChangePhnNum}/>
                    </div>
                    <div>
                   <input type="email" placeholder="your@email.com" value={email} onChange={this.onChangeEmail} />
                   </div>
                   <div>
                    <input type="password" placeholder="password" value={password} onChange={this.onChangePassword}/>
                    </div>
                    {error && <p className="error">{errorMsg}</p>}
                    <button type="submit" className="signup-button">Signup</button>
                </form>
            </div>
            </div>
        )
    }
}





export default Signup


