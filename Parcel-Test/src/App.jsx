import { format } from "date-fns";
import "./index.css";
import React, {useState} from "react";

const App = () => {
  const [today, setToday] = useState(new Date());

  return (
    <>
    <input value={today.toDateString()} onChange={e => setToday(new Date(e.target.value))} type='date' placeholder="select a date"/>
    <h3>
        Selected date in various formats
    </h3>
    <pre>
      <span>dd-MM-yyyy = {format(today, "dd-MM-yyyy")}</span>
      <span>MM.dd.yyyy = {format(today, "MM.dd.yyyy")}</span>
      <span>yyyy/MM/dd = {format(today, "yyyy/MM/dd")}</span>
      <span>do MMMM, yyyy = {format(today, "do MMMM, yyyy")}</span>
      <span>EEE, do MMM, yy = {format(today, "EEE, do MMM, yy")}</span>
    </pre>
    </>
  );
};

export default App;
