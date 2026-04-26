import { useState, useEffect } from 'react';
import InputField from './InputField';
import TipSelector from './TipSelector';
import dollarIcon from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';

/**
 * @component InputSection
 * @description 사용자의 모든 입력(금액, 팁 비율, 인원수)을 처리하는 좌측(모바일은 상단) 영역 컨테이너입니다.
 * 재사용 가능한 하위 컴포넌트(InputField, TipSelector)들을 조합하여 선언적(Declarative)으로 UI를 구성합니다.
 *
 * @param {Object} props.state - useTipCalculator 훅에서 전달받은 현재 입력 상태 객체
 * @param {Object} props.actions - 상태를 업데이트하는 핸들러 함수 객체
 */
export default function InputSection({ state, actions }) {
  const { bill, tipPercentage, customTip, people } = state;
  const { setBill, setTipPercentage, setCustomTip, setPeople } = actions;

  const [peopleTouched, setPeopleTouched] = useState(false);

  // 모든 상태가 초기값으로 돌아오면(RESET 완료) touched 상태도 함께 초기화합니다.
  useEffect(() => {
    if (bill === '' && tipPercentage === null && customTip === '' && people === '') {
      setPeopleTouched(false);
    }
  }, [bill, tipPercentage, customTip, people]);

  const showPeopleError = peopleTouched && (people === '0' || people === '');

  return (
    // <section> 태그와 aria-label을 사용하여 스크린 리더 환경에서도 영역을 명확히 구분할 수 있도록 합니다.
    <section className="flex flex-col gap-8 lg:gap-10 px-8 md:px-0" aria-label="입력 폼">
      <InputField
        id="bill"
        label="Bill"
        value={bill}
        onChange={setBill}
        icon={dollarIcon}
        hasError={false}
      />

      <TipSelector
        tipPercentage={tipPercentage}
        setTipPercentage={setTipPercentage}
        customTip={customTip}
        setCustomTip={setCustomTip}
      />

      <InputField
        id="people"
        label="Number of People"
        value={people}
        onChange={(val) => {
          setPeople(val);
          setPeopleTouched(true);
        }}
        onBlur={() => setPeopleTouched(true)}
        icon={personIcon}
        errorText="Can't be zero"
        hasError={showPeopleError}
      />
    </section>
  );
}
