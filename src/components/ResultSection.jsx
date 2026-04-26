import ResultRow from './ResultRow';

/**
 * @component ResultSection
 * @description 계산된 결과값(팁, 총액)을 보여주고, 앱을 초기화할 수 있는 우측(모바일은 하단) 영역 컨테이너입니다.
 *
 * @param {Object} props.results - useTipCalculator 훅에서 전달받은 계산 결과 객체 (tipPerPerson, totalPerPerson, isResetActive)
 * @param {Object} props.actions - 상태를 업데이트하는 핸들러 함수 객체 (handleReset)
 */
export default function ResultSection({ results, actions }) {
  const { tipPerPerson, totalPerPerson, isResetActive } = results;
  const { handleReset } = actions;

  return (
    <section
      className="bg-green-900 rounded-2xl mx-6 md:mx-0 px-[23px] py-[29.5px] md:p-[43px_47.5px] lg:p-[37.5px_40px] flex flex-col gap-8 md:gap-4 lg:justify-between lg:h-full"
      aria-label="계산 결과"
    >
      {/* 
        계산 결과 출력 영역: 
        ResultRow 컴포넌트를 재사용하여 중복 코드를 방지하고 일관된 디자인을 유지합니다. 
      */}
      <div className="flex flex-col gap-6 md:gap-2 lg:gap-[24px]">
        <ResultRow label="Tip Amount" amount={tipPerPerson} />
        <ResultRow label="Total" amount={totalPerPerson} />
      </div>

      {/* 
        초기화(RESET) 버튼: 
        mt-auto를 사용하여 컨테이너의 남은 공간을 밀어내어 버튼을 항상 최하단에 위치시킵니다 (데스크탑 제외).
      */}      <button
        type="button"
        onClick={handleReset}
        disabled={!isResetActive}
        className={`
          w-full py-3 mt-auto md:mt-0 rounded-[5px] text-preset-4 uppercase tracking-widest
          transition-colors duration-100
          ${
            // isResetActive 상태에 따라 버튼의 활성화/비활성화 디자인을 조건부 렌더링합니다.
            isResetActive
              ? 'bg-green-400 text-green-900 hover:bg-green-200 cursor-pointer'
              : 'bg-green-750 text-green-800 cursor-not-allowed'
          }
        `}
      >
        RESET
      </button>
    </section>
  );
}
