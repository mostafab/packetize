import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './components/Index';


ReactDOM.render(<IndexPage color='red darken-4' headerTitle='Packetize' headerLinks={[
    {href: '/about', title: 'About'},
    {href: '/login', title: 'Register'}
]} />, document.getElementById('content'));