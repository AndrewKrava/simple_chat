// Types
export interface VirtualKeyboardEvent extends Event {
    detail?: {
        key: string
        keyCode: string
        eventName?: string
    }
}

export type CallbackType = (event: VirtualKeyboardEvent) => void

export type KeyboardData  = {
    key: string
    keyCode: string
    eventName?: string
}

type HtmlRef = React.MutableRefObject<HTMLDivElement | null>;
type EventType = 'keyboardevent' | 'inputevent'

export const keyboardUtil = () => {
    const subscribe = (eventType: EventType, htmlRef: HtmlRef, callback: CallbackType) => {
        htmlRef.current?.addEventListener(eventType, callback);
    };

    const removeSubscribe = (eventType: EventType, htmlRef: HtmlRef, callback: CallbackType) => {
        return htmlRef.current?.removeEventListener(eventType, callback);
    };

    const dispatch = (eventType: EventType, htmlRef: HtmlRef, data: KeyboardData) => {
        htmlRef.current?.dispatchEvent(new CustomEvent(eventType, {
            detail: data,
        }));
    };

    return {
        subscribe,
        dispatch,
        removeSubscribe,
    };
};
