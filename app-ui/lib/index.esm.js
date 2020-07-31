import React, { Component } from 'react';
import { Text, View } from 'react-native-web';
import tailwind from 'tailwind-rn';

class AppHeader extends Component {
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
        return (React.createElement(Text, { accessibilityRole: ACCESSIBILITY_ROLE, "aria-level": level, 
            // Temp Style
            style: tailwind(STYLE) }, children));
    }
}

class AppHero extends Component {
    render() {
        const { children, testId } = this.props;
        const STYLE = 'flex bg-gray-200 py-24 justify-center text-center';
        return (React.createElement(View, { testID: testId, style: tailwind(STYLE) }, children));
    }
}

class AppMain extends Component {
    render() {
        const { children, testId } = this.props;
        const STYLE = 'mx-8';
        return (React.createElement(View, { testID: testId, style: tailwind(STYLE) }, children));
    }
}

const createNextLink = (
// TODO: See https://github.com/joshvillahermosa/code-template-r/issues/37
NextLinkComponent) => {
    return class AppNextLink extends Component {
        render() {
            const DEFAULT_STYLE_OPTIONS = {
                color: 'green',
            };
            const { text, href, key, styleOptions } = this.props;
            const style = styleOptions
                ? Object.assign({}, DEFAULT_STYLE_OPTIONS, styleOptions)
                : DEFAULT_STYLE_OPTIONS;
            return (React.createElement(NextLinkComponent, { href: href, key: key },
                React.createElement("a", { style: { ...style } }, text)));
        }
    };
};

class AppWebLink extends Component {
    render() {
        const DEFAULT_COLOR = 'green';
        const { text, href, color: colorProp } = this.props;
        const color = colorProp ? colorProp : DEFAULT_COLOR;
        const STYLE = `hover:underline text-${color}-700`;
        const TARGET = '_blank';
        return (React.createElement("a", { href: href, target: TARGET, style: tailwind(STYLE) }, text));
    }
}

export { AppHeader, AppHero, AppMain, AppWebLink, createNextLink };
