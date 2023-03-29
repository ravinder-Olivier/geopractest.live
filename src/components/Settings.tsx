import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import LanguagePicker from "./LanguagePicker";
import { FormattedMessage } from "react-intl";

function Toggle({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div className="relative cursor-pointer ">
        <div className="block bg-gray-100 w-14 h-8 rounded-full border-2 border-gray-500"></div>
        <div
          className="dot absolute left-1 top-1 
        bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        w-6 h-6 rounded-full transition"
        ></div>
      </div>
    );
  } else {
    return (
      <div className="relative cursor-pointer ">
        <div className="block bg-gray-100  w-14 h-8 rounded-full border-2 border-gray-500"></div>
        <div
          className="dot absolute left-1 top-1 
        bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
        w-6 h-6 rounded-full transition translate-x-full"
        ></div>
      </div>
    );
  }
}

export default function Settings() {
  const themeContext = useContext(ThemeContext);
  const [toggleTheme, setToggleTheme] = useState(!themeContext.theme.nightMode);
  const [toggleHighContrast, setToggleHighContrast] = useState(
    !themeContext.theme.highContrast
  );

  const [toggleScope, setToggleScope] = useState(true);

  const { setTheme } = themeContext;

  useEffect(() => {
    if (setTheme) {
      setTheme({ nightMode: true, highContrast: false });
    }
  }, [setTheme]);





  return (
    <div className="flex-col space-y-8 mx-auto my-10 w-fit">
      <LanguagePicker />

      {!toggleScope && (
        <p className="text-red-700">
          <FormattedMessage id="Settings8" />
        </p>
      )}
    </div>
  );
}
