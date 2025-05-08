// decorators/HookedMethod.ts
import {createPopupHookManager} from "@/createHookManager";

export function HookedMethod(hooks: { before?: string; after?: string }) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = async function (...args: any[]) {
            if (hooks.before) {
                createPopupHookManager.trigger(hooks.before, { method: propertyKey });
            }

            const result = await originalMethod.apply(this, args);

            if (hooks.after) {
                createPopupHookManager.trigger(hooks.after, { method: propertyKey });
            }

            return result;
        };
    };
}
