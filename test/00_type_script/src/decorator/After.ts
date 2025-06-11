// decorators/After.ts
import {createPopupHookManager} from "@/createHookManager";

export function After(hookName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            createPopupHookManager.trigger(hookName, {method: propertyKey});
            return result;
        };
    };
}
