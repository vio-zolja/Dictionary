import React, {useState} from "react";
import axios from "axios"
import Ergebnisse from "./results"
import Pexels from "./Photos"

export default function Dictionary(){
    let [ready,setReady] = useState(false)
    let [keyword, setKeyword] = useState("")
    let [results,setResults] = useState(null)
    let [photos,setPhotos] = useState(null)

    function handleResponse(response) {
      console.log(response)
      setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
      setPhotos(response.data.photos)
    }

    function search(event){
        event.preventDefault();
        setReady(true)
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse)

        const pexelsApiKey = "563492ad6f917000010000012eb07cfd639e490994ead65887b23290";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`

        axios.get(
          pexelsApiUrl, {
            headers: {Authorization: `Bearer ${pexelsApiKey}`}
          }
        ).then(handlePexelsResponse)
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
            <input className="input2" type="submit" value="Search" />
          </form>          

        </div>
        <Ergebnisse results={results} />^
        <Pexels photos={photos} />
      </div>
    )


}else{

  return(
    <div className="form">
      <form onSubmit={search}>
        <h2>Dictionary</h2>
        <input className="input1" onChange={updateKeyword} type="search" placeholder="Type here..." />
        <input className="input2" type="submit" value="Search" />
      </form>

      <p className="prelouge">🔼 Every word has a meaning, find it here 🔼</p>
  </div>
  )
}

}