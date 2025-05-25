import {ref} from "vue";

export function usePopup(
  {
    title = '',
    width= 50,
    height= 50
  }={}
) {
  const _state = {
    isShow: ref(false),
    title: ref(title),
    width: ref(width),
    height: ref(height),
  }

  function open() {
    _state.isShow.value = true
  }
  function close() {
    _state.isShow.value = false
  }

  return {
    isShow: _state.isShow,
    title: _state.title.value,
    width: _state.width.value + '%',
    height: _state.height.value + '%',
    open,
    close
  }
}