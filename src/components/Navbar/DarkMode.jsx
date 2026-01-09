import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkMode = () => {
  const [dark, setDark] = useState(
    localStorage.theme === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:scale-110 transition"
    >
      {dark ? <Sun /> : <Moon />}
    </button>
  );
};

export default DarkMode;
