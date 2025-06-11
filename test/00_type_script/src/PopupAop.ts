// Popup.ts
import {HOOK_NAME} from './usePopupHook';
import {Before} from "@/decorator/Before";
import {After} from "@/decorator/After";
import {Around} from "@/decorator/Around";

export class PopupAop {

    @Before(HOOK_NAME.BEFORE_OPEN)
    openPopup() {
        console.log('openPopup before 실행');
    }

    @Around({ before: HOOK_NAME.BEFORE_OPEN, after: HOOK_NAME.AFTER_OPEN})
    openPopupAround() {
        console.log('openPopup around 실행');
    }

    @After(HOOK_NAME.AFTER_CLOSE)
    closePopup() {
        console.log('closePopup logic 실행');
    }

    @After(HOOK_NAME.AFTER_CLOSE)
    @Before(HOOK_NAME.BEFORE_CLOSE)
    closePopupBoth() {
        console.log('closePopup logic 실행');
    }
}
