// popupHook.ts
export const HOOK_NAME = {
    BEFORE_OPEN: 'beforeOpen',
    AFTER_OPEN: 'afterOpen',
    BEFORE_CLOSE: 'beforeClose',
    AFTER_CLOSE: 'afterClose',
};

export function usePopupHook() {
    const listeners = new Map<string, Function[]>();

    function on(event: string, fn: Function) {
        if (!listeners.has(event)) {
            listeners.set(event, []);
        }
        listeners.get(event)!.push(fn);
    }

    function trigger(event: string, payload: any) {
        listeners.get(event)?.forEach(fn => fn(payload));
    }

    return {
        on,
        trigger,
    };
}


