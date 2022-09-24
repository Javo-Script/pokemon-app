import './App.css';
import {useState} from 'react'
import pokemon from "./pokemon.json";

const PokemonRow = ({pokemon, onSelect}) => (
  <tr>
    <td className="tCell">{pokemon.name.english}</td>
    <td className="tCell">{pokemon.type.join(", ")}</td>
    <td>
      <button onClick={() => onSelect(pokemon)}>Select!</button>
    </td>
  </tr>
);

const PokemonInfo = ({name, base}) => (
  <div className='pokemonInfo'>
    <h2>{name.english}</h2>
    <table>
      {
        Object.keys(base).map((key) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{base[key]}</td>
          </tr>
        ))
      }
    </table>
  </div>
)

function App() {
  const [filter, setFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div className="App">
      <h1 className="pageTitle">Pokemon app</h1>
      <input className="searchInput"
        placeholder='search'
        value={filter}
        onChange={(evt) => setFilter(evt.target.value)}
      />
      <div className='tableGrid'>
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
  );
}

export default App;
