
function useRule({ruleId = '', ruleName = '', ruleStyle = ''}) {
  const state = {
    ruleId,
    ruleName,
    ruleStyle,
  }

  function getRuleId() {
    return state.ruleId;
  }

  function getRuleName() {
    return state.ruleName;
  }

  function getRuleStyle() {
    return state.ruleStyle;
  }

  function isFlowType() {
    return state.ruleStyle === 'FLOW';
  }

  function getRuleBaseData() {
    return {
      ...state
    }
  }

  return {
    getRuleId,
    getRuleName,
    getRuleStyle,
    getRuleBaseData,
    isFlowType
  }
}

function useRuleDetail(useRule, {metaList = []}) {
  const state = {
    metaList,
  }

  if (useRule.isFlowType()) {
    // 추가 처리 블라블라
  }

  function getMetaList() {
    return state.metaList;
  }

  function callSave() {
    // api call
    return {
      ...useRule.getRuleBaseData(),
      metaList: [...getMetaList()]
    }
  }

  return {
    getMetaList,
    callSave
  };
}

// 1. 룰 기본정보 세팅
const ruleBase = useRule({ruleId: 'id1', ruleName: '룰이름', ruleStyle: 'FlOW'});

// 2. 기본정보 세팅 후 다른 시점에 디테일 정보 세팅
const ruleDetail = useRuleDetail(ruleBase, {metaList: [{key:1, data: 'aaaaa'}]});
console.log(ruleDetail.callSave());