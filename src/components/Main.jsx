import Carousel from "./home/Carousel";
import Post from "./home/Post";
import Sectors from "./home/Sectors";
import Footer from "./shared/Footer";


const Main = () => {
    return (
        <div>
            <div className="w-full">
                <Carousel></Carousel>
            </div>
            <div className="mt-52">
                <Sectors></Sectors>
            </div>
            <div className="mt-52 overflow-hidden">
                <Post></Post>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
        
    );
};

export default Main;