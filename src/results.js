import React, {useState} from "react";

export default function Ergebnisse(props){
console.log(props)

let [data,setData] = useState("")

if(props.results){

console.log(`ok`)

    setData({
        word: props.word,
        term: props.meanings[0].partOfSpeech,
        meaning: props.meanings[0].definitions[0].definition,

        term2: props.meanings[1].partOfSpeech,
        meaning2: props.meanings[1].definitions[0].definition,
      })


return(
    <div>

        Hola
        
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
    return null
}


}