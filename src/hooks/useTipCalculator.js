import { useState } from 'react';

/**
 * @hook useTipCalculator
 * @description 팁 계산기의 핵심 비즈니스 로직(Business Logic)을 단일 진실 공급원(Single Source of Truth)으로 관리하는 커스텀 훅입니다.
 * UI 컴포넌트와 상태(State) 및 계산(Calculation) 로직을 분리하여 유지보수성을 극대화합니다.
 *
 * @returns {Object} state(입력 상태), actions(상태 변경 함수), results(계산된 결과값) 객체를 반환합니다.
 */
export function useTipCalculator() {
  // 사용자 입력 상태(State) 관리
  // 입력 필드의 특성상 초기값은 빈 문자열('')로 설정하여 placeholder가 정상적으로 노출되도록 유도합니다.
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');

  // 데이터 형변환(Type Conversion) 및 파생 데이터(Derived State) 계산
  // 문자열 형태의 입력값을 수학 연산이 가능한 숫자형으로 변환하며, 빈 값일 경우 0을 기본값으로 사용(Fallback)하여 NaN 에러를 방지합니다.
  const billNum = parseFloat(bill) || 0;
  const peopleNum = parseInt(people, 10) || 0;
  
  // 프리셋 팁(버튼)과 커스텀 팁 중 사용자가 선택/입력한 유효한 팁 비율을 결정합니다.
  const effectiveTip = tipPercentage !== null ? tipPercentage : parseFloat(customTip) || 0;

  // 인원수가 0보다 클 때만 계산을 수행하여 0으로 나누는 오류(Divide by zero)를 방지합니다.
  const tipPerPerson = peopleNum > 0 ? (billNum * effectiveTip) / 100 / peopleNum : 0;
  const totalPerPerson = peopleNum > 0 ? (billNum * (1 + effectiveTip / 100)) / peopleNum : 0;

  // 리셋 버튼 활성화 여부: 사용자가 입력한 데이터가 하나라도 존재하면 활성화(true)됩니다.
  const isResetActive = bill !== '' || tipPercentage !== null || customTip !== '' || people !== '';

  /**
   * @function handleReset
   * @description 모든 상태(State)를 초기화하여 어플리케이션을 최초 진입 상태로 되돌립니다.
   */
  const handleReset = () => {
    setBill('');
    setTipPercentage(null);
    setCustomTip('');
    setPeople('');
  };

  return {
    state: {
      bill,
      tipPercentage,
      customTip,
      people,
    },
    actions: {
      setBill,
      setTipPercentage,
      setCustomTip,
      setPeople,
      handleReset,
    },
    results: {
      tipPerPerson,
      totalPerPerson,
      isResetActive,
    },
  };
}
