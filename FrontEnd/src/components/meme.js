import React from 'react';
import "../stylesheets/meme.css";
import Meme1 from "../media/meme1.svg";
import Meme2 from "../media/meme2.svg";
import Meme3 from "../media/meme3.svg";
import Meme4 from "../media/meme4.svg";
import Meme5 from "../media/meme5.svg";
export default function Meme(props) {
  let Memes=[Meme1,Meme2,Meme3,Meme4,Meme5];
  console.log(props.memeNumber);
  let num=props.memeNumber;
  if(props.memeNumber==10)
  {
    num+=1;
  }
  return (
    <div className='MMImage'>
    <img src={Memes[((num-1)/2)-1]} alt={"img"}/>
    </div>
  )
}
