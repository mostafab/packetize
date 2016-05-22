import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './components/Index';
import $ from 'jquery';
import Materialize from 'materialize-css';


ReactDOM.render(<IndexPage color='red darken-4' headerTitle='Packetize' headerLinks={[
    {href: '/about', title: 'About'}
]} />, document.getElementById('content'));