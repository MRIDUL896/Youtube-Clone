import React from 'react';
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <div className="flex-grow p-4">
                    {/* Main Content Goes Here */}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
