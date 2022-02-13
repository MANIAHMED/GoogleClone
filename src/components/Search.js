import React, { useState } from "react";
import "./Search.css";
import AppsIcon from "@material-ui/icons/Apps";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import SearchIcon from "@material-ui/icons/Search"
import Mic from "@material-ui/icons/Mic"



function Search({ hideButtons = false }) {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push('/search')
  };
  return (
    <form className="search">
      <div className="search_input">
        <   SearchIcon className="search_inputIcon" onClick={search} />
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter a term to search Google" />
        <Mic />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_buttons">
          <Button
            className="search_buttonsHidden"
            type="submit"
            variant="outlined"
            onClick={search}
          >
            Google Search
          </Button>
          <Button className="search_buttonsHidden" variant="outlined">
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
