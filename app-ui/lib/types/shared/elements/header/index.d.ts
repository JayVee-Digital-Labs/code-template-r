import { Component, ReactNode } from 'react';
export declare type HeaderLevels = '1' | '2' | '3' | '4' | '5' | '6';
export interface AppHeaderProps {
    children: ReactNode;
    level?: HeaderLevels;
}
export default class AppHeader extends Component<AppHeaderProps> {
    private DEFAULT_HEADER;
    private getHeaderStyle;
    render(): JSX.Element;
}
