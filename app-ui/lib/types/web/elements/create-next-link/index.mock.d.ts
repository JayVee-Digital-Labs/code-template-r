import { Component } from 'react';
interface Props {
    href: string;
    key?: string;
}
export default class MockNextLink extends Component<Props> {
    render(): JSX.Element;
}
export {};
