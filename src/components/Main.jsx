
import { Helmet } from "react-helmet-async";
import Carousel from "./home/Carousel";
import Post from "./home/Post";
import Sectors from "./home/Sectors";
import Footer from "./shared/Footer";
import { ToastContainer } from "react-toastify";


const Main = () => {
    return (
        <div>
            <Helmet>
                <title>In-need</title>
            </Helmet>
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
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </div>
        
    );
};

export default Main;