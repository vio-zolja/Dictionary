import React, {useState} from "react";
import axios from "axios"

export default function Dictionary(){
    let [ready,setReady] = useState(false)
    let [keyword, setKeyword] = useState("")
    let [data,setData] = useState("")

    function handleResponse(response){
      console.log(response);
      setData({
        word: response.data[0].word,
        term: response.data[0].meanings[0].partOfSpeech,
        meaning: response.data[0].meanings[0].definitions[0].definition,

        term2: response.data[0].meanings[1].partOfSpeech,
        meaning2: response.data[0].meanings[1].definitions[0].definition,
      })
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
        <div className="form">

          <form onSubmit={search}>
            <input onChange={updateKeyword} type="search" placeholder="Type here..." />
            <input type="submit" value="Search" />
          </form>

        </div>

        <header>
          
          <h1><p className="wordd">{data.word}</p></h1>
          <p className="wordkind"> {data.term}</p>
          <p className="definition">{data.meaning}</p>
          <br />
          <p className="wordkind">{data.term2}</p>
          <p className="definition">{data.meaning2}</p>


        </header>

      </div>
    )


}else{

  return(
    <div className="form">
      <form onSubmit={search}>
        <input onChange={updateKeyword} type="search" placeholder="Type here..." />
        <input type="submit" value="Search" />
      </form>
  </div>
  )
}

}