import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function SignUp() {
    return (
        <>
            <div id="wrap">
                <h1>로그인</h1>

                <div className="input-feild">
                    <label>ID: </label>
                    <input type="text" />
                </div>

                <div className="input-feild">
                    <label>PASSWORD: </label>
                    <input type="password" />
                </div>

                <p>로그인</p>

                <Link to="/signIn" id="add">회원가입</Link>
            </div>
        </>
    );
}