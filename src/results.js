import React from "react";
import Meaning from "./meaning"

export default function Ergebnisse(props){

if(props.results){

console.log(`ok`)

return(
    <div>
        {props.results.meanings.map(function(meaning, index){
            return(
                <div key={index}> <hr />
                    <Meaning meaning={meaning}/>
                </div>
            )
        })}

    </div>
)


}else{
    return null
}


}