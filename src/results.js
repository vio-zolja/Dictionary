import React, {useState} from "react";

export default function Ergebnisse(props){
console.log(props)

let [data,setData] = useState("")

if(props.results){

console.log(`ok`)

    setData({
        word: props.results.word,
        term: props.results.meanings[0].partOfSpeech,
        meaning: props.results.meanings[0].definitions[0].definition,

      })


return(
    <div>

        Hola
        
         <header>
          
          <h1><p className="wordd">{data.word}</p></h1>
          <p className="wordkind"> {data.term}</p>
          <p className="definition">{data.meaning}</p>


        </header>
    </div>
)


}else{
    return null
}


}