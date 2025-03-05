import React, { MutableRefObject } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
export interface IFSize {
    maxWidth?: string;
    maxHeight?: string;
    width?: string;
    height?: string;
}
export interface IFScrollFn {
    onScrollY?: (evt: any) => void;
    onScrollX?: (evt: any) => void;
    onScrollUp?: (evt: any) => void;
    onScrollDown?: (evt: any) => void;
    onScrollLeft?: (evt: any) => void;
    onScrollRight?: (evt: any) => void;
    onYReachStart?: (evt: any) => void;
    onYReachEnd?: (evt: any) => void;
    onXReachStart?: (evt: any) => void;
    onXReachEnd?: (evt: any) => void;
}
export interface IFScrollbarTBodyProps extends IFSize, IFScrollFn {
    children: React.ReactNode | string;
    id?: string;
    effectData?: any;
    always?: boolean;
    className?: string;
    wheelStop?: boolean;
    style?: React.CSSProperties;
    options?: PerfectScrollbar.Options;
    refScroll?: MutableRefObject<any>;
    triggerScrollClick?: boolean;
}
export interface IFScrollbarDataListProps extends IFScrollbarTBodyProps {
    tagName?: 'ul' | 'dl' | 'ol';
}
export interface IFScrollbarProps extends IFScrollbarTBodyProps {
    injectTable?: boolean;
}
export interface IFScrollProps extends IFScrollbarProps {
    tagName?: string;
}
