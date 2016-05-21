import React from 'react';
import $ from 'jquery';

export default class Header extends React.Component {
    render() {
        return (
            <nav className={this.props.color}>
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center">{this.props.title}</a>
                    <HeaderLinkGroup links={this.props.links} />
                </div>
            </nav>
        )
    }
}
    
class HeaderLinkGroup extends React.Component {
    render() {
        let rows = [];
        this.props.links.forEach((link, i) => rows.push(<HeaderLink title={link.title} href={link.href} key={i} />));
        return (
            <ul id='nav-mobile' className='left hide-on-med-and-down'>
                {rows}
            </ul>
        )
    }
}

class HeaderLink extends React.Component {
    render() {
        return (
            <li>
                <a href={this.props.href}>{this.props.title}</a>
            </li>
        )
    }
}

