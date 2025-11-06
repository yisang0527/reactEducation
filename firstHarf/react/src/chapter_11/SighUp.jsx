import { useState } from 'react';

function SignUp() {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('남자');
    const [fruit, setFruit] = useState('딸기'); // 과일 상태 추가

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleChangeFruit = (event) => {
        setFruit(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}, 과일: ${fruit}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input
                    type='text'
                    value={name}
                    onChange={handleChangeName}
                />
            </label>
            <br />
            <label>
                성별:
                <select
                    value={gender}
                    onChange={handleChangeGender}>
                    <option value='남자'>남자</option>
                    <option value='여자'>여자</option>
                </select>
            </label>
            <br />
            <label>과일선택: </label>
            <select
                value={fruit}
                onChange={handleChangeFruit}
            >
                <option value="사과">사과</option>
                <option value="바나나">바나나</option>
                <option value="포도">포도</option>
                <option value="딸기">딸기</option>
            </select>
            <br />
            <button type='submit'>제출</button>
        </form>
    );
}

export default SignUp;
