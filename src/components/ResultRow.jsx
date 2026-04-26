/**
 * @component ResultRow
 * @description 계산 결과(Tip Amount, Total)를 화면에 출력하는 단일 행(Row) 컴포넌트입니다.
 * 반복되는 UI 구조를 공통화하여 가독성을 높이고 스타일 변경 시 유지보수를 쉽게 합니다.
 *
 * @param {string} label - 출력할 결과 항목의 이름 (예: "Tip Amount", "Total")
 * @param {number} amount - 계산되어 출력될 최종 금액
 */
export default function ResultRow({ label, amount }) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-preset-5 text-white">{label}</p>
        <p className="text-preset-6 text-grey-500">/ person</p>
      </div>
      <p
        className="text-preset-2 md:text-preset-1 text-green-400"
        aria-live="polite" // 스크린 리더(접근성)가 값이 변경될 때마다 부드럽게 읽어주도록 설정합니다.
        aria-label={`1인당 ${label === 'Tip Amount' ? '팁' : '총액'} ${amount.toFixed(2)} 달러`}
      >
        {/* toFixed(2)를 사용하여 금액이 항상 소수점 둘째 자리까지 표시되도록 포맷팅합니다. */}
        ${amount.toFixed(2)}
      </p>
    </div>
  );
}
