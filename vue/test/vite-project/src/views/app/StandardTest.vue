<script setup>

import {computed, onBeforeMount, onMounted, onUnmounted, onUpdated, reactive, ref, watch, watchEffect} from "vue";
import {useGrid} from "../../composables/useGrid.js";
import ChildTest from "./ChildTest.vue";
import {usePopup} from "../../composables/usePopup.js";

// define 영역
defineExpose({fetchUser});
const emit = defineEmits(['emitNames']);
const props = defineProps({
  message: {
    type: String,
    default: '',
  }
});

// 상태값 영역 : 해당 컴포넌트에서 사용할 반응형
const _state = reactive({
  title: '',
  names: [],
});

const _ref = {
  divRef: ref(null),
  child: ref(null),
};

const _computed = {
  title: computed(() => {
    return `${_state.title} computed`;
  }),
  names: computed(() => {
    return `${_state.names.join(',')} computed`;
  }),
  notice: computed(() => {
    console.log("computed notice 캐싱");
    return _state.names.length > 3 ? '너무많아!' : '적당함';
  }),
  notice2() {
    console.log("computed notice2 함수실행 ");
    return _state.names.length > 3 ? '너무많아!' : '적당함';
  },
  sortedNames: computed(() => {
    console.log("computed sortedNames ");
    return [..._state.names].sort();
  })
}

// const notice2 = computed(() => {
//   console.log("computed notice notice 11 ");
//   return _state.names.length > 3 ? '너무많아!' : '적당함';
// });

// 일반값 영역 : 일반변수, 컴포저블 객체 등
const GRID_HEADER = {
  title: 'title',
  names: ['sso', 'sso1',],
}
const grid = useGrid(GRID_HEADER);
const popup = usePopup();

// 행위/함수 영역 : 해당 컴포넌트에서 사용되는 비즈니스 로직들, 처리 로직들
function onClickChangeTitle() {
  _state.title = Math.random().toFixed(2);
  _state.names.push(_state.title);
  emit('emitNames', JSON.stringify(_state.names));
}

function onClickConfirm() {
  console.log("computed 1: ", _computed.notice.value);
  console.log("computed 2: ", _computed.notice2());
}

function onClickAlertRef() {
  console.log("_ref.divRef ", _ref.divRef);
  console.log("_ref.child ", _ref.child);
}

async function fetchUser() {
  await Promise.resolve().then(() => {
    console.log("search~");
  })
}

// 반응형 시스템 : 처리 훅 (computed, watch, watchEffect, ...)
watch(
    () => _state.title,
    (value, oldValue) => {
      console.log(" watch : _state.title : ", value, oldValue);
    }
);

watchEffect(onCleanup => {
  console.log(" watchEffect : _state.names : ", _state.names.length);
  onCleanup(() => {
    console.log(" watchEffect onCleanup : _state.names : ", _state.names);
    if (_state.names.length > 5) {
      _state.names = [];
    }
  });
});

// 반응형 시스템 : 라이프사이클 훅 (onMounted, onBeforeMount, onUnmounted, onActivated, onDeactivated,...)
onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(async () => {
  await fetchUser();
});
onUnmounted(() => {
  console.log("onUnmounted");
});

</script>

<template>
  <ChildTest :ref="_ref.child"/>
  <div :ref="_ref.divRef">
    _ref 확인
    {{_ref.divRef.value}}
  </div>

  <div>
    <p>{{props.message}}</p>
  </div>

  <div>
    타이틀!
    {{_state.title}}
  </div>
  <div>
    타이틀들!
    {{_state.names}}
  </div>
  <div>
    computed!!
    {{_computed.title}} <br/>
    {{_computed.names}}
  </div>

  <div>
    <p>
      computed 예 : 조건부 렌더링
      <p>
        {{_computed.notice}}
      </p>
      <p>
        {{_computed.notice2()}}
      </p>
    </p>
    <p>
      computed 예 : 정렬
      {{_computed.sortedNames}}
    </p>
<!--    <p>-->
<!--      computed 예 : notice {{notice2}}-->
<!--    </p>-->
  </div>

  <p v-for="n in 10" :key="n">{{ _computed.notice }}</p> <!-- computed -->
  <p v-for="n in 10" :key="n">{{ _computed.notice2() }}</p> <!-- 함수 -->

  <button @click="onClickChangeTitle">이름바꾸기</button>
  <button @click="onClickConfirm">computed확인</button>
  <button @click="onClickAlertRef">ref확인</button>
  <button @click="fetchUser">유저조회</button>

</template>

<style scoped>

</style>