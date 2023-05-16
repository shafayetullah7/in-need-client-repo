import Lottie from "lottie-react";
import errorImg from '../assets/error.json';


const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div>
                <Lottie animationData={errorImg}></Lottie>
                <h3 className="text-center text-2xl font-bold text-red-600 mt-5">An error occurred!</h3>
            </div>
        </div>
    );
};

export default ErrorPage;