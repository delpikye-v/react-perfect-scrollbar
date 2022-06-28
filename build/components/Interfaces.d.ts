import React, { MutableRefObject } from "react";
import PerfectScrollbar from "perfect-scrollbar";
export interface IScrollbarProps extends ISize, IFunction {
    id?: string;
    tagName?: string | keyof JSX.IntrinsicElements;
    effectData?: any;
    always?: boolean;
    className?: string;
    wheelStop?: boolean;
    style?: React.CSSProperties;
    options?: PerfectScrollbar.Options;
    refScroll?: MutableRefObject<any>;
    onMouseEnter?: (evt: any) => void;
    wrapName?: string | keyof JSX.IntrinsicElements;
    isShow?: boolean;
    libTable?: boolean;
    triggerScrollClick?: boolean;
}
export interface ISize {
    maxWidth?: string;
    maxHeight?: string;
    width?: string;
    height?: string;
}
export interface IFunction {
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
