import React from 'react';
import Header from './header/Header';


export default class IndexPage extends React.Component {
    render() {
        return (
            <Header title={this.props.headerTitle || 'Packetize'} color='blue darken-4' links={this.props.headerLinks}/>
        )    
    }
}

