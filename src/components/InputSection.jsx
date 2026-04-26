import dollarIcon from '../../images/icon-dollar.svg';
import personIcon from '../../images/icon-person.svg';

const TIP_PRESETS = [5, 10, 15, 25, 50];

export default function InputSection({
  bill, setBill,
  tipPercentage, setTipPercentage,
  customTip, setCustomTip,
  people, setPeople,
}) {
  const showPeopleError =
    people === '0' || (bill !== '' && people === '');

  return (
    <section className="flex flex-col gap-8 px-8" aria-label="입력 폼">

      {/* Bill */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="bill"
          className="text-preset-5 text-grey-500"
        >
          Bill
        </label>
        <div className="relative">
          <img
            src={dollarIcon}
            alt=""
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[11px]"
          />
          <input
            id="bill"
            type="number"
            min="0"
            placeholder="0"
            value={bill}
            onChange={(e) => setBill(e.target.value)}
            className="
              w-full bg-grey-50 text-right text-preset-3 text-green-900
              pl-10 pr-4 py-2 rounded-[5px]
              border-2 border-transparent
              focus:outline-none focus:border-green-400
              placeholder:text-grey-300
              caret-green-400
            "
          />
        </div>
      </div>

      {/* Select Tip % */}
      <fieldset>
        <legend className="text-preset-5 text-grey-500 mb-2">
          Select Tip %
        </legend>
        <div className="grid grid-cols-2 gap-4 justify-items-center">
          {TIP_PRESETS.map((tip) => (
            <button
              key={tip}
              type="button"
              onClick={() => {
                setTipPercentage(tip);
                setCustomTip('');
              }}
              className={`
                rounded-[5px] w-[147px] h-[48px] text-preset-3 transition-colors duration-100
                ${tipPercentage === tip
                  ? 'bg-green-400 text-green-900'
                  : 'bg-green-900 text-white hover:bg-green-200 hover:text-green-900'
                }
              `}
            >
              {tip}%
            </button>
          ))}

          {/* Custom 입력 */}
          <input
            type="number"
            min="0"
            placeholder="Custom"
            value={customTip}
            onChange={(e) => {
              setCustomTip(e.target.value);
              setTipPercentage(null);
            }}
            aria-label="커스텀 팁 퍼센트 입력"
            className="
              bg-grey-50 text-center text-preset-3 text-green-900
              rounded-[5px] w-[147px] h-[48px] px-4
              placeholder:text-grey-500 placeholder:text-center
              border-2 border-transparent
              focus:outline-none focus:border-green-400
              caret-green-400
            "
          />
        </div>
      </fieldset>

      {/* Number of People */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label
            htmlFor="people"
            className="text-preset-5 text-grey-500"
          >
            Number of People
          </label>
          {showPeopleError && (
            <span className="text-preset-5 text-orange-400" role="alert">
              Can't be zero
            </span>
          )}
        </div>
        <div className="relative">
          <img
            src={personIcon}
            alt=""
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-[13px]"
          />
          <input
            id="people"
            type="number"
            min="0"
            placeholder="0"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className={`
              w-full bg-grey-50 text-right text-preset-3 text-green-900
              pl-10 pr-4 py-2 rounded-[5px]
              border-2
              focus:outline-none
              placeholder:text-grey-300
              caret-green-400
              ${showPeopleError
                ? 'border-orange-400 focus:border-orange-400'
                : 'border-transparent focus:border-green-400'
              }
            `}
          />
        </div>
      </div>

    </section>
  );
}
