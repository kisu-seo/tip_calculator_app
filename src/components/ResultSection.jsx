export default function ResultSection({
  tipPerPerson,
  totalPerPerson,
  isResetActive,
  onReset,
}) {
  return (
    <section
      className="bg-green-900 rounded-2xl p-8 flex flex-col gap-8"
      aria-label="계산 결과"
    >
      {/* Tip Amount */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-preset-6 text-white">Tip Amount</p>
          <p className="text-preset-6 text-grey-500">/ person</p>
        </div>
        <p
          className="text-preset-1 text-green-400"
          aria-live="polite"
          aria-label={`1인당 팁 ${tipPerPerson.toFixed(2)} 달러`}
        >
          ${tipPerPerson.toFixed(2)}
        </p>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center">
        <div>
          <p className="text-preset-6 text-white">Total</p>
          <p className="text-preset-6 text-grey-500">/ person</p>
        </div>
        <p
          className="text-preset-1 text-green-400"
          aria-live="polite"
          aria-label={`1인당 총액 ${totalPerPerson.toFixed(2)} 달러`}
        >
          ${totalPerPerson.toFixed(2)}
        </p>
      </div>

      {/* RESET */}
      <button
        type="button"
        onClick={onReset}
        disabled={!isResetActive}
        className={`
          w-full py-3 mt-auto rounded-lg text-preset-5 uppercase tracking-widest
          transition-colors duration-100
          ${isResetActive
            ? 'bg-green-400 text-green-900 hover:bg-green-200 cursor-pointer'
            : 'bg-green-800 text-green-900 opacity-40 cursor-not-allowed'
          }
        `}
      >
        RESET
      </button>
    </section>
  );
}
