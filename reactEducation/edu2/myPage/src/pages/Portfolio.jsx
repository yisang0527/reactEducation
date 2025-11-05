import "./Portfolio.css";
import { Link } from "react-router-dom";
import photo1 from "../images/photo1.jpg"
import photo2 from "../images/photo2.jpg"
import photo3 from "../images/photo3.jpg"
import photo4 from "../images/photo4.jpg"
import photo5 from "../images/photo5.jpg"
import photo6 from "../images/photo6.jpg"

export default function Portfolio() {
    return (
        <>
            <div id="wrap">
                <div id="head">
                    <Link to="/" className="tab2">HOME</Link>
                </div>
                
                <p className="p2">나의 포트폴리오</p>

                <div id="imgWrap">
                    <img src={photo1} />
                    <img src={photo2} />
                    <img src={photo3} />
                    <img src={photo4} />
                    <img src={photo5} />
                    <img src={photo6} />
                </div>
            </div>
        </>
    );
}