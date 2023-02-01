import React, { useState } from "react";

export const CreateReminder = (props) => {
    let thing;
    let [reminder, createReminder] = useState("");
    let [date, setDate] = useState(new Date());
    //alert("Test: " + props.test);
    if (props.createReminder == true) {
        thing = <div>
            <h1>Create new reminder</h1>
            <input type="text"
                onChange={(e) => createReminder(e.target.value)}></input>
            <input
                type="date"
                value={props.date}
                onChange={(e) => setDate(e.target.value)}
            ></input>
            <button onClick={() => props.finishReminder(reminder, date, false)}>OK</button>
        </div>;
        //console.log("true");
    } else {
        thing = <h1>Ligma balls</h1>;
        //console.log("false");
    }
    return (
        <div>
            {thing}
        </div>
    );
}