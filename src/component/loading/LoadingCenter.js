import React from "react";
import './LoadingCenter.css';
import {AiOutlineLoading} from 'react-icons/ai';
const LoadingCenter = () => {
    return (
        <div className="loading_container">
            <div className="-icon_loading">
                <AiOutlineLoading/>
            </div>
        </div>
    )
}

export default LoadingCenter;