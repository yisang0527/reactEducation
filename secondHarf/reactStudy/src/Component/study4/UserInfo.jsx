// UserInfo.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserInfo() {
    const [users, setUsers] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [ad, setAd] = useState(1);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const userList = users.filter((u) =>
        [u.name, u.email, u.company.name]
            .join(" ")
            .includes(keyword)
    ).sort((a, b) => a.name.localeCompare(b.name) * ad);

    // a.name.localeCompare(b.name) !== 0 ?
    // a.name.localeCompare(b.name) : a.email.localeCompare(b.email)

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            검색 <input type="text" onChange={(e) => setKeyword(e.target.value)} />

            <ul>
                {userList.length > 0 ? (
                    userList.map((u) => (
                        <li key={u.id} className="mb-4">
                            {u.name} / {u.email} / {u.company.name}
                        </li>
                    ))
                ) : (
                    <li>검색 결과가 없습니다.</li>
                )}
            </ul>

            <button onClick={() => setAd(ad * -1)}>
                {ad == 1 ? "오름차순" : "내림차순"}
            </button>
        </>
    );
}