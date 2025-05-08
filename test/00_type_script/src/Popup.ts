// Popup.ts
import { HookedMethod } from './HookedMethod';
import { HOOK_NAME } from './usePopupHook';

export class Popup {
    isShow = false;

    @HookedMethod({ before: HOOK_NAME.BEFORE_OPEN, after: HOOK_NAME.AFTER_OPEN })
    async openPopup() {
        console.log('openPopup logic 실행');
        this.isShow = true;
    }

    @HookedMethod({ before: HOOK_NAME.BEFORE_OPEN})
    async openPopupOnlyBefore() {
        console.log('openPopup logic 실행');
        this.isShow = true;
    }

    @HookedMethod({ before: HOOK_NAME.BEFORE_CLOSE, after: HOOK_NAME.AFTER_CLOSE })
    async closePopup() {
        console.log('closePopup logic 실행');
        this.isShow = false;
    }
}
