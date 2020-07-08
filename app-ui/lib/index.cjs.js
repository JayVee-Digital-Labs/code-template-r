'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNativeWeb = require('react-native-web');
var tailwind = _interopDefault(require('tailwind-rn'));

class AppHeader extends React.Component {
    constructor() {
        super(...arguments);
        this.DEFAULT_HEADER = '1';
    }
    getHeaderStyle(level) {
        const map = {
            '1': '6',
            '2': '5',
            '3': '4',
            '4': '3',
            '5': '2',
            '6': '',
        };
        return map[level];
    }
    render() {
        const { children, level } = this.props;
        const levelMap = level ? this.getHeaderStyle(level) : this.DEFAULT_HEADER;
        return (React__default.createElement(reactNativeWeb.Text, { accessibilityRole: "header", "aria-level": level, 
            // Temp Style
            style: tailwind(`text-${levelMap}xl`) }, children));
    }
}

exports.AppHeader = AppHeader;
