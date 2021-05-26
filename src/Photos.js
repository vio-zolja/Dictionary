import React from "react";

export default function Pexels(props){
   console.log(props.photos)

   if(props.photos){
       return(
           <div className="photos">

            {props.photos.map(function(photo, index){
                return(
                    <img src={photo.src.tiny} key={index} />
                )
            })}

           </div>
       )
   }else{
       return(null)
   }
}