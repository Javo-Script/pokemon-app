import {useState, useEffect} from 'react'
import PokemonRow from "./pokemonRow";
import PokemonInfo from "./pokemonInfo";


export default function PokemonList(){
  const [filter, setFilter] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(()=>{
    fetch()
  }, [])

  return(
    <div>
      <input className="searchInput"
        placeholder='search'
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
      <div className="tableGrid">
        <table>
          <thead>
            <tr>
              <th className="tCell">Name</th>
              <th className="tCell">Type</th>
            </tr>
          </thead>
          <tbody>
            {pokemon
              .filter((pokemon) => pokemon.name.english
                .toLowerCase()
                .includes(filter.toLowerCase())
              )
              .slice(0, 20)
              .map(pokemon =>(
                <PokemonRow pokemon={pokemon} key={pokemon.id} onSelect={(pokemon) => setSelectedItem(pokemon)}/>
            ))}
          </tbody>
        </table>
        {selectedItem && <PokemonInfo {...selectedItem}/>}
      </div>
    </div>
  )
}

        