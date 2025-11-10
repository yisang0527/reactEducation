import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div id="like">
                <h1>좋아요 ♥ : {count}</h1>
                <button onClick={() => setCount(count + 1)}>+ 증가</button>
                <button onClick={() => setCount(count - 1)}>- 증가</button>

                {count >= 10 && <p>좋아요 10 달성!</p>}
            </div>
        </>
    )
}
