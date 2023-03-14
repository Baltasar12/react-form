import { useState } from "react";
import SearchBox from "./components/SearchBox";
import data from "../../data/users.json"
import "./style.css"
import SearchResults from "./components/SearchResult";


export default function Search(){

    const [isAtTop,setIsAtTop] = useState(false);
    const [results,setResults] = useState([]);

    const handleCloseSeach = () => {
        setIsAtTop(false);
        setResults([]);
    };


    const handleSearchClick = (searchText) => {
        setIsAtTop(true);
        if (data?.length){
            const searchTextMinus = searchText.toLowerCase();
            const filteredData = data.filter((value) =>  (
                    value.name.toLowerCase().includes(searchTextMinus) || 
                    value.name.toLowerCase().includes(searchTextMinus) ||
                    value.email.toLowerCase().includes(searchTextMinus) ||
                    value.username.toLowerCase().includes(searchTextMinus) 
                )
            );
            setResults(filteredData);
        }
    };
    


    return(
        <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
            <SearchBox onSearch={handleSearchClick} onClose={handleCloseSeach} isSearchiing={isAtTop}/>
            <SearchResults results={results} isSearchiing={isAtTop}/>
        </div>
    );
}