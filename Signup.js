import React, { Component } from 'react';
class Signup extends Component{

    state = {
        user:{
            name:"",
            age:"",
            email:"",
            number:"",
            password:"",
        },
        data:[],
        formErrors:"",
    };
    changeHandler=(e)=>{
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value,
            },
        });
    };
    createUser=(e)=>{
        e.preventDefault();
        if(this.validateForm()){
            this.setState({
                data:[...this.state.data,this.state.user]
            });
        }

    };
    validateForm=()=>{
        const values = this.state.user;
        let isValid = true;
        const error = {};
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+com$/;
        if(!values.name){
            error.name="Name is required!";
            isValid=false;
        }
        if(!values.age){
            error.age="Age is required!";
            isValid=false;
        }
        if(!values.email){
            error.email="Email Id is required!";
            isValid=false;
        }
        else if(!regex.test(values.email)){
            error.email="Invalid email id, please enter a valid email id!";
            isValid=false;
        }
        if(!values.number){
            error.number="Phone number is required!";
            isValid=false;
        }
        if(!values.password){
            error.password="Password is required!";
            isValid=false;
        }
        this.setState({
            formErrors:error,
        });
        return isValid;
    };

    render(){
        return(
            <div className='container'>
                <form onSubmit={this.createUser}>
                    <div>
                        <div className='form-group'>
                            <label>Name *</label>
                            <input 
                                type="text"
                                name="name"
                                className='form-control'
                                value={this.state.user.name}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p className='text-danger'>{this.state.formErrors.name}</p>
                        <div className='form-group'>
                            <label>Age *</label>
                            <input 
                                type="number"
                                name="age"
                                className='form-control'
                                value={this.state.user.age}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p className='text-danger'>{this.state.formErrors.age}</p>
                        <div className='form-group'>
                            <label>Email *</label>
                            <input 
                                type="text"
                                name="email"
                                className='form-control'
                                value={this.state.user.email}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p className='text-danger'>{this.state.formErrors.email}</p>
                        <div className='form-group'>
                            <label>Contact Number *</label>
                            <input 
                                type="number"
                                name="number"
                                className='form-control'
                                value={this.state.user.number}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p className='text-danger'>{this.state.formErrors.number}</p>
                        <div className='form-group'>
                            <label>Create a Password *</label>
                            <input 
                                type="password"
                                name="password"
                                className='form-control'
                                value={this.state.user.password}
                                onChange={this.changeHandler}
                            />
                        </div>
                        <p className='text-danger'>{this.state.formErrors.password}</p>
                        <br/>
                        <button className='btn btn-success'>Register</button>
                    </div>
                </form>
            </div>
        );
    }
    
}

export default Signup;