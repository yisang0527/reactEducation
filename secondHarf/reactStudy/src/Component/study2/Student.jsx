import { Link } from "react-router-dom";
import StudentList from "./StudentList";

export default function Student() {
    const students = ["이순신", "장보고", "박문수"];

    return (
        <div>
            <Link to="/" className="home">HOME</Link>

            <h2>학생 명단</h2>
            <StudentList names={students} />
        </div>
    );
}