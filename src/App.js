import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { CreateReminder } from './CreateReminder';
import { ReminderList } from './ReminderList';

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
      finishReminder = {(reminder, date, done) => {
        let newReminder = {reminder:reminder, date:date, done:done};
        //setReminderList([...reminderList, newReminder]);
        reminderList.push(newReminder);
        console.log("reminderList length: " + reminderList.length);
        console.log("reminderList: " + JSON.stringify(reminderList[reminderList.length - 1]))
        setCreateReminder(false);
      }}
      />
      <ReminderList reminderList={reminderList}
      changeDone={(reminder) =>{
        // update the state of done
      }}/>
    </div>
  );
}

export default App;
