import { useState } from "react";

export default function HomeWork() {
    const [wake, setWake] = useState("");
    const [go, setGo] = useState("");
    const [work, setWork] = useState("");
    const [back, setBack] = useState("");
    const [sleep, setSleep] = useState("");
    const [result, setResult] = useState("");

    const showResult = () => {
        setResult(`
            제 일과를 알려드리겠습니다. "${wake}"에 기상하여 "${go}"까지 등교한후, "${work}"동안 교육을 받은 뒤, "${back}"에 하교하겠습니다. 취침시간은 "${sleep}" 입니다.
        `);
    };

    return (
        <>
            <h3>이재영 일과</h3>
            기상시간: <input type="text" onChange={(e) => setWake(e.target.value)} /> <br />
            등교시간: <input type="text" onChange={(e) => setGo(e.target.value)} /> <br />
            교육시간: <input type="text" onChange={(e) => setWork(e.target.value)} /> <br />
            하교시간: <input type="text" onChange={(e) => setBack(e.target.value)} /> <br />
            취침시간: <input type="text" onChange={(e) => setSleep(e.target.value)} /> <br />

            <button onClick={showResult}>출력하기</button>

            <p>{result}</p>
        </>
    );
}