// 문제 1: 언어 변경 시스템
// 한국어/영어 언어 변경 시스템을 만드세요. 여러 컴포넌트에서 현재 언어에 따라 다른 텍스트를 표시해야 합니다.
// 요구사항:
// LanguageContext 생성
// LanguageProvider에서 현재 언어와 변경 함수 제공
// Header, Content, Footer 컴포넌트에서 각각 다른 텍스트 표시
// 언어 변경 버튼 구현

import { createContext, useState, ReactNode } from "react";

type Language = "ko" | "en";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export default function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("ko");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
