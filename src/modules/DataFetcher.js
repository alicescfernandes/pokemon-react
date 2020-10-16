class DataFetcher{
    static BASE_URL = "https://pokeapi.co/api/v2/pokemon";
    static DEFAULT_LIMIT = 6;
    static CACHE_RESULTS = true;
    
    static async fetchPokemonsList(limit=this.DEFAULT_LIMIT,offset=0){
        return fetch(`${this.BASE_URL}?limit=${limit}&offset=${offset}`).then(res => res.json());
    }

    static async fetchAllPokemons(limit=this.DEFAULT_LIMIT,offset=0){
        let data = await this.fetchPokemonsList(limit,offset);
        try {
            for(let item = 0; item < data.results.length;item++){
                let pokemonDetails = await fetch(data.results[item].url).then(res => res.json());
                data.results[item] = pokemonDetails;
            }
    
        } catch (error) {
        return Promise.reject(error);
            
        }
    
        return Promise.resolve(data);

    }

    static async fetchPokemon(id){
        if(Number.isInteger(id)){
            return fetch(`${this.BASE_URL}/${id}`).then(res => res.json()); //returns a 404 when not found
        }else{
            return Promise.reject("id_not_a_number");
        }
    }
}


export {DataFetcher};