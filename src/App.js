import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { CreateReminder } from './CreateReminder';

function App() {
  let [createReminder, setCreateReminder] = useState(false);
  let [reminderList, setReminderList] = useState([]);

  const newReminder = () => {
    setCreateReminder(true);
    console.log(createReminder);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>RPM</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => newReminder()}>Create reminder</button>
      </header>
      <CreateReminder createReminder = {createReminder} 
      test = "Test"
      finishReminder = {(reminder, date) => {
        let newReminder = {reminder:reminder, date:date};
        //setReminderList([...reminderList, newReminder]);
        reminderList.push(newReminder);
        console.log("reminderList length: " + reminderList.length);
        console.log("reminderList: " + JSON.stringify(reminderList[reminderList.length - 1]))
        setCreateReminder(false);
      }}
      />
    </div>
  );
}

export default App;
