import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


export default function Footer() {
  const iconWidth = 14;
  const { nightMode } = useContext(ThemeContext).theme;

  return (
    <footer className="pt-8 pb-4 text-xs flex items-end justify-between w-full">

    </footer>
  );
}
