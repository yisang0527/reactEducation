import { Link, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Write from './Write';
import View from './View';

export default function BoardMng() {
    const [board, setBoard] = useState({
        title: "",
        content: ""
    });

    return (
        <>
            <Link to="/" className="home">HOME</Link>

            <h1>게시판</h1>
            <Link to="/boardMng/write" style={{ marginRight: 50 }}>글쓰기</Link>
            <Link to="/boardMng/view">글보기</Link> <br />

            <Routes>
                <Route path="write" element={<Write board={board} setBoard={setBoard} />} />
                <Route path="view" element={<View board={board} />} />
            </Routes>
        </>
    );
}