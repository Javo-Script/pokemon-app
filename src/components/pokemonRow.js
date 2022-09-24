export default function PokemonRow ({pokemon, onSelect}) {
  return (
    <tr>
      <td className="tCell">{pokemon.name.english}</td>
      <td className="tCell">{pokemon.type.join(", ")}</td>
      <td>
        <button onClick={() => onSelect(pokemon)}>Select!</button>
      </td>
    </tr>
  )
}