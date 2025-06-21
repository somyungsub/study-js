import {inject, provide} from "vue";

type ProvideMap<T> = { [key: symbol]: T };

export const CONTEXT_KEYS = {
  SAMPLE: {
    USER_REFACTORING: Symbol('UserPageRefactoring.vue : 유저리팩토링샘플'),
  },
};

export const ContextContainer = Object.freeze({
  provide<T>(provideData: ProvideMap<T>) {
    const symbols = Object.getOwnPropertySymbols(provideData);
    if (symbols?.length === 0) {
      return;
    }

    for (const symbolsKey of symbols) {
      provide(symbolsKey, provideData[symbolsKey]);
    }
  },

  inject<T>(provideKey: symbol): T | undefined {
    return inject<T>(provideKey);
  }
});
