"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function (React, ReactDOM, $) {
    var Header = function (_React$Component) {
        _inherits(Header, _React$Component);

        function Header() {
            _classCallCheck(this, Header);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
        }

        _createClass(Header, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "nav",
                    { className: this.props.color },
                    React.createElement(
                        "div",
                        { className: "nav-wrapper" },
                        React.createElement(
                            "a",
                            { href: "/", className: "brand-logo center" },
                            this.props.title
                        ),
                        React.createElement(HeaderLinkGroup, { links: this.props.links })
                    )
                );
            }
        }]);

        return Header;
    }(React.Component);

    var HeaderLinkGroup = function (_React$Component2) {
        _inherits(HeaderLinkGroup, _React$Component2);

        function HeaderLinkGroup() {
            _classCallCheck(this, HeaderLinkGroup);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderLinkGroup).apply(this, arguments));
        }

        _createClass(HeaderLinkGroup, [{
            key: "render",
            value: function render() {
                var rows = [];
                this.props.links.forEach(function (link, i) {
                    return rows.push(React.createElement(HeaderLink, { title: link.title, href: link.href, key: i }));
                });
                return React.createElement(
                    "ul",
                    { id: "nav-mobile", className: "left hide-on-med-and-down" },
                    rows
                );
            }
        }]);

        return HeaderLinkGroup;
    }(React.Component);

    var HeaderLink = function (_React$Component3) {
        _inherits(HeaderLink, _React$Component3);

        function HeaderLink() {
            _classCallCheck(this, HeaderLink);

            return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderLink).apply(this, arguments));
        }

        _createClass(HeaderLink, [{
            key: "render",
            value: function render() {
                return React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "a",
                        { href: this.props.href },
                        this.props.title
                    )
                );
            }
        }]);

        return HeaderLink;
    }(React.Component);

    var links = [{ title: 'Test', href: '/' }, { title: 'Test 2', href: '/test' }];

    ReactDOM.render(React.createElement(Header, { color: "red darken-4", title: "Packetize", links: links }), document.getElementById('header'));
})(React, ReactDOM, jQuery);