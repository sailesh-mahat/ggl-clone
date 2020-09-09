import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from './Search';


function Home() {
    return (
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLeft'>
                {/* <Link to='/about'>Home</Link>
                    <Link to='/store'>Donate</Link> */}
                <a href = "https://opentabs.org/">Home</a>
                <a href = "https://donorbox.org/opentabs">Donate</a>
                </div>
                <div className='home__headerRight'>
                {/*    <Link to='/gmail'>Feedback</Link> */}
                    <a href = "https://docs.google.com/forms/d/e/1FAIpQLScNIVjuhLCUF_CczUf2eCP3VOIiIfl-UhJAsh-f-SJbUq7WnQ/viewform">Feedback</a>
                    <Link to='/images'>Login</Link>
                    <AppsIcon />
                    <Avatar />
                </div>

            </div>

            <div className='home__body'>
                <img 
                    src="https://www.againstmalaria.com/images/00/24/24394.jpg" alt=""
                />
                <div className="home__inputContainer">
                    <Search /> 
                </div>
            </div>
        </div>
    )
}

export default Home
