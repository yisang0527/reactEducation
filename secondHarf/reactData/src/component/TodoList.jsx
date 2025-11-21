// TodoList.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";


export default function TodoList() {
    // 파이어베이스 컬렉션에서 가지고 온 데이터들 담을 공간 필요
    const [todos, setTodos] = useState([]);

    useEffect(
        () => {
            // 컬렉션에서 가져오기
            const ref = collection(db, "todos");

            // 정렬
            const res = query(ref, orderBy("createAt", "desc"));

            const unsub = onSnapshot(res, (snap) => {
                const list = snap.docs.map((d) => (
                    { id: d.id, ...d.data() }
                ));
                setTodos(list);
            });
            return () => unsub(); // 파이어베이스 해제 - 컴포넌트 연결 해제시
        }
        , []);

    return (
        <ul className="my-3">
            {
                todos.map((t) => (
                    <li key={t.id} className="flex items-center justify-between">
                        <span className="text-white">{t.text}</span>
                    </li>
                ))
            }
        </ul>
    );
}