import { Link } from "react-router-dom";

export default function Bottom() {
    return (
        <footer>
            <Link to="/" className="foot">Home</Link>
            <Link to="/blue" className="foot">Blue</Link>
            <Link to="/red" className="foot">Red</Link>
            <Link to="/yellow" className="foot">Yellow</Link>
            <Link to="/brown" className="foot">Brown</Link>
            <Link to="/green" className="foot">Green</Link>
        </footer>
    )
}