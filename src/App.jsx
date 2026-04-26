import { useTipCalculator } from './hooks/useTipCalculator';
import InputSection from './components/InputSection';
import ResultSection from './components/ResultSection';
import logoSvg from '../images/logo.svg';

/**
 * @component App
 * @description 어플리케이션의 최상위 루트(Root) 컴포넌트입니다.
 * 비즈니스 로직(useTipCalculator)과 뷰(View)를 결합하며, 전체적인 화면 레이아웃과 반응형(Responsive) 구조를 담당합니다.
 */
export default function App() {
  // 상태 및 계산 로직을 커스텀 훅에서 가져와 컴포넌트를 가볍게 유지합니다.
  const { state, actions, results } = useTipCalculator();

  return (
    // 전체 화면 배경 및 폰트 설정, 로고와 메인 컨테이너를 수직 중앙 정렬합니다.
    <div className="min-h-screen bg-[#C5E4E7] flex flex-col items-center md:justify-center font-space-mono">
      <img
        src={logoSvg}
        alt="Splitter"
        className="mt-[50px] md:mt-0 mb-10 md:mb-10 lg:mb-20 w-[87px]"
      />
      {/* 
        메인 컨테이너:
        모바일에서는 단일 열(flex-col)로 배치하고, 데스크탑(lg:)에서는 2열 그리드(grid-cols-2)로 배치하여 레이아웃을 전환합니다.
      */}
      <main className="w-full max-w-[375px] md:max-w-[608px] lg:max-w-[920px] bg-white rounded-t-[24px] md:rounded-[25px] py-[34px] md:p-[54px_75.5px] lg:p-[32px_40px] flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-8 lg:gap-12">
        {/* 입력 및 결과 섹션에 필요한 데이터와 핸들러만 Prop으로 내려줍니다(Props Drilling 최소화). */}
        <InputSection state={state} actions={actions} />
        <ResultSection results={results} actions={actions} />
      </main>
    </div>
  );
}
