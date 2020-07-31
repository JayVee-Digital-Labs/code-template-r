import { Component } from 'react';
export declare type HeaderLevels = '1' | '2' | '3' | '4' | '5' | '6';
export interface AppHeaderProps {
    level?: HeaderLevels;
}
export default class AppHeader extends Component<AppHeaderProps> {
    private getHeaderStyle;
    render(): JSX.Element;
}
