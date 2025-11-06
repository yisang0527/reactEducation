// Schedule.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ScheduleForm from "./ScheduleForm";
import ScheduleList from "./ScheduleList";

export default function Schedule() {
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
    const [items, setItems] = useState([]);

    return (
        <div style={{ width: 520, margin: "50px auto" }}>
            <Link to="/" className="home">HOME</Link>

            <h2>하루 일과</h2>
            <ScheduleForm />
            <div style={{ marginTop: 50 }}>
                <ScheduleList />
            </div>
        </div>
    );
}