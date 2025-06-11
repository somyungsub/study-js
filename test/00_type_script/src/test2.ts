import {PopupAop} from "./PopupAop";
import {HOOK_NAME} from "./usePopupHook";
import {createPopupHookManager} from "@/createHookManager";

const popup = new PopupAop();

// Hook 등록
createPopupHookManager.on(HOOK_NAME.BEFORE_OPEN, () => console.log('Before opening popup!'));
createPopupHookManager.on(HOOK_NAME.AFTER_OPEN, () => console.log('After opening popup!'));
createPopupHookManager.on(HOOK_NAME.BEFORE_CLOSE, () => console.log('Before closing popup!'));
createPopupHookManager.on(HOOK_NAME.AFTER_CLOSE, () => console.log('After closing popup!'));

// 팝업 열기
console.log("===========");
popup.openPopup();

// 팝업 열기
console.log("===========");
popup.openPopupAround();

// 팝업 닫기
console.log("===========");
popup.closePopup();

// 팝업 닫기
console.log("===========");
popup.closePopupBoth();

