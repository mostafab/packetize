import React from 'react';
import Header from './header/Header';
import {LoginBox} from './forms/Login';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Header fixed={true} title={this.props.headerTitle || 'Packetize'} color='blue darken-4' links={this.props.headerLinks}/>
                <div className='valign-wrapper row login-box' id='login-box-container'>
                    <LoginBox />
                </div>
            </div>
        )    
    }
}

