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
            <div className="mt-52" id="sectors">
                <Sectors></Sectors>
            </div>
            <div className="mt-52 overflow-hidden" id="post-req">
                <Post></Post>
            </div>
            <div className="mt-52">
                <Footer></Footer>
            </div>
        </div>
        
    );
};

export default Main;