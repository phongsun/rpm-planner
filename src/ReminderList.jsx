import React, { useState } from "react";

export const ReminderList = (props) => {
    let testIfThisWorks = [];
    let [reminderHtml, setReminderHtml] = useState([]);
    let [realHtml, setRealHtml] = useState([]);
    let deleteReminder = (index) =>{
        console.log("Index: " + index);
        reminderHtml.splice(index, 1);
        props.removeReminder(index);
        setReminderHtml();
        console.log("reminderHtml lengthasd: "  + reminderHtml.length);
        //populate();
        //console.log("reminderHtml length: "  + reminderHtml.length);
    }
    /*let populate = () => {
        for(let reminder of props.reminderList){
            reminderHtml.push(<div key={props.reminderList.indexOf(reminder).toString()}>
                <p>{reminder.reminder}   {reminder.date}   <input type="checkbox"></input> <button className="delete-reminder-button"
                onClick={() => deleteReminder(0)}>X</button></p>
            </div>);
            console.log("reminderHtml length: "  + reminderHtml.length);
        }
        //setRealHtml(reminderHtml);
    }
    populate();*/
    return(
        <div>
            <h1>TO-DO:</h1>
            {props.reminderList.map(x => x)}
        </div>
    );
}