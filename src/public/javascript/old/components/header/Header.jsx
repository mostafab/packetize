import React from 'react';

export default class Header extends React.Component {
    render() {
        const fixed = this.props.fixed ? 'navbar-fixed' : '';
        return (
            <div className={fixed}>
                <nav className={this.props.color}>
                    <div className="nav-wrapper">
                        <a className="brand-logo center">{this.props.title}</a>
                        <HeaderLinkGroup links={this.props.links} />
                    </div>
                </nav>
            </div>
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
    
    constructor(props) {
        super(props);
    }
    
    onClick() {
        console.log(`Clicked on anchor: ${this.props.title}`);
    }
    
    render() {
        return (
            <li>
                <a href={this.props.href} onClick={this.onClick.bind(this)}>{this.props.title}</a>
            </li>
        )
    }
}