import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import NavBar from "../Shared/NavBar/NavBar";
import RightSide from "../Shared/RightSide/RightSide";

const Home = () => {
    return (
        <div className="font-poppins">
            <Header></Header>
            <NavBar></NavBar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                <div className="border">
                    <LeftSide></LeftSide>
                </div>
                <div className="lg:col-span-2 border">
                    <p>Middle man I am</p>
                </div>
                <div className="border">
                    <RightSide></RightSide>
                </div>

            </div>
        </div>
    );
};

export default Home;