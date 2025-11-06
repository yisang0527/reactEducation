export default function Write({ board, setBoard }) {
    const onChange = (e) => { // input 태그의 onChange 이벤트 발생시 실행할 함수
        const { name, value } = e.target;
        setBoard(p => ({ ...p, [name]: value }));
    }

    return (
        <>
            <h3>메모를 입력하세요</h3>
            <input name="title" value={board.title} onChange={onChange} placeholder="제목: " /> <br />
            <input name="content" value={board.content} onChange={onChange} placeholder="내용: " /> <br />
        </>
    );
}