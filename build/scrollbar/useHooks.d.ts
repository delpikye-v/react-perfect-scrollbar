import { MutableRefObject } from 'react';
import PerfectScrollbar from 'perfect-scrollbar';
import { IFScrollFn } from './types';
export declare const useOnScreen: (ref: React.RefObject<HTMLElement>) => boolean;
export declare const useIsOnce: (ref: any) => boolean;
export declare const useSetupScrollbar: (target: HTMLElement, triggerScrollClick?: boolean, refScroll?: MutableRefObject<any>) => {
    psElement: Element[];
    scrollbar: MutableRefObject<PerfectScrollbar>;
    setPsEvent: import("react").Dispatch<import("react").SetStateAction<IFScrollFn>>;
    triggerScrollbar: () => void;
    handleFocus: () => void;
    handleClose: () => void;
};
