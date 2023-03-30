import { useState } from "react";
import "./App.css";
import Calendar from "./components/calendar";

const App = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="date" value={date.toISOString().slice(0, 10)} onChange={handleDateChange} />

        <Calendar date={new Date(date)} />
      </header>
    </div>
  );
};

export default App;
