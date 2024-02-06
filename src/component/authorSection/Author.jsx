import React from "react";
import registrationBanner from '../../assets/images/registrsationBanner.jpg'

const Author = () => {
    return (
        <div className=" h-full bg-white text-black">
            <div>
                <div className="flex items-center justify-center ">
                    <img src={registrationBanner} alt="" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default Author;
