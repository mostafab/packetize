'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoginBox = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginBox = exports.LoginBox = function (_React$Component) {
    _inherits(LoginBox, _React$Component);

    function LoginBox(props) {
        _classCallCheck(this, LoginBox);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LoginBox).call(this, props));

        _this.state = {
            registering: false
        };
        return _this;
    }

    _createClass(LoginBox, [{
        key: 'toggleRegistration',
        value: function toggleRegistration() {
            this.setState({
                registering: !this.state.registering
            });
        }
    }, {
        key: 'submitLogin',
        value: function submitLogin() {
            console.log('Submitting form');
            _jquery2.default.ajax({
                url: '/login',
                type: 'POST',
                data: ''
            }).then(function (response, status, xhr) {
                return console.log(response);
            }).fail(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var formType = void 0;
            if (this.state.registering) {
                formType = _react2.default.createElement(
                    'div',
                    { className: 'row center-align' },
                    _react2.default.createElement(RegistrationForm, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col m12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col m6' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-large', onClick: this.toggleRegistration.bind(this) },
                                    'Back'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'right col m6' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-large' },
                                    'Confirm'
                                )
                            )
                        )
                    )
                );
            } else {
                formType = _react2.default.createElement(
                    'div',
                    { className: 'row center-align' },
                    _react2.default.createElement(LoginForm, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col m12' },
                            _react2.default.createElement(
                                'div',
                                { className: 'col m6' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-large', onClick: this.toggleRegistration.bind(this) },
                                    'Register'
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'right col m6' },
                                _react2.default.createElement(
                                    'button',
                                    { type: 'button', className: 'btn btn-large', onClick: this.submitLogin },
                                    'Login'
                                )
                            )
                        )
                    )
                );
            }
            return formType;
        }
    }]);

    return LoginBox;
}(_react2.default.Component);

var LoginForm = function (_React$Component2) {
    _inherits(LoginForm, _React$Component2);

    function LoginForm() {
        _classCallCheck(this, LoginForm);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(LoginForm).apply(this, arguments));
    }

    _createClass(LoginForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'row center-align' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        ' Login '
                    )
                ),
                _react2.default.createElement(
                    'form',
                    { className: 'col s12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field col s12' },
                            _react2.default.createElement('input', { id: 'email', type: 'text', className: 'validate' }),
                            _react2.default.createElement(
                                'label',
                                { 'for': 'email' },
                                'Email or Username'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field col s12' },
                            _react2.default.createElement('input', { id: 'pass', type: 'password', className: 'validate' }),
                            _react2.default.createElement(
                                'label',
                                { 'for': 'pass' },
                                'Password'
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'divider' }),
                    _react2.default.createElement('div', { className: 'row' })
                )
            );
        }
    }]);

    return LoginForm;
}(_react2.default.Component);

var RegistrationForm = function (_React$Component3) {
    _inherits(RegistrationForm, _React$Component3);

    function RegistrationForm() {
        _classCallCheck(this, RegistrationForm);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(RegistrationForm).apply(this, arguments));
    }

    _createClass(RegistrationForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'row center-align' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        ' Register '
                    )
                ),
                _react2.default.createElement(
                    'form',
                    { className: 'col s12' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field col s12' },
                            _react2.default.createElement('input', { id: 'email', type: 'email', className: 'validate' }),
                            _react2.default.createElement(
                                'label',
                                { 'for': 'email' },
                                'Email'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field col s12' },
                            _react2.default.createElement('input', { id: 'username', type: 'text', className: 'validate' }),
                            _react2.default.createElement(
                                'label',
                                { 'for': 'username' },
                                'Username'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field col s12' },
                            _react2.default.createElement('input', { id: 'pass', type: 'password', className: 'validate' }),
                            _react2.default.createElement(
                                'label',
                                { 'for': 'pass' },
                                'Password'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-field col s12' },
                            _react2.default.createElement('input', { id: 'pass-confirm', type: 'password', className: 'validate' }),
                            _react2.default.createElement(
                                'label',
                                { 'for': 'pass-confirm' },
                                'Confirm Password'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return RegistrationForm;
}(_react2.default.Component);