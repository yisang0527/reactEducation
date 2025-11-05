import React from "react"; /* react라는 파일에서 최상위 파일인 React를 가져온다 */
import "./Home.css";
import { Link, Routes, Route } from "react-router-dom"; /* react-router-dom라는 파일의 어딘가에 위치한 파일인 Link를 가져온다 */
import HomeIndex from "./HomeIndex";
import SignUp from './SignUp';
import SignIn from './SignIn';

export default function Home() {

    return (
        <>
            <div id="allWrap">
                <div id="headWrap">
                    <div className="headArea">
                        <Link to="/place" className="areaText">전시장</Link>
                    </div>

                    <div className="headArea">
                        <Link to="/dir" className="areaText">작가</Link>
                    </div>

                    <div className="headArea">
                        <Link to="/signUp" className="areaText">로그인</Link>
                    </div>
                </div>

                <Routes>
                    <Route path="/" element={<HomeIndex />} />
                    <Route path="/signUp" element={<SignUp />} />
                    <Route path="/signIn" element={<SignIn />} />
                </Routes>
            </div>
        </>
    );
}