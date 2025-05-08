// decorators/Before.ts
import {createPopupHookManager} from "@/createHookManager";

export function Before(hookName: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            createPopupHookManager.trigger(hookName, {method: propertyKey});
            return originalMethod.apply(this, args);
        };
    };
}
