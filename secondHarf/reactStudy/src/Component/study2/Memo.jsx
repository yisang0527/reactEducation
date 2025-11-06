import { Link } from "react-router-dom";
import { useState } from "react";

export default function Memo() {
    const [memoText, setMemoText] = useState("")

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            <input type="text" onChange={(e) => setMemoText(e.target.value)} />
            <p>작성 중인 메모: {memoText}</p>
        </>
    );
}