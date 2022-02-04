import React, { useState, useEffect, useContext, createContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import Datta from "./Datta";
import NamePokemon from "./NamePokemon";

const PointContext = createContext();
for(var a=[], i=0; i<16; ++i)a[i]=i;
for(var winner=[], i=0; i<16; ++i)winner[i]=0;
function shuffle(array){
    var tmp, current, top = array.length;
    if(top) while(--top){
        current = Math.floor(Math.random() *  (top + 1));
        tmp=array[current];
        array[current] = array[top];
        array[top]=tmp;
    }
    return array;
}
a=shuffle(a);
function Hello(){
   const [board, setBoard] = useState(a);
   const [count, setCount] = useState(0);
    
   useEffect(()=>{
        setBoard(()=>shuffle(a))
   }, [count]);
   
   
    return (
        <>
        <PointContext.Provider value={pointNumber()}>
            <Datta point={pointNumber()}/>
        </PointContext.Provider>
        <div className="App">
            {board.map(i=>{
                return <div key={i} className="card  p-2"><div onClick={()=>{setCount((c)=> c+1); showPosition(i)}}><Card  number={i}/></div>
                    <div className="card-body">
                        <NamePokemon number={i}/>
                    </div>
                </div>   
            })}
        </div>
        </>
        
    );
}
function showPosition(index){
    console.log(winner[index]);
    
        winner[index]++;
        console.log(winner[index]);
        if(loseWinner() === true){
            alert("YOU WIN");            
        }
   if(winner[index] > 1){
       alert("YOU LOSE");
       for(i=0; i<16; ++i) winner[i]=0;
    }
}
function loseWinner(){
    var sum = 0;
    for(i=0; i<16; ++i){
        sum =+ winner[i];
    }
    if(sum===16) return true;
}
function pointNumber(){
    var sum = 0;
    for(i=0; i<16; ++i){
        sum += winner[i];
    }
    return sum;
}
function Home(){
    return <Hello/>
}
export default Home;
export {PointContext};