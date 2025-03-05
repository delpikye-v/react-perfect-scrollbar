import { MutableRefObject } from 'react';
import { IFScrollFn, IFScrollbarProps, IFSize } from './types';
export declare const appendDimension: ({ height, maxHeight, width, maxWidth, }: IFScrollbarProps) => IFSize;
export declare const appendEventListener: (props: IFScrollbarProps, target: any) => IFScrollFn;
export declare const clearEventListener: (listEvent: any, target: HTMLElement) => void;
export declare function calculatorRealSize(realChild?: HTMLElement[]): number;
export declare const findTargetTable: (root: MutableRefObject<HTMLElement>, dimension: IFSize, injectTable?: boolean) => {
    table: HTMLTableElement;
    el: HTMLTableSectionElement;
} | {
    el: HTMLElement;
    table?: undefined;
};
export declare const find1stLevel: (el: any, querySelector: string, list?: any[]) => any;
export declare const psHtmlListSize: (children: HTMLCollection, psEl: Element[]) => any[];
