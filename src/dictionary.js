import React, {useState} from "react";
import axios from "axios"
import Ergebnisse from "./results"

export default function Dictionary(){
    let [ready,setReady] = useState(false)
    let [keyword, setKeyword] = useState("")
    let [results,setResults] = useState(null)

    function handleResponse(response) {
      console.log(response)
      setResults(response.data[0]);
    }

    function search(event){
        event.preventDefault();
        setReady(true)
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse)
    }

    function updateKeyword(event){
        setKeyword(event.target.value);
    }

    
if(ready){
  return(
      <div>
        <h2>Dictionary</h2>
        

        <div className="form">

          <form onSubmit={search}>
          
            <input className="input1" onChange={updateKeyword} type="search" placeholder="Type here..." />
            <input type="submit" value="Search" />
          </form>          

        </div>
        <Ergebnisse results={results} />
      </div>
    )


}else{

  return(
    <div className="form">
      <form onSubmit={search}>
        <h2>Dictionary</h2>
        <input className="input1" onChange={updateKeyword} type="search" placeholder="Type here..." />
        <input type="submit" value="Search" />
      </form>

      <p className="prelouge">🔼 Every word has a meaning, find it here 🔼</p>
  </div>
  )
}

}