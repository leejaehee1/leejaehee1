import ThemeProvider from "../contexts/ThemeContext";
import Header from "../components/Header";
import Content from "../components/Content";

export default function ThemeTest() {
  return (
    <div>
      <h2>테마 테스트</h2>
      <ThemeProvider>
        <Header />
        <Content />
      </ThemeProvider>
    </div>
  );
}
