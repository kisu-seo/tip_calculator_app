/**
 * @component InputField
 * @description 금액(Bill) 및 인원수(Number of People) 등 숫자 기반 데이터를 입력받는 재사용 가능한 범용 UI 컴포넌트입니다.
 * 중복되는 HTML 구조와 스타일링 코드를 하나의 단일 진실 공급원(SSOT)으로 통합하여 UI 일관성과 유지보수성을 확보합니다.
 *
 * @param {string} id - HTML `<label>`과 `<input>`을 연결(접근성)하기 위한 고유 식별자입니다.
 * @param {string} label - 사용자에게 입력창의 목적을 안내하는 텍스트입니다.
 * @param {string|number} value - 입력창에 바인딩되는 제어 컴포넌트(Controlled Component)의 현재 값입니다.
 * @param {function} onChange - 입력값이 변경될 때 호출되어 상위 상태(State)를 업데이트하는 핸들러입니다.
 * @param {string} icon - 입력창 내부에 시각적 컨텍스트를 제공하기 위해 렌더링될 아이콘의 경로입니다.
 * @param {string} errorText - 유효성 검사 실패 시 노출될 에러 메시지 텍스트입니다.
 * @param {boolean} hasError - 컴포넌트가 현재 에러 상태(예: 인원수 0 입력)인지 판단하는 플래그입니다.
 */
export default function InputField({
  id,
  label,
  value,
  onChange,
  icon,
  errorText,
  hasError,
}) {
  return (
  return (
    <div className="flex flex-col gap-2">
      {/* 라벨 및 에러 메시지 영역: 에러 발생 시 조건부 렌더링을 통해 시각적 피드백 제공 */}
      <div className="flex justify-between items-center">
        <label htmlFor={id} className="text-preset-5 text-grey-500">
          {label}
        </label>
        {hasError && (
          <span className="text-preset-5 text-orange-400" role="alert">
            {errorText}
          </span>
        )}
      </div>
      {/* 입력 영역: 아이콘과 입력 필드를 겹쳐서(absolute/relative) 디자인 시안의 UI를 구현합니다. */}
      <div className="relative">
        <img
          src={icon}
          alt=""
          aria-hidden="true" // 시각적 장식이므로 스크린 리더(접근성)에서 무시되도록 처리합니다.
          className={`absolute left-4 top-1/2 -translate-y-1/2 ${id === 'bill' ? 'w-[11px]' : 'w-[13px]'}`}
        />
        {/*
          에러 상태(hasError)에 따라 Tailwind CSS 클래스를 동적으로 변경하여,
          평상시에는 청록색 포커스 테두리를, 에러 시에는 붉은색 테두리를 표시하여 사용자 인지를 돕습니다.
        */}
        <input
          id={id}
          type="number"
          min="0"
          placeholder="0"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full bg-grey-50 text-right text-preset-3 text-green-900
            pl-10 pr-4 py-2 rounded-[5px]
            border-2
            focus:outline-none
            placeholder:text-grey-300
            caret-green-400
            ${hasError
              ? 'border-orange-400 focus:border-orange-400'
              : 'border-transparent focus:border-green-400'
            }
          `}
        />
      </div>
    </div>
  );
}
