export default function PokemonInfo ({name, base}) {
  return(
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
}