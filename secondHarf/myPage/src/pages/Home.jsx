import "./Home.css";
import { Link, Outlet, Routes, Route } from "react-router-dom";
import HomeIndex from "./HomeIndex";
import About from "./About";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <div id="wrap">
                <div id="head">
                    <Link to="/" className="tab">HOME</Link>
                    <Link to="/about" className="tab">About</Link>
                    <Link to="/contact" className="tab">Contact</Link>
                </div>
            </div>

            <Outlet />

            {/* <Routes>
                <Route path="/" element={<HomeIndex />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes> */}
        </>
    );
}