import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Marque = () => {
    return (
        <div className="flex">
            <button className="btn btn-accent">Breaking News</button>
            <Marquee pauseOnHover={true} >
              <Link to="/" >Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default Marque;