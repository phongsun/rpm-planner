import React, { useState } from "react";

export const ReminderList = (props) => {
    let reminderHtml = [];
    for(let reminder of props.reminderList){
        reminderHtml.push(<div>
            <p>{reminder.reminder}     {reminder.date}     <input type="checkbox"></input></p>
        </div>);
    }
    return(
        <div>
            <h1>TO-DO:</h1>
            {reminderHtml}
        </div>
    );
}