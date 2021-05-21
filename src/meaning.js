import React from "react";
import Synonyms from "./synonyms"

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h4>{props.meaning.partOfSpeech}</h4>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p className="definition">
                {definition.definition} </p>
            <br />
            <p className="example">
               {definition.example}
                <Synonyms synonyms={definition.synonyms} />
            </p>
            </div>
          );
        })}
      </div>
    );
  }