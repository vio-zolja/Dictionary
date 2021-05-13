import React, {useState} from "react";

export default function Dictionary(){

    let [keyword, setKeyword] = useState("")

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword}...`)
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="form">

        <form onSubmit={search}>
          <input onChange={updateKeyword} type="search" placeholder="Type here..." />
          <input type="submit" value="Search" />
        </form>

      </div>
    )
}