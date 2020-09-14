import React, { useState } from "react";
import './Search.css';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ hideButtons = false }) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    let browser = useState("Browser");
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();
        console.log('you hit the search btn', input);

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    };

      // CHROME (to display Chrome on Button)
      if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        browser = "Chrome";
      }
      // FIREFOX (to display Firefox on Button)
      else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        browser = "Firefox";
          }


    const addExtension = () => {
        // CHROME (link to new extension page after publishing)
      if (navigator.userAgent.indexOf("Chrome") != -1 ) {
        window.open('https://chrome.google.com/webstore/detail/opentabs/igeeighenacaciapkehcacnojlegbnpa', '_blank');
      }
      // FIREFOX (link to new extension page after publishing)
      else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
        window.open('https://addons.mozilla.org/en-US/firefox/addon/opentabs_org/', '_blank');
      }
    };

    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)}/>
                <MicIcon />
            </div>

            {!hideButtons ? (
            <div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Search</Button>
                <Button onClick={addExtension} variant="outlined">Add To {browser}</Button>
            </div>
            ): (
            <div className="search__buttons">
                <Button className="search__buttonsHidden" type='submit' onClick={search} variant="outlined">Search</Button>
                <Button className="search__buttonsHidden" variant="outlined">I'm Feeling Lucky</Button>
            </div> 
            )}

        
        </form>
    )
}

export default Search
