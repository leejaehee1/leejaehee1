import ThemeProvider from "../contexts/ThemeContext";
import LanguageProvider from "../contexts/LanguageContext";
import Header from "../components/Header";
import Content from "../components/Content";

export default function ThemeTest() {
  return (
    <div>
      <h2>테마 테스트</h2>
      <LanguageProvider>
        <ThemeProvider>
          <Header />
          <Content />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}
