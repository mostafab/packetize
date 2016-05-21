"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                { className: this.props.color },
                _react2.default.createElement(
                    "div",
                    { className: "nav-wrapper" },
                    _react2.default.createElement(
                        "a",
                        { className: "brand-logo center" },
                        this.props.title
                    ),
                    _react2.default.createElement(HeaderLinkGroup, { links: this.props.links })
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;

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
                return rows.push(_react2.default.createElement(HeaderLink, { title: link.title, href: link.href, key: i }));
            });
            return _react2.default.createElement(
                "ul",
                { id: "nav-mobile", className: "left hide-on-med-and-down" },
                rows
            );
        }
    }]);

    return HeaderLinkGroup;
}(_react2.default.Component);

var HeaderLink = function (_React$Component3) {
    _inherits(HeaderLink, _React$Component3);

    function HeaderLink(props) {
        _classCallCheck(this, HeaderLink);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HeaderLink).call(this, props));
    }

    _createClass(HeaderLink, [{
        key: "onClick",
        value: function onClick() {
            console.log("Clicked on anchor: " + this.props.title);
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "li",
                null,
                _react2.default.createElement(
                    "a",
                    { href: this.props.href, onClick: this.onClick.bind(this) },
                    this.props.title
                )
            );
        }
    }]);

    return HeaderLink;
}(_react2.default.Component);