// TodoList.jsx

import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

export default function TodoList() {
    const [todo, setTodo] = useState([
        { id: 1, text: "굿모닝 담배", done: false },
        { id: 2, text: "아침 샤워", done: false },
        { id: 3, text: "영양제 먹기", done: false },
        { id: 4, text: "출근", done: false },
        { id: 5, text: "회식", done: false },
        { id: 6, text: "집청소", done: false },
        { id: 7, text: "입을 옷 꺼내두기", done: false },
        { id: 8, text: "취침", done: false }
    ]);

    const [filter, setFilter] = useState("all");
    // all - 전체, active - 진행중, done - 완료

    // 남은개수 구하기 함수
    const remaining = todo.filter(t => !t.done).length;

    // filter 함수로 걸러주기 (전체, 진행중, 완료)
    const todoFilter = useMemo(() => {
        if (filter === "active") return todo.filter(t => !t.done);
        if (filter === "done") return todo.filter(t => t.done);
        return todo;
    }, [todo, filter]);

    // 체크박스 클릭하면 체크되거나 해제되거나
    const toggle = (id) => {
        setTodo(todo.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
    }

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            <div>
                <h2>Todo List</h2>
                <div>
                    <strong>남은 할 일: {remaining}개</strong>
                </div>

                <div>
                    <button onClick={() => setFilter("all")}>전체</button>
                    <button onClick={() => setFilter("active")}>진행중</button>
                    <button onClick={() => setFilter("done")}>완료</button>

                    <ul>
                        {todoFilter.map(
                            (t) => (
                                <li>
                                    <span>{t.text}</span>
                                    <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}