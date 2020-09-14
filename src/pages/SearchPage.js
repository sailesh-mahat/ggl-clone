import React from 'react'
import './SearchPage.css'
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import { Link } from "react-router-dom";
import Search from './Search';
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import RoomIcon from "@material-ui/icons/Room";
import FlightIcon from '@material-ui/icons/Flight';
import FunctionsIcon from '@material-ui/icons/Functions';
import DashboardIcon from '@material-ui/icons/Dashboard';
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);

    console.log(data);

    return (
        <div className='searchPage'>

            <div className='searchPage__header'>
                <Link to="/">
                    <img
                    className="searchPage__logo"
                    src="https://www.againstmalaria.com/images/00/24/24394.jpg"
                    alt=""
                    />
                </Link>

                <div className='searchPage__headerBody'>
                    <Search hideButtons />
                
                    <div className='searchPage__options'>
                        <div className='searchPage__optionsLeft'>
                            <div className='searchPage__option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage__option'>
                                <ImageIcon />
                            {/*    <Link to="/images">Images</Link> */}
                                <a href = {"https://www.google.com/search?q=" + term + "&tbm=isch"}>Images</a>
                            </div>
                            <div className='searchPage__option'>
                                <VideoLibraryIcon />
                            {/*    <Link to="/videos">Shopping</Link> */}
                                <a href = {"https://www.google.com/search?q=" + term + "&tbm=vid"}>Videos</a>

                            </div>
                            <div className='searchPage__option'>
                                <DescriptionIcon />
                            {/*    <Link to="/news">News</Link> */}
                                <a href = {"https://www.google.com/search?q=" + term + "&tbm=nws"}>News</a>
                            </div>
                            
                            <div className='searchPage__option'>
                                <RoomIcon />
                            {/*    <Link to="/maps">Maps</Link> */}
                                <a href = {"https://www.google.com//maps/search/" + term }>Maps</a>
                            </div>
                            <div className='searchPage__option'>
                                <FlightIcon />
                                <a href = "https://flights.opentabs.org/">Flights</a>
                            </div>
                            <div className='searchPage__option'>
                                <FunctionsIcon />
                                <a href = {"https://www.wolframalpha.com/input/?i=" + term }>Calculator</a>
                            </div>
                            <div className='searchPage__option'>
                                <DashboardIcon />
                                <a href = "https://app.opentabs.org/tabbing">Dashboard</a>
                            </div>
                            <Button className="addTo__button" variant="outlined">Add to Browser</Button>
                        {/*    <div className='searchPage__option'>
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>  */}      
                        </div>
                        {/*<div className='searchPage__optionsRight'>
                            <div className='searchPage__option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage__option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>

              {true && (
                <div className='searchPage__results'>
                    <p className='searchPage__resultCount'>
                        About {data?.searchInformation.formattedTotalResults} results
                        ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className='searchPage__result'>
                            <a className='searchPage__resultTitle' href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <a className='searchPage__resultLink' href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img className='searchPage__resultImage' src={item.pagemap?.cse_image[0]?.src} alt="" />
                                )}

                                {item.displayLink}
                            </a>
                            
                            <p className='searchPage__resultSnippet'>
                                {item.snippet}
                            </p>
                        </div>
                    ))}   
             </div> 
            )}  

        </div>
    )
}

export default SearchPage
