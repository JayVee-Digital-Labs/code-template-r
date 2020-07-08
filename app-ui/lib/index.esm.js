import React, { Component } from 'react';
import { Text } from 'react-native-web';
import tailwind from 'tailwind-rn';

class AppHeader extends Component {
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
        return (React.createElement(Text, { accessibilityRole: "header", "aria-level": level, 
            // Temp Style
            style: tailwind(`text-${levelMap}xl`) }, children));
    }
}

export { AppHeader };
