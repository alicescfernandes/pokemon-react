import React, { useEffect, useState } from 'react';
import { DataFetcher } from '../modules/DataFetcher';

export function PokemonListItem(props){
    let {data} = props;

 return(<div className="pokemon-list">

     <img src={data.sprites.front_default}></img>
     <p >{data.name}</p>
 </div>)
}