import PokeCard from "./Pokecard";

let Pokedex =({pokemonDirectory})=>{
    console.log(pokemonDirectory)
    return ( <div>
        {pokemonDirectory.map(p => <PokeCard id = {p.id}
                                             name = {p.name} 
                                             type = {p.type} 
                                             image = {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}/>)}
</div>
    );
    }
    

export default Pokedex