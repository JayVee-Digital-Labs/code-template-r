import { ComponentType } from 'react';
import { Properties as CSSProperties } from 'csstype';
export interface NextLinkCommonProps {
    href: string;
    key?: string;
}
export interface AppNextLinkProps extends NextLinkCommonProps {
    text: string;
    styleOptions?: CSSProperties;
}
export declare const createNextLink: (NextLinkComponent: any) => ComponentType<AppNextLinkProps>;
