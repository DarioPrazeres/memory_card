import React from "react";
import charizard from "../img/Charizard_AG_anime.png";
import blissey from "../img/blissey.png";
import pikachu from "../img/pikachu.jpg";
import decidueye from "../img/decidueye.jpg";
import deoxys_attack from "../img/deoxys-attack.jpg";
import garchomp from "../img/garchomp.jpg";
import gengar from "../img/Gengar.png";
import greninja from "../img/greninja.jpg";
import jigglypuff from "../img/jigglypuff.jpg";
import litten from "../img/litten.jpg";
import mimikyu from "../img/mimikyu.jpg";
import mewtwo from "../img/Mewtwo.png";
import rayquaza from "../img/rayquaza.jpg";
import suicune from "../img/Suicune.jpg";
import wobbuffet from "../img/wobbuffet.png";
import zygarde from "../img/Zygarde.jpg";
function Card(props){
    const src = showWay(props.number);
    return <img src={src}  alt="" className="bd-placeholder-img card-img-top"/>
}
function showWay(number){
    switch(number){
        case 1: return charizard; 
        case 2: return blissey; 
        case 3: return decidueye; 
        case 4: return deoxys_attack; 
        case 5: return garchomp; 
        case 6: return gengar; 
        case 7: return greninja; 
        case 8: return jigglypuff; 
        case 9: return litten; 
        case 10: return mewtwo; 
        case 11: return mimikyu; 
        case 12: return rayquaza; 
        case 13: return suicune; 
        case 14: return wobbuffet; 
        case 15: return zygarde; 
        default: return pikachu; 
    }
}
export default Card;