import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "./Search";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import { ImNewspaper } from 'react-icons/im';
import { BsImages } from 'react-icons/bs';
import { MdVideoSettings } from 'react-icons/md';

import { BsThreeDotsVertical } from 'react-icons/bs';


function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            alt="searchgoogle"
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />
          <div className="searchPage_options">
            <div className="searchPage_optionLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/">All</Link>
              </div>
              <div className="searchPage_option">
                <ImNewspaper />
                <Link to="/">News</Link>
              </div>
              <div className="searchPage_option">
                <BsImages />
                <Link to="/">Images</Link>
              </div>
              <div className="searchPage_option">
                <MdVideoSettings />
                <Link to="/">Videos</Link>
              </div>
              <div className="searchPage_option">
                <BsThreeDotsVertical />
                <Link to="/">More</Link>
              </div>
            
            </div>

            <div className="searchPage_optionRight">
              <div className="searchPage_option">
                <Link to="/">Setting</Link>
              </div>
              <div className="searchPage_option">
                <Link to="/">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchPage_results">
          <p className="searchPage_resultsCount">
            About {data?.searchInformation.formattedTotalResults} results
            {data?.searchInformation.formattedSearchTime} {term}
          </p>
          {data?.items.map((item, index) => (
            <div key={index} className="searchPage_result">
              <a href={item.link}>{item.displayLink}</a>
              <a className="searchPage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchPage;
