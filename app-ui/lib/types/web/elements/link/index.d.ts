import { Component } from 'react';
export interface AppLinkProps {
    text: string;
    href: string;
    color?: string;
}
export default class AppWebLink extends Component<AppLinkProps> {
    render(): JSX.Element;
}
