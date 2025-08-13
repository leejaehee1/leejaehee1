import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { LanguageContext } from "../contexts/LanguageContext";

export default function Content() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeContext not found");

  const { theme } = context;

  const languageContext = useContext(LanguageContext);
  if (!languageContext) throw new Error("LanguageContext not found");

  const { language } = languageContext;

  return (
    <main
      style={{
        backgroundColor: theme === "light" ? "#f5f5f5" : "#222",
        color: theme === "light" ? "#333" : "#fff",
        padding: "1rem",
      }}
    >
      <p>현재 테마: {theme}</p>
      <p>현재 언어: {language}</p>
    </main>
  );
}
