import { useState } from 'react';
import InputSection from './components/InputSection';
import ResultSection from './components/ResultSection';
import logoSvg from '../images/logo.svg';

export default function App() {
  const [bill, setBill] = useState('');
  const [tipPercentage, setTipPercentage] = useState(null);
  const [customTip, setCustomTip] = useState('');
  const [people, setPeople] = useState('');

  const billNum = parseFloat(bill) || 0;
  const peopleNum = parseInt(people, 10) || 0;
  const effectiveTip =
    tipPercentage !== null ? tipPercentage : parseFloat(customTip) || 0;

  const tipPerPerson =
    peopleNum > 0 ? (billNum * effectiveTip) / 100 / peopleNum : 0;
  const totalPerPerson =
    peopleNum > 0 ? (billNum * (1 + effectiveTip / 100)) / peopleNum : 0;

  const isResetActive =
    bill !== '' || tipPercentage !== null || customTip !== '' || people !== '';

  const handleReset = () => {
    setBill('');
    setTipPercentage(null);
    setCustomTip('');
    setPeople('');
  };

  return (
    <div className="min-h-screen bg-[#C5E4E7] flex flex-col items-center font-space-mono">
      <img
        src={logoSvg}
        alt="Splitter"
        className="mt-[50px] mb-10 w-[87px]"
      />
      <main className="w-full max-w-[375px] bg-white rounded-t-[24px] py-[34px] flex flex-col gap-8">
        <InputSection
          bill={bill}
          setBill={setBill}
          tipPercentage={tipPercentage}
          setTipPercentage={setTipPercentage}
          customTip={customTip}
          setCustomTip={setCustomTip}
          people={people}
          setPeople={setPeople}
        />
        <ResultSection
          tipPerPerson={tipPerPerson}
          totalPerPerson={totalPerPerson}
          isResetActive={isResetActive}
          onReset={handleReset}
        />
      </main>
    </div>
  );
}
