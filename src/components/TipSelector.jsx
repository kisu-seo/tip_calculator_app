// 하드코딩된 값(Magic Number)을 피하기 위해 제공될 팁 비율들을 배열 상수로 분리합니다.
// 이렇게 하면 추후 새로운 팁 비율(예: 20%)을 추가할 때 배열만 수정하면 자동으로 UI에 반영됩니다.
const TIP_PRESETS = [5, 10, 15, 25, 50];

/**
 * @component TipSelector
 * @description 고정된 퍼센트 버튼들과 커스텀 입력창을 렌더링하는 컴포넌트입니다.
 * 팁 비율 선택 로직을 이곳에 응집시켜(Cohesion), 상위 컴포넌트(InputSection)의 복잡도를 낮춥니다.
 *
 * @param {number|null} tipPercentage - 현재 선택된 고정 팁 퍼센트 값입니다.
 * @param {function} setTipPercentage - 고정 팁 퍼센트를 업데이트하는 함수입니다.
 * @param {string|number} customTip - 사용자가 직접 입력한 커스텀 팁 값입니다.
 * @param {function} setCustomTip - 커스텀 팁 값을 업데이트하는 함수입니다.
 */

export default function TipSelector({
  tipPercentage,
  setTipPercentage,
  customTip,
  setCustomTip,
}) {
  return (
    // <fieldset>과 <legend>를 사용하여 시각적/의미론적(Semantic)으로 폼 요소들을 그룹화합니다. (접근성 고려)
    <fieldset>
      <legend className="text-preset-5 text-grey-500 mb-2">Select Tip %</legend>
      {/* 모바일에서는 2열(grid-cols-2), 태블릿 이상에서는 3열(md:grid-cols-3)로 반응형 배치합니다. */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {/* 배열 순회를 통해 팁 버튼을 동적으로 생성하여 코드 중복을 제거합니다. */}
        {TIP_PRESETS.map((tip) => (
          <button
            key={tip}
            type="button"
            onClick={() => {
              // 버튼 클릭 시 선택된 비율을 활성화하고, 기존에 입력된 커스텀 값은 초기화하여 
              // '고정 팁'과 '커스텀 팁' 중 하나만 선택되는 배타적 상태(Mutually Exclusive State)를 유지합니다.
              setTipPercentage(tip);
              setCustomTip('');
            }}
            className={`
              rounded-[5px] w-full h-[48px] text-preset-3 transition-colors duration-100 cursor-pointer
              ${
                // 현재 선택된 팁과 일치하면 하이라이트 스타일을 적용하여 활성화 상태를 시각적으로 피드백합니다.
                tipPercentage === tip
                  ? 'bg-green-400 text-green-900'
                  : 'bg-green-900 text-white hover:bg-green-200 hover:text-green-900'
              }
            `}
          >
            {tip}%
          </button>
        ))}

        {/* 
          Custom 입력창: 
          고정된 프리셋 외의 값을 입력받는 필드입니다. <input> 태그를 사용하여 직접 타이핑할 수 있게 합니다.
        */}
        <input
          type="number"
          min="0"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => {
            // 커스텀 값을 입력하면, 활성화되어 있던 고정 팁 버튼의 선택 상태를 해제(null)합니다.
            setCustomTip(e.target.value);
            setTipPercentage(null);
          }}
          aria-label="커스텀 팁 퍼센트 입력"
          className="
            bg-grey-50 text-center text-preset-3 text-green-900
            rounded-[5px] w-full h-[48px] px-4 lg:px-0
            placeholder:text-grey-500 placeholder:text-center
            border-2 border-transparent
            focus:outline-none focus:border-green-400
            caret-green-400
          "
        />
      </div>
    </fieldset>
  );
}
