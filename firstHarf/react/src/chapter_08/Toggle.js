import React, { useState } from "react";

function Toggle() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // 방법 1. 함수안에 함수를 사용
    function handleClick() {
        console.log('----->')
        setIsToggleOn(
            (isToggleOn) => !isToggleOn);
    }

    // 방법 2. 화살표 함수를 사용
    // const handleClick = (){
    //     setIsTogleOn(
    //         (isTogleOn) => !isTogleOn);
    // }

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

export default Toggle;