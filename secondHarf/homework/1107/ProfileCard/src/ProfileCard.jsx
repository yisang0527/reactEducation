import { useState } from "react";

export default function App() {
  const [inputName, setInputName] = useState("");
  const [savedName, setSavedName] = useState("");

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const handleClick = () => {
    setSavedName(inputName);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>이름을 입력하세요</h2>
      <input
        type="text"
        value={inputName}
        onChange={handleChange}
        placeholder="이름을 입력해주세요"
      />
      <button onClick={handleClick} style={{ marginLeft: "10px" }}>
        이름 저장
      </button>

      {savedName && <p>당신의 이름은 {savedName}입니다.</p>}
    </div>
  );
}
