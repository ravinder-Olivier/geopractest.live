import { useContext, useEffect, useState } from "react";
import Auxilliary from "./components/Auxilliary";
import Game from "./components/Game";
import Header from "./components/Header";
import Help from "./components/Help";
import Info from "./components/Info";
import Settings from "./components/Settings";
import Statistics from "./components/Statistics";
import { ThemeContext } from "./context/ThemeContext";
import Fade from "./transitions/Fade";
import { useDispatch } from 'react-redux'
import { addAnswerCountry, addAnswerName } from './redux/actions/globeAction'

import { Country } from "./lib/country";
import { today } from "./util/dates";

const countryData: Country[] = require("./data/country_data.json").features;

countryData.sort((a, b) => {
  return a.properties.FLAG[1].localeCompare(b.properties.FLAG[1]);
});

function App() {
  // State
  const [screen, setScreen] = useState("Help");
  const [reSpin, setReSpin] = useState(false);
  const [showStats, setShowStats] = useState(false);

  const [newGame, setNewGame] = useState(false)
  const themeContext = useContext(ThemeContext);
  const dispatch = useDispatch()

  const generateKeyNew = (list: any[], day: string) => {
    const [year, month, date] = day.split("-");
    const dayCode = Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(date));
    const shuffleKey = Math.floor(Math.random() * 197) + 1
    const SHUFFLE_KEY = shuffleKey.toString() || "1";
    const key = Math.floor(dayCode / parseInt(SHUFFLE_KEY + "5")) % list.length;
    return key;
  }

  // Re-render globe
  useEffect(() => {
    if (screen === "Game") setReSpin(true);
  }, [screen]);

  useEffect(() => {
    function generateNew() {
      const key = generateKeyNew(countryData, today)
      const answerCountry = countryData[key]
      dispatch(addAnswerCountry(countryData[key]))
      dispatch(addAnswerName(answerCountry.properties.NAME))
    }
    generateNew()

  }, [newGame])

  useEffect(() => {
    if (reSpin) setTimeout(() => setReSpin(false), 1);
  }, [reSpin]);

  const pickScreen = () => {
    if (screen === "Help") {
      return (
        <Auxilliary screen={screen} setScreen={setScreen}>

          <Help />
        </Auxilliary>
      );
    } else if (screen === "Info") {
      return (
        <Auxilliary screen={screen} setScreen={setScreen}>
          <Info setScreen={setScreen} />
        </Auxilliary>
      );
    } else if (screen === "Settings") {
      return (
        <Auxilliary screen={screen} setScreen={setScreen}>
          <Settings />
        </Auxilliary>
      );
    }
    else if (screen === "Reset") {
      return (
        <Auxilliary screen={screen} setScreen={setScreen} />

      );
    } else {
      return <Game reSpin={reSpin} setShowStats={setShowStats} setScreen={setScreen} setNewGame={setNewGame} newGame={newGame} />;
    }
  };

  const dark = themeContext.theme.nightMode ? "dark" : "";

  return (
    <div
      className={`max-w-xs sm:max-w-md md:max-w-2xl mx-auto 
      z-20 absolute top-0 bottom-0 left-0 right-0 block ${dark}`}
    >
      <Header
        setScreen={setScreen}
        setReSpin={setReSpin}
        setShowStats={setShowStats}
      />
      <Fade
        show={showStats}
        background="border-4 border-sky-300 dark:border-slate-700 bg-sky-100 
        dark:bg-slate-900 drop-shadow-xl 
      absolute z-10 top-32 w-full sm:w-fit inset-x-0 mx-auto py-6 px-6 rounded-md 
      space-y-2"
      >
        <Statistics setShowStats={setShowStats} />
      </Fade>
      {pickScreen()}
    </div>
  );
}

export default App;

