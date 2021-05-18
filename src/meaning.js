import React from "react";

export default function Meaning(props){
console.log(props.meaning)
return(
    <div>
        <h4>The {props.meaning.partOfSpeech} </h4>
        {props.meaning.definitions.map(function(definition, index){
            return(
                <div key={index}> 
                   <p className="definition">{definition.definition}</p>  
                   <p className="example"> {definition.example}</p> 
                </div> 
            )
        })}
    </div>
)

}