import {createPopupHookManager} from "@/createHookManager";

export function Around(hooks: { before?: string; after?: string }) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            if (hooks.before) {
                createPopupHookManager.trigger(hooks.before, { method: propertyKey });
            }

            const result = originalMethod.apply(this, args);

            if (hooks.after) {
                createPopupHookManager.trigger(hooks.after, { method: propertyKey });
            }

            return result;
        };
    };
}