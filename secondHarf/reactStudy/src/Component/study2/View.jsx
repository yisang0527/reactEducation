export default function View({ board }) {
    return (
        <>
            <p>제목: {board.title}</p>
            <p>내용: {board.content}</p>
        </>
    );
}