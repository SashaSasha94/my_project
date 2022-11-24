import { useState } from "react";
import {Card} from './Card';
import {Header} from './Header';
import {Basket} from './Basket';

 function Project () {

   return ( 
   
    <div className="wrapper">
    
     <Basket/>
     <Header/>
      <div className="content">
      <div className="d-flex">
        <h1> All toys </h1>
        <div className="search_block">
       <img classNamae="loupe" width={20} height={20} src="/img/loupe.png" alt="serach"></img>
       <input placeholder="Search..."></input>
        </div>
      </div>

        <div className="d_flex">
        <Card/>
        

        <div className="card">
        <div className="like">
          <img src="/img/heart_unliked.png" alt="unliked"></img>
          </div>
          <img width={155} height={135} src="/img/rabbit.jpg"alt="Toys"/>
          <p> Colored cat</p>
          <div className="card_bottom">
            <div className="card_under_bottom">
              <span> Cost: </span>
              <b> 12 999 rub.</b>
              <button className="button"><img width={11} height={11} src="/img/plus_40632.png"></img></button>
            </div>
           
          </div>
        </div>

        <div className="card">
        <div className="like">
          <img src="/img/heart_unliked.png" alt="unliked"></img>
          </div>
          <img width={155} height={135} src="/img/wood.jpg"alt="Toys"/>
          <p> Colored cat</p>
          <div className="card_bottom">
            <div className="card_under_bottom">
              <span> Cost: </span>
              <b> 12 999 rub.</b>
              <button className="button"><img width={11} height={11} src="/img/plus_40632.png"></img></button>
            </div>
          </div>
        </div>

        <div className="card">
        <div className="like">
          <img src="/img/heart_unliked.png" alt="unliked"></img>
          </div>
          <img width={155} height={135} src="/img/dog.jpg"alt="Toys"/>
          <p> Colored cat</p>
          <div className="card_bottom">
            <div className="card_under_bottom">
              <span> Cost: </span>
              <b> 12 999 rub.</b>
              <button className="button"><img width={11} height={11} src="/img/plus_40632.png"></img></button>
            </div>
          </div>
        </div>
        </div>
        </div>
          </div>
        
        
    

  

 )
 }

 export default Project
