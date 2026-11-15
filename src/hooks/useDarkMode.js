import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");

    const dark = document.documentElement.classList.contains("dark");

    setIsDark(dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  };

  return [isDark, toggleDarkMode];
}

export default useDarkMode;
