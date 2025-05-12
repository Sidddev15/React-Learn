import React, {
	useReducer,
	useState,
	useRef,
	useContext,
	useEffect,
} from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ThemeContext, ThemeProvider } from "./assets/context/ThemeContext";
import "./App.css";

const MoodReducer = (state, action) => {
	switch (action.type) {
		case "ADD_MOOD":
			return [...state, action.payload];
		case "CLEAR_MOOD":
			return [];
		default:
			return state;
	}
};

const MoodTracker = () => {
	const [mood, setMood] = useState("");
	const [moods, dispatch] = useReducer(MoodReducer, []);
	const [storedMoods, setStoredMoods] = useLocalStorage("moodHistory", []);
	const inputRef = useRef();
	const [dark, toggleTheme] = useContext(ThemeContext);

	// adding focus on the input field as soon as the pages loads : Run this effect only once, when the component is first mounted.
	useEffect(() => {
		inputRef.current.focus();
	}, []);
	// runs whenever the moods or setStoredMoods changes and updates teh change in states
	useEffect(() => {
		setStoredMoods(moods);
	}, [moods, setStoredMoods]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(mood.trim()) {
      dispatch({ type: 'ADD_MOOD', payload: mood });
      setMood('');
    }
  };

  return (
    <div>
      <h1>Mood Tracker</h1>
      <button onClick={toggleTheme}>
        Toggle To {dark ? 'Light' : 'Dark'} Mode
      </button>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} value={mood} onChange={(e) => setMood(e.target.value)} />
      </form>
    </div>
  );
};

function App() {
	return <></>;
}

export default App;
