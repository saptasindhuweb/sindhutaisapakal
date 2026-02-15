"use client";

import { ProgressBar } from "react-loader-spinner";

const PageLoader = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-white">
            <ProgressBar
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="progress-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default PageLoader;
