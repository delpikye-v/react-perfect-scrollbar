import { MutableRefObject } from 'react';
import { IFunction, IScrollbarProps, ISize } from './Interfaces';
export declare const appendDimension: ({ height, maxHeight, width, maxWidth }: IScrollbarProps) => ISize;
export declare const appendEventListener: (props: IScrollbarProps, target: any) => IFunction;
export declare const clearEventListner: (listEvent: any, target: HTMLElement) => void;
export declare function calculatorRealSize(realChild?: HTMLElement[]): number;
export declare const elTarget: (isTbody: boolean, props: IScrollbarProps, root: MutableRefObject<HTMLElement>, child: MutableRefObject<HTMLElement>, dimension: ISize) => {
    table: HTMLElement;
    el: HTMLElement;
} | {
    el: HTMLElement;
    table?: undefined;
};
export declare function find1stLevel(el: any, querySelector: string, list?: any[]): any;
