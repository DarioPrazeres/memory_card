import React from "react";

function NamePokemon(props){
    const name = showWay(props.number);
    return <h4 className="center">{name}</h4>
}
function showWay(number){
    switch(number){
        case 1: return "Charizard"; 
        case 2: return "Blissey"; 
        case 3: return "Decidueye"; 
        case 4: return "Deoxys  Attack"; 
        case 5: return "Garchomp"; 
        case 6: return "Gengar"; 
        case 7: return "Greninja"; 
        case 8: return "Jigglypuff"; 
        case 9: return "Litten"; 
        case 10: return "Mewtwo"; 
        case 11: return "Mimikyu"; 
        case 12: return "Rayquaza"; 
        case 13: return "Suicune"; 
        case 14: return "Wobbuffet"; 
        case 15: return "Zygarde"; 
        default: return "Pikachu"; 
    }
}
export default NamePokemon;