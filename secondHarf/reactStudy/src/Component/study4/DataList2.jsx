// DataList2.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

export default function DataList2() {
    const member = [
        { id: 56, userId: "Star Platinum", age: 45, tel: "01012123333" },
        { id: 1, userId: "The World", age: 35, tel: "01012743840" },
        { id: 2, userId: "Hermit Purple", age: 23, tel: "01023939503" },
        { id: 5, userId: "Silver Chariot", age: 38, tel: "01020591648" },
        { id: 8, userId: "Gold Experience", age: 15, tel: "01009275938" },
        { id: 15, userId: "Crazy Diamond", age: 20, tel: "01039524734" }
    ];

    const [age, setAge] = useState(0);
    const [userId, setUserId] = useState("");
    const [keyword, setKeyword] = useState("");

    // const member2 = member.filter(
    //     u => u.age >= age
    // );

    const member2 = member.filter(
        u => [u.userId, u.age, u.tel].join(" ")
            .includes(keyword)
    );

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            검색 <input type="text" onChange={(e) => setKeyword(e.target.value)} />

            <ul>
                {member2.map(
                    (m) => (
                        <li key={m.id} className="mb-4"> {m.userId} {m.tel}</li>
                    )

                )}

                {/* {member.map(
                    (m) => {
                        if (m.age >= 30 && m.age < 40)
                            return <li key={m.id} className="mb-4"> {m.userId} {m.tel}</li>
                    }
                )} */}
            </ul>
        </>
    );
}