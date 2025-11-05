import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function SignIn() {
    return (
        <>
            <div id="wrap">
                <h1>회원가입</h1>

                <div className="input-feild">
                    <label>ID: </label>
                    <input type="text" />
                </div>

                <div className="input-feild">
                    <label>PASSWORD: </label>
                    <input type="password" />
                </div>

                <p>회원가입</p>

                <Link to="/" id="add">홈으로</Link>
            </div>
        </>
    );
}