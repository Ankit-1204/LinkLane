import React, { useState } from "react";
import LinkLaneLogo from "../assets/LinkLanelogo.jpg";
import "../components/topbar.css";
import axios from 'axios';

const Topbar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = async (e) => {
        e.preventDefault(); // Prevent form submission
        
        try {
            const { data } = await axios.post("http://localhost:5000/api/search/navbar", { name: searchTerm });
            console.log(data);
        } catch (error) {
            console.log("error is :", error);
        }
    }

    return (
        <div className="navbar">
            <a href="#"><img className="navbar_logo" src={LinkLaneLogo} alt="LinkLane Logo"></img></a>
            <form onSubmit={handleSearchSubmit}>
                <div className="search-container">
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="search-button">Search</button>
                </div>
            </form>
            <ul>
                <li>Profile</li>
                <li>...</li>
            </ul>
        </div>
    );
};

export default Topbar;
