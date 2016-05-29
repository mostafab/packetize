import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export class LoginBox extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            registering: false
        }
    }
    
    toggleRegistration() {
        this.setState({
            registering: !this.state.registering
        });
    }
    
    submitLogin() {
        console.log('Submitting form');
        $.ajax({
            url: '/login',
            type: 'POST',
            data: ''
        })
        .then((response, status, xhr) => console.log(response))
        .fail((err) => console.log(err));
    }
    
    render() {
        let formType;
        if (this.state.registering) {
            formType = 
                <div className='row center-align'>
                    <RegistrationForm />
                    <div className='row'>
                        <div className="col m12">
                            <div className='col m6'>
                                <button type='button' className='btn btn-large' onClick={this.toggleRegistration.bind(this)}>Back</button>
                            </div>
                            <div className='right col m6'>
                                <button type='button' className='btn btn-large'>Confirm</button>
                            </div>                            
                        </div>
                    </div>
                </div>
        } else {
            formType =
                <div className='row center-align'>
                    <LoginForm />
                    <div className='row'>
                        <div className="col m12">
                            <div className='col m6'>
                                <button type='button' className='btn btn-large' onClick={this.toggleRegistration.bind(this)}>Register</button>
                            </div>
                            <div className='right col m6'>
                                <button type='button' className='btn btn-large' onClick={this.submitLogin}>Login</button>
                            </div>                            
                        </div>
                    </div>
                </div>
        }
        return (
            formType
        )
    }
}

class LoginForm extends React.Component {
    
    render() {
        return (
            <div>
                <div className='row center-align'>
                    <h2> Login </h2>
                </div> 
                <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="text" className="validate" />
                                <label for="email">Email or Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="pass" type="password" className="validate" />
                                <label for="pass">Password</label>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="row">
                            
                        </div>
                </form>
            </div>
        )
    }
    
}

class RegistrationForm extends React.Component {
    
    render() {
        return (
            <div>
                <div className='row center-align'>
                    <h2> Register </h2>
                </div> 
                <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                         <div className="row">
                            <div className="input-field col s12">
                                <input id="username" type="text" className="validate" />
                                <label for="username">Username</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="pass" type="password" className="validate" />
                                <label for="pass">Password</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="pass-confirm" type="password" className="validate" />
                                <label for="pass-confirm">Confirm Password</label>
                            </div>
                        </div>
                </form>
            </div>
        )
    }
    
}

