import React, { useEffect, useState } from 'react';
import { PokemonListItem } from '../components/PokemonListItem';
import {DataFetcher} from "../modules/DataFetcher";

export function Home(){
    let [items, setItems] = useState([])
    
    useEffect(function(){
        DataFetcher.fetchAllPokemons().then((data) => {
            setItems(data.results)
        });
    },[])


    return (<div>
     
        {
            items ? items.map(element => ( <PokemonListItem key={element.name} data={element} /> )) : "loading"
            
        }
    </div>)
}