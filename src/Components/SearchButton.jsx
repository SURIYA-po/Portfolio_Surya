import React, { useRef,useState  } from 'react';
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import './searchButton.css'
function SearchButton( {onMessage}) {

    const searchFieldRef = useRef(null);
  const searchInputRef = useRef(null);
  const pairRef = useRef(null);
  const searchRef = useRef(null);

  const [searchVisibles, setSearchVisibles] = useState(false);
  

  const toggleSearch = () => {
    
    if (!searchVisibles) {
      searchFieldRef.current.style.maxWidth = '300px';
      
      pairRef.current.style.backgroundColor = "#70e000";
      searchRef.current.style.backgroundColor = "#70e000";
      searchInputRef.current.focus();
    
      
    } else {
      searchFieldRef.current.style.maxWidth = '0px';
    
      pairRef.current.style.backgroundColor = "#1b1c1d";
      searchRef.current.style.backgroundColor = "#3c3c3c";
      
    }
 
    setSearchVisibles(!searchVisibles);
    onMessage(!searchVisibles);
  };

  console.log(searchVisibles)
    
  return (
    
         <div className='pair' ref={pairRef}>
          <div className="search-field" ref={searchFieldRef}>
            <input type="text" placeholder="Search..." ref={searchInputRef} />
          </div>
          <div className='search' ref={searchRef}>
            {searchVisibles ? (
              <RxCross2 onClick={toggleSearch} />
            ) : (
              <CiSearch onClick={toggleSearch} />
            )}
          </div>
<br /><br />
          {searchVisibles && (
        <div className='textarea'>
          {/* Text area to display searched items */}
          <textarea
            name="searchResults"
            id="searchResults"
            placeholder="Searched Items"
            readOnly
            rows={4}
            cols={30}
          />
        </div>
      )}
        </div>

  )
}

export default SearchButton