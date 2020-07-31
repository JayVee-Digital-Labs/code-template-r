'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNativeWeb = require('react-native-web');
var tailwind = _interopDefault(require('tailwind-rn'));

class AppHeader extends React.Component {
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
        const DEFAULT_HEADER = '1';
        const { children, level } = this.props;
        const levelMap = level ? this.getHeaderStyle(level) : DEFAULT_HEADER;
        const ACCESSIBILITY_ROLE = 'header';
        const STYLE = `text-${levelMap}xl`;
        return (React__default.createElement(reactNativeWeb.Text, { accessibilityRole: ACCESSIBILITY_ROLE, "aria-level": level, 
            // Temp Style
            style: tailwind(STYLE) }, children));
    }
}

class AppHero extends React.Component {
    render() {
        const { children, testId } = this.props;
        const STYLE = 'flex bg-gray-200 py-24 justify-center text-center';
        return (React__default.createElement(reactNativeWeb.View, { testID: testId, style: tailwind(STYLE) }, children));
    }
}

class AppMain extends React.Component {
    render() {
        const { children, testId } = this.props;
        const STYLE = 'mx-8';
        return (React__default.createElement(reactNativeWeb.View, { testID: testId, style: tailwind(STYLE) }, children));
    }
}

const createNextLink = (
// TODO: See https://github.com/joshvillahermosa/code-template-r/issues/37
NextLinkComponent) => {
    return class AppNextLink extends React.Component {
        render() {
            const DEFAULT_STYLE_OPTIONS = {
                color: 'green',
            };
            const { text, href, key, styleOptions } = this.props;
            const style = styleOptions
                ? Object.assign({}, DEFAULT_STYLE_OPTIONS, styleOptions)
                : DEFAULT_STYLE_OPTIONS;
            return (React__default.createElement(NextLinkComponent, { href: href, key: key },
                React__default.createElement("a", { style: { ...style } }, text)));
        }
    };
};

class AppWebLink extends React.Component {
    render() {
        const DEFAULT_COLOR = 'green';
        const { text, href, color: colorProp } = this.props;
        const color = colorProp ? colorProp : DEFAULT_COLOR;
        const STYLE = `hover:underline text-${color}-700`;
        const TARGET = '_blank';
        return (React__default.createElement("a", { href: href, target: TARGET, style: tailwind(STYLE) }, text));
    }
}

exports.AppHeader = AppHeader;
exports.AppHero = AppHero;
exports.AppMain = AppMain;
exports.AppWebLink = AppWebLink;
exports.createNextLink = createNextLink;
