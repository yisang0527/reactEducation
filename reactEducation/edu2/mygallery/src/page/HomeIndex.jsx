import img from "../image/image1.jpg"

export default function HomeIndex() {
    return (
        <>
            <div id="mainWrap">
                <div className="mainArea">
                    <img src={img} alt="수달" className="mainImg" />
                </div>

                <div className="mainArea">
                    <img src={img} alt="수달" className="mainImg" />
                </div>
            </div>
        </>
    )
}